# photo-griddle

A small SPA to serve a responsive grid of photos that are all local to the application itself. This application is very minimally configurable, but serves the needs of the author quite well.

![](/readme-images/site.png)

## Setup

Ensure that you have yarn installed before anything.

1. Adjust the `src/assets/website-config.json` to reflect your setup, see below for more information on that file.
2. Run `yarn install`.
3. Run `yarn run generate-manifest`, this will resize all photos specified in the config and place them into the right folder.
4. Run `yarn run serve` to build and run the site.

## The Configuration file

The configuration file helps configure various portions of this application, let's talk about the manifest generation portion of this file...

```json
...
  "manifest_generation": {
    "input_directory": "./photos",
    "photo_output_directory": "./public/media",
    "manifest_output_directory": "./src/assets"
  }
...
```

* `input_directory` - this is the directory on disk where your source photos are, you don't have to include them in the repo, but sometimes it's easier to deploy the entire site that way.
* `photo_output_directory` - this is where the resized photos should be put as a result of running the `generate-manifest` script. This should almost certainly stay `./public/media` otherwise you will have to adjust other parts of the application to look into a new place.
* `manifest_output_directory` - this is where the manifest of all resized photos should live after the `generate-manifest` script is run. Again, this should likely stay the same path so that it an be read in by the application correctly.

## Additional useful Yarn commands

* `yarn build` - compiles and minifies for production
* `yarn lint` - lints and fixes files in the project

### Customize configuration

This project uses Vuejs, so please refer to the [Configuration Reference](https://cli.vuejs.org/config/) for even more customizability.

## Credits

The css that powers this site is heavily inspired by [photo-stream](https://github.com/maxvoltar/photo-stream) by [@maxvoltar](https://twitter.com/maxvoltar).
