<template>
  <div class="home">
    <header>
      <div>
        <span class="title">photos</span>
        <span class="by-line">
          by <a class="media-link" :href="twitter" target="blank">{{ name }}</a>
        </span>
      </div>
      <img src="assets/camera.svg" alt="Futuristic Camera" />
    </header>
    <section>
      <Grid :images="this.store.photos" />
    </section>
    <footer>
      <p class="rights">All Rights Reserved {{ year }}</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Grid from "@/components/Grid.vue";
import config from "@/assets/website-config.json";

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
    },
    year() {
      return new Date().getFullYear();
    },
  },
});
</script>

<style scoped lang="scss">
.rights {
  text-align: center;
}

.home {
  height: 100%;
  width: 100%;
}

header {
  padding-left: 1vh;
  padding-top: 1rem;
  padding-right: 1vh;
  display: flex;
  justify-content: space-between;

  .title {
    font-size: 5rem;
    line-height: 0.75;
  }

  img {
    color: white;
    width: 3rem;
  }
}

.media-link {
  text-decoration: none;
  position: relative;
  mix-blend-mode: difference;
}

.media-link::before {
  content: "";
  background-color: rgba(252, 255, 61, 0.849);
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 4px;
  z-index: -1;
  transition: all 0.3s ease-in-out;
}

.media-link:hover::before {
  background-color: red;
}
</style>
