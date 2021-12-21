<template>
  <Grid :images="this.store.photos" />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Grid from "@/components/Grid.vue";

export default defineComponent({
  inject: ["store"],
  name: "Home",
  components: {
    Grid,
  },
});
</script>

<style scoped></style>
