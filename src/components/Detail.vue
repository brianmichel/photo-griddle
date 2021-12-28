<template>
  <div class="media-container">
    <img :src="'/media/' + this.photo.name + '_preview.jpg'" />
    <Metadata :exif="this.photo.exif" />
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import Metadata from "@/components/Metadata";

export default defineComponent({
  name: "Detail",
  inject: ['store'],
  computed: {
    photo() {
      return this.store.photoForName(this.$route.params.filename);;
    },
  },
  components: {
    Metadata,
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
  width: 100%;
  max-height: 90vh;
  max-width: 130vh;
  object-fit: contain;
  padding-bottom: 1vh;
}
</style>
