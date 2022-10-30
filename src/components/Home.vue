<template>
  <div class="home">
    <header>
      <h1>photos</h1>
      <h2>by <a class="media-link" :href="twitter" target="blank">{{ name }}</a></h2>
    </header>
    <section>
      <Grid :images="this.store.photos" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Grid from "@/components/Grid.vue";
import config from "@/assets/website-config.json"

export default defineComponent({
  inject: ["store"],
  name: "Home",
  components: {
    Grid,
  },
  computed: {
    name() {
      return config.author.name;
    },
    twitter() {
      return config.author.twitter;
    }
  }
});
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
}

h1 {
  font-size: 5rem;
  line-height: 0.01rem;
}

h2 {
  font-size: 1.0rem;
  line-height: 0.01rem;
}

header {
  padding-left: 8px;
}

.media-link {
  text-decoration: none;
  position: relative;
  mix-blend-mode: difference;
}

.media-link::before {
  content: '';
  background-color: rgba(252, 255, 61, 0.849);
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 4px;
  z-index: -1;
  transition: all .3s ease-in-out;
}

.media-link:hover::before {
  background-color: red;
}
</style>
