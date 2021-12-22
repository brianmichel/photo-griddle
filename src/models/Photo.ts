export interface Exif {
  camera?: string | null | undefined
  created?: string | null | undefined
  shutter?: number | null | undefined
  aperture?: number | null | undefined
  iso?: number | null | undefined
}

export interface Photo {
  exif: Exif
  name: string | null | undefined
  filename: string | null | undefined
}