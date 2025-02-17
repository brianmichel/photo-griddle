/* eslint-disable @typescript-eslint/no-var-requires */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const glob = require("glob");
const exif = require("exifreader");
/* eslint-enable @typescript-eslint/no-var-requires */

const config = JSON.parse(
  fs.readFileSync("./src/assets/website-config.json")
).manifest_generation;

// TODO: Using ~ in the path doesn't expand, how do I fix this without another library?
const input = path.join(config.input_directory, "*.jpg");
const photoDestination = path.join(config.photo_output_directory);
const manifestDestination = path.join(config.manifest_output_directory);

/**
 * Read selective metadata out of a photo's EXIF tag (if possible).
 *
 * @param string filename The filename of the photo to extract metadata from if possible.
 * @returns An object with keys .ing various pieces of metadata for the photo.
 */
async function metadata(filename) {
  let data = {};

  const tags = await exif.load(filename);
  const camera = tags["Model"];
  data.camera = "-";
  if (camera !== undefined) {
    data.camera = camera.description;
  }

  const created = tags["DateCreated"];
  data.created = new Date().toJSON();
  if (created !== undefined) {
    data.created = created.description;
    console.log(created.description);
  }

  const aperture = tags["FNumber"];
  data.aperture = "-";
  if (aperture !== undefined && aperture.value.length == 2) {
    data.aperture = `${aperture.value[0] / aperture.value[1]}`;
  }

  const shutter = tags["ExposureTime"];
  data.shutter = "-";
  if (shutter !== undefined && shutter.value.length == 2) {
    data.shutter = `${shutter.value[0]}/${shutter.value[1]}`;
  }

  const iso = tags["ISOSpeedRatings"];
  data.iso = "-";
  if (iso !== undefined) {
    data.iso = `${iso.value}`;
  }

  return data;
}

/**
 * Resize a given file path to the desired dimensions
 *
 * @param string filename The filename that should be resized (this should point to an jpeg)
 * @param string output The directory in which to output the resizes.
 */
async function resize(filename, output) {
  const filePath = path.parse(filename);

  const sizes = [
    {
      name: "preview",
      path: path.join(output, `${filePath.name}_preview.jpg`),
      dimension: 2000,
    },
    {
      name: "thumb",
      path: path.join(output, `${filePath.name}_thumb.jpg`),
      dimension: 600,
    },
  ];

  return Promise.all(
    sizes.map((size) => {
      return sharp(filename)
        .resize(size.dimension, null, {
          kernel: sharp.kernel.lanczos3,
          fit: sharp.fit.outside,
        })
        .toFile(size.path)
        .then((value) => {
          return {
            name: size.name,
            ...value,
          };
        });
    })
  );
}

/**
 * Begin the generation process for a jpeg at `filename`.
 *
 * @param string filename The full filename of a photo that should be processed.
 * @returns
 */
async function processPhoto(filename) {
  let photo = {
    exif: {},
  };

  const filePath = path.parse(filename);
  photo.name = filePath.name;
  photo.filename = filePath.base;
  photo.exif = await metadata(filename);

  return photo;
}

/**
 *  The main entry point for the manifest generation.
 *
 * @param string inputDirectory The input directory to read the source photos from.
 * @param string photoOutput The directory in which to place the processed photos.
 * @param string manifestOutput The directory in which to place the manifest file.
 *
 * @note This is called with the weird format to allow for it to be marked as async.
 */
(async function generate(inputDirectory, photoOutput, manifestOutput) {
  const files = glob.sync(inputDirectory);
  fs.mkdirSync(photoOutput, { recursive: true });

  let manifest = {
    generated: Date.now(),
    version: 1,
    photos: [],
  };

  const totalFiles = files.length;
  const processingPromises = [];

  for (const [index, file] of files.entries()) {
    console.info(`(${index + 1} / ${totalFiles}) Processing file: ${file}...`);
    const promise = (async () => {
      let jsonPhoto = await processPhoto(file);
      const resizes = await resize(file, photoOutput);
      let mapped = resizes.map((item) => ({
        [item.name]: { width: item.width, height: item.height },
      }));
      jsonPhoto.sizes = Object.assign({}, ...mapped);
      return jsonPhoto;
    })();
    processingPromises.push(promise);
  }

  const photos = await Promise.all(processingPromises);
  manifest.photos = photos;

  const json = JSON.stringify(manifest);
  fs.writeFileSync(path.join(manifestOutput, "manifest.json"), json, "utf-8");
})(input, photoDestination, manifestDestination);
