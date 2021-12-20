<template>
  <Grid :images="state.photos" />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Grid from "@/components/Grid.vue";
import state from "@/state";

export default defineComponent({
  name: "Home",
  components: {
    Grid,
  },
  setup() {
    onMounted(async () => {
      if (state.photos.length === 0) state.loadPhotos();
    });

    return {
      state,
    };
  },
});
</script>

<style scoped></style>
