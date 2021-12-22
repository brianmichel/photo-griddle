export interface Metadata {
  shutter: string,
  aperture: number,
  iso: number
}

export interface Photo {
  url: string;
  filename: string;
  metadata?: Metadata
}