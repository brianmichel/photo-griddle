<template>
  <Grid placeholder="Hello World" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Grid from "@/components/Grid.vue";

export default defineComponent({
  name: "Home",
  components: {
    Grid,
  },
});
</script>

<style scoped></style>
