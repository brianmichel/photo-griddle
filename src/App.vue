<template>
  <Home />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Home from "./components/Home.vue";
import store from "@/store";

export default defineComponent({
  provide() {
    return {
      store: store,
    };
  },
  name: "App",
  components: {
    Home,
  },
  setup() {
    onMounted(async () => {
      store.loadPhotos();
    });
  },
});
</script>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #a857df;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
  }
}

@media (prefers-color-scheme: light) {
  body {
    background-color: white;
  }
}
</style>
