import { reactive } from "vue";
import { Photo } from "@/models/Photo";
import manifest from "@/assets/manifest.json"

export default reactive({
  photos: new Array<Photo>(),
  isLoaded: false,
  async loadPhotos() {
    if (!this.isLoaded) {

      console.log(manifest)

      for (const photo of manifest.photos) {
        console.log(photo)
        this.photos.push(photo)
      }

      // for (let index = 0; index < 25; index++) {
      //   const element = { filename: "test-photo", url: this.randomTestPhoto() };
      //   this.photos.push(element);
      // }
      this.isLoaded = true;
    }
  },
  detailForPhoto(fileName: string) {
    return {
      shutter: "1/250",
      aperture: 5.6,
      iso: 100,
      url: this.randomTestPhoto(),
    };
  },
  randomTestPhoto(): string {
    const urls = [
      "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05611_lbwtmk.jpg",
      "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg",
      "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg",
      "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05459_ziuomy.jpg",
      "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05586_oj8jfo.jpg",
      "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05465_dtkwef.jpg",
      "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05501_yirmq8.jpg",
      "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05624_f5b2ud.jpg",
      "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05623_dcpfva.jpg",
      "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814783/photostream-photos/DSC05476_dlkjza.jpg",
    ];

    return urls[Math.floor(Math.random() * urls.length)];
  },
});