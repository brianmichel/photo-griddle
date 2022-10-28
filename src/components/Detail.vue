<template>
  <div class="media-container" :style="dimensions">
    <img :src="'/media/' + photo.name + '_preview.jpg'" />
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Detail",
  inject: ['store'],
  computed: {
    photo() {
      return this.store.photoForName(this.$route.params.filename);
    },
    dimensions() {
      return {
        "--image-aspect-ratio":
          this.photo.sizes.preview.width +
          " / " +
          this.photo.sizes.preview.height,
        "--image-height": this.photo.sizes.preview.height + "px",
        "--image-width": this.photo.sizes.preview.width + "px",
      };
    }
  },
  components: {
  },
});
</script>

<style scoped lang="scss">
.media-container {
  aspect-ratio: var(--image-aspect-ratio);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

img {
  max-height: 90vh;
  max-width: 100%;
  object-fit: contain;
  margin: 10px;
}
</style>
