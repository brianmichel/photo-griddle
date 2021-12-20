<template>
  <Home />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Home from "./components/Home.vue";

export default defineComponent({
  name: "App",
  components: {
    Home,
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
