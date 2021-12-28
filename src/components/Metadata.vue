<template>
  <div class="metadata">
    <section>
      <header>camera</header>
      <p class="item">{{ this.exif.camera }}</p>
    </section>
    <section>
      <header>speed</header>
      <p class="item">{{ this.exif.shutter }}</p>
    </section>
    <section>
      <header>aperture</header>
      <p class="item">ƒ/{{ this.exif.aperture }}</p>
    </section>
    <section>
      <header>iso</header>
      <p class="item">{{ this.exif.iso }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Exif } from "@/models/Photo";

export default defineComponent({
  name: "Metadata",
  props: {
    exif: Object as PropType<Exif>,
  },
});
</script>

<style lang="scss" scoped>
.metadata {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: monospace;
  background-color: rgba(255, 204, 0, 0.804);
  border-radius: 1vh;
  -webkit-backdrop-filter: blur(5px); /* Safari 6.0 - 9.0 */
  backdrop-filter: blur(5px);
  padding: 10px;

  header {
    font-family: sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.8vh;
    margin: 0px;
    color: rgba(0, 0, 0, 0.2);
  }

  .item {
    margin: 0px;
    font-weight: bold;
    font-size: 1.9vh;
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