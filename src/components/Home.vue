<template>
  <div class="home">
    <Grid :images="this.store.photos" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Grid from "@/components/Grid.vue";

export default defineComponent({
  inject: ["store"],
  name: "Home",
  components: {
    Grid,
  },
});
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
}
</style>
