<template>
  <div class="media-container">
    <img :src="$route.params.photoKey" />
    <div class="metadata">
      <p>metadata goes here</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Detail",
  components: {},
});
</script>

<style scoped>
.media-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

img {
  height: 100%;
  width: 100%;
  max-height: 75vh;
  max-width: 75vh;
  object-fit: contain;
}

.metadata {
  width: 50%;
  max-width: 75vh;
  background-color: white;
  margin-top: 2vh;
}
</style>