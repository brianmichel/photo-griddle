import { reactive } from "vue";
import { Photo } from "@/models/Photo";
import manifest from "@/assets/manifest.json"

export default reactive({
  photos: new Array<Photo>(),
  photosByName: new Map<string, Photo>(),
  isLoaded: false,
  async loadPhotos() {
    if (!this.isLoaded) {

      for (const photo of manifest.photos) {
        this.photos.push(photo)
        this.photosByName.set(photo.name, photo)
      }

      this.isLoaded = true;
    }
  },
  photoForName(name: string) {
    return this.photosByName.get(name)
  },
});
