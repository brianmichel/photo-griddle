<template>
  <div class="media-container">
    <img :src="this.details.url" />
    <div class="metadata">
      <p class="item">{{ this.details.shutter }}s</p>
      <p class="item">ƒ/{{ this.details.aperture }}</p>
      <p class="item">ISO {{ this.details.iso }}</p>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Detail",
  inject: ['store'],
  computed: {
    details() {
      return this.store.detailForPhoto(this.$route.params.name);
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
  max-height: 75vh;
  max-width: 75vh;
  object-fit: contain;
}

.metadata {
  display: flex;
  flex-direction: column;
  font-family: monospace;
  background-color: #fc0;
  border-radius: 1vh;
  -webkit-backdrop-filter: blur(5px); /* Safari 6.0 - 9.0 */
  backdrop-filter: blur(5px);

  .item {
    color: black;
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
