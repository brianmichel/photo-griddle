<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import store from "@/store";

export default defineComponent({
  provide() {
    return {
      store: store,
    };
  },
  name: "App",
  components: {},
  setup() {
    onMounted(async () => {
      store.loadPhotos();
    });
  },
});
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
}

html,
body {
  padding: 0;
  margin: 0;
}

a,
p,
h1,
h2,
h2,
span {
  font-family: "BebasNeue", sans-serif;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
    color: white;
  }

  *:visited {
    color: white;
  }
}

@media (prefers-color-scheme: light) {
  body {
    background-color: white;
    color: black;
  }

  *:visited {
    color: black;
  }
}

@font-face {
  font-family: "BebasNeue";
  src: url("assets/fonts/BebasNeue-Regular.ttf") format("truetype");
}
</style>
