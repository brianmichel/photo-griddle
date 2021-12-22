export interface Exif {
  camera?: string | null
  created?: string | null
  shutter?: number | null
  aperture?: number | null
  iso?: number | null
}

export interface Photo {
  exif: Exif
  name: string
  filename: string
}