<template>
  <li class="image-holder" :style="dimensions">
    <router-link :to="{ name: 'detail', params: { filename: image.name } }">
      <img :src="'/media/' + image.name + '_thumb.jpg'" loading="lazy" />
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { Photo } from "@/models/Photo";

export default defineComponent({
  name: "GridImage",
  props: {
    image: {
      type: Object as PropType<Photo>,
      required: true,
    },
  },
  setup(props: { image: Photo }) {
    const dimensions = computed(() => ({
      "--image-aspect-ratio": `${props.image.sizes.thumb.width} / ${props.image.sizes.thumb.height}`,
      "--image-width": `${props.image.sizes.thumb.width}px`,
      "--image-height": `${props.image.sizes.thumb.height}px`,
    }));

    return {
      dimensions,
    };
  },
});
</script>

<style lang="scss" scoped>
li {
  height: 35vh;
  // width: var(--image-width);
  aspect-ratio: var(--image-aspect-ratio);
  flex-grow: 1;
  margin: 3px;
  background-color: rgba(170, 170, 170, 0.3);
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;
}

li:last-child {
  // There's no science in using "10" here. In all my testing, this delivered the best results.
  flex-grow: 10;
}

img {
  height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
  border-radius: 5px;
}

@media (hover: hover) {
  li:hover {
    transform: scale(0.98);
  }
}

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
</style>
