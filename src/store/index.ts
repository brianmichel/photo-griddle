import { reactive } from "vue";
import { Photo } from "@/models/Photo";
import manifest from "@/assets/manifest.json"

export default reactive({
  photos: new Array<Photo>(),
  photosByName: new Map<string, Photo>(),
  isLoaded: false,
  async loadPhotos() {
    if (!this.isLoaded) {

      const comparator = function (first: Photo, second: Photo) {
        const a = first.exif.created ?? ""
        const b = second.exif.created ?? ""

        return a < b ? 1 : (a === b ? 0 : -1);
      }

      this.photos = manifest.photos.sort(comparator)

      this.photos.forEach((photo) => {
        this.photosByName.set(photo.name, photo)
      })

      this.isLoaded = true;
    }
  },
  photoForName(name: string) {
    return this.photosByName.get(name)
  },
});
