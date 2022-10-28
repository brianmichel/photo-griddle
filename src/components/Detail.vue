<template>
  <div class="media-container">
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
      return this.store.photoForName(this.$route.params.filename);;
    },
  },
  components: {
  },
});
</script>

<style scoped lang="scss">
.media-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

img {
  height: 100%;
  max-height: 90vh;
  max-width: 100%;
  object-fit: contain;
  margin: 10px;
}
</style>
