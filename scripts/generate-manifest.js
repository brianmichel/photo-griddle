const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
const glob = require('glob')
const exif = require('exif-reader')
const util = require('util')

const config = JSON.parse(fs.readFileSync("./manifest-config.json"))

// TODO: Using ~ in the path doesn't expand, how do I fix this without another library?
const input = path.join(config['input-directory'], '*.jpg')
const output = path.join(config['output-directory'])

async function metadata(filename) {
  const buffer = await sharp(filename).metadata()
  const decoded = exif(buffer.exif)
  return decoded
}

async function resize(filename, output) {
  const filePath = path.parse(filename)

  const sizes = [
    {
      path: path.join(output, `${filePath.name}_preview.jpg`),
      dimension: 2000
    },
    {
      path: path.join(output, `${filePath.name}_thumb.jpg`),
      dimension: 400
    }
  ]

  Promise
    .all(sizes.map((size) => {
      return sharp(filename)
        .resize(size.dimension, null, {
          kernel: sharp.kernel.lanczos3
        })
        .toFile(size.path)
    }))
    .then(values => {
      console.log(values)
    })
}

async function processPhoto(filename) {
  let photo = {
    exif: {}
  }
  const filePath = path.parse(filename)
  photo.name = filePath.name
  photo.filename = filePath.base

  const decoded = await metadata(filename)

  photo.exif.camera = decoded.image.Model
  photo.exif.created = decoded.exif.DateTimeOriginal
  photo.exif.shutter = decoded.exif.ExposureTime
  photo.exif.aperture = decoded.exif.FNumber
  photo.exif.iso = decoded.exif.ISO
  return photo
}

(async function generate(inputDirectory, outputDirectory) {
  const files = glob.sync(inputDirectory)
  fs.mkdirSync(outputDirectory, { recursive: true })

  let manifest = {
    generated: Date.now(),
    version: 1,
    photos: []
  }

  for (const file of files) {
    let jsonPhoto = await processPhoto(file)
    console.log(jsonPhoto)
    manifest.photos.push(jsonPhoto)
    resize(file, outputDirectory)
  }

  const json = JSON.stringify(manifest)
  fs.writeFileSync(path.join(outputDirectory, 'manifest.json'), json, 'utf-8')
})(input, output)