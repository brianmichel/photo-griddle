<template>
  <div class="media-container">
    <img :src="'/media/' + this.photo.name + '_preview.jpg'" />
    <div class="metadata">
      <section>
        <header>speed</header>
        <p class="item">{{ this.photo.exif.shutter }}</p>
      </section>
      <section>
        <header>aperture</header>
        <p class="item">ƒ/{{ this.photo.exif.aperture }}</p>
      </section>
      <section>
        <header>iso</header>
        <p class="item">{{ this.photo.exif.iso }}</p>
      </section>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Detail",
  inject: ['store'],
  computed: {
    photo() {
      return this.store.photoForName(this.$route.params.filename);;
    },
  },
  components: {},
});
</script>

<style scoped lang="scss">
.media-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: flex-start;
}

img {
  height: 100%;
  width: 100%;
  max-height: 95vh;
  max-width: 120vh;
  object-fit: contain;
}

.metadata {
  display: flex;
  flex-direction: column;
  font-family: monospace;
  background-color: #fc0;
  border-top-right-radius: 1vh;
  border-bottom-right-radius: 1vh;
  -webkit-backdrop-filter: blur(5px); /* Safari 6.0 - 9.0 */
  backdrop-filter: blur(5px);
  padding: 5px 10px 5px 10px;

  section {
    margin-bottom: 15px;
  }

  section:last-of-type {
    margin-bottom: 0px;
  }

  header {
    font-family: sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.8vh;
    margin: 0px;
    color: rgba(0, 0, 0, 0.2);
  }

  .item {
    color: black;
    margin: 0px;
    font-weight: bold;
    font-size: 1.9vh;
  }
}

@media (max-aspect-ratio: 1/1) {
  .metadata {
    width: 100%;
  }
}

// @media (prefers-color-scheme: dark) {
//   .metadata {
//     background-color: rgba(49, 49, 49, 0.308);
//   }
// }

// @media (prefers-color-scheme: light) {
//   .metadata {
//     background-color: rgba(255, 255, 255, 0.308);
//   }
// }
</style>
