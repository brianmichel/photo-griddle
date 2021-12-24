const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
const glob = require('glob')
const exif = require('exifreader')
const util = require('util')

const config = JSON.parse(fs.readFileSync("./manifest-config.json"))

// TODO: Using ~ in the path doesn't expand, how do I fix this without another library?
const input = path.join(config['input-directory'], '*.jpg')
const photoDestination = path.join(config['photo-output-directory'])
const manifestDestination = path.join(config['manifest-output-directory'])

async function metadata(filename) {
  let data = {}

  const tags = await exif.load(filename);

  data.camera = tags['Model'].description
  data.created = tags['DateCreated'].description

  const aperture = tags['FNumber']
  data.aperture = '-'
  if (aperture !== undefined && aperture.value.length == 2) {
    data.aperture = `${aperture.value[0] / aperture.value[1]}`
  }


  const shutter = tags['ExposureTime']
  data.shutter = '-'
  if (shutter !== undefined && shutter.value.length == 2) {
    data.shutter = `${shutter.value[0]}/${shutter.value[1]}`
  }

  const iso = tags['ISOSpeedRatings']
  data.iso = '-'
  if (iso !== undefined) {
    data.iso = `${iso.value}`
  }

  return data
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
}

async function processPhoto(filename) {
  let photo = {
    exif: {}
  }

  const filePath = path.parse(filename)
  photo.name = filePath.name
  photo.filename = filePath.base
  photo.exif = await metadata(filename)

  return photo
}

(async function generate(inputDirectory, photoOutput, manifestOutput) {
  const files = glob.sync(inputDirectory)
  fs.mkdirSync(photoOutput, { recursive: true })

  let manifest = {
    generated: Date.now(),
    version: 1,
    photos: []
  }

  for (const file of files) {
    let jsonPhoto = await processPhoto(file)
    manifest.photos.push(jsonPhoto)
    resize(file, photoOutput)
  }

  const json = JSON.stringify(manifest)
  fs.writeFileSync(path.join(manifestOutput, 'manifest.json'), json, 'utf-8')
})(input, photoDestination, manifestDestination)