export interface Metadata {
  shutter: number,
  aperture: number,
  iso: number
}

export interface Photo {
  url: string;
  filename: string;
  metadata?: Metadata
}