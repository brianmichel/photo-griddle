<template>
  <div>
    <ul>
      <li v-for="image in images" :key="image.url">
        <img :src="image.url" loading="lazy" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Grid",
  props: {
    images: [],
  },
});
</script>

<style scoped lang="scss">
/// BASIC
/// From @maxvoltar https://codepen.io/maxvoltar/pen/eYOPdMG?editors=1010

ul {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
}

li {
  height: 40vh;
  flex-grow: 1;
  padding: 1px;
}

li:last-child {
  // There's no science in using "10" here. In all my testing, this delivered the best results.
  flex-grow: 10;
}

img {
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}

// ADVANCED

// Portrait

@media (max-aspect-ratio: 1/1) {
  li {
    height: 30vh;
  }
}

// Short screens

@media (max-height: 480px) {
  li {
    height: 80vh;
  }
}

// Smaller screens in portrait

@media (max-aspect-ratio: 1/1) and (max-width: 480px) {
  ul {
    flex-direction: row;
  }

  li {
    height: auto;
    width: 100%;
  }
  img {
    width: 100%;
    max-height: 75vh;
    min-width: 0;
  }
}
</style>
