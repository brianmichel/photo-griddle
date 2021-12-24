
export interface Exif {
  /**
   * The camera model that created the photo.
   *
   * @type {(string | null)}
   * @memberof Exif
   */
  camera?: string | null

  /**
   * The date on which the photo was create by the camera.
   *
   * @type {(string | null)}
   * @memberof Exif
   */
  created?: string | null

  /**
   * The shutter speed of the captured photo.
   * This will be in the format of '1/200'
   *
   * @type {string}
   * @memberof Exif
   */
  shutter: string

  /**
   * The aperture of the lens when the image was captured.
   *
   * @type {string}
   * @memberof Exif
   */
  aperture: string

  /**
   * The digital sensor sensitivity of the camera when the image was captured.
   *
   * @type {string}
   * @memberof Exif
   */
  iso: string
}

export interface Photo {

  /**
   * The metadata of the image.
   *
   * @type {Exif}
   * @memberof Photo
   */
  exif: Exif

  /**
   * The name of the image without a file extension.
   *
   * @type {string}
   * @memberof Photo
   */
  name: string

  /**
   * The name of the file followed by the extension.
   *
   * @type {string}
   * @memberof Photo
   */
  filename: string
}