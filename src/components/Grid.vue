<template>
  <div>
    <ul>
      <template v-for="image in images" :key="image.filename">
        <GridImage :image="image" />
      </template>
    </ul>

    <router-view>
      <ModalView v-if="showModal" @click="dismiss">
        <DetailView />
      </ModalView>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import DetailView from "@/components/DetailView.vue";
import ModalView from "@/components/ModalView.vue";
import GridImage from "@/components/GridImage.vue";
import { Photo } from "@/models/Photo";

export default defineComponent({
  name: "GridView",
  props: {
    images: Array as PropType<Array<Photo>>,
  },
  components: {
    DetailView,
    ModalView,
    GridImage,
  },
  methods: {
    dismiss() {
      this.$router.push({ name: "home" });
      this.showModal = false;
    },
    listener(event: KeyboardEvent) {
      if (this.showModal && event.code.toLocaleLowerCase() === "escape") {
        this.dismiss();
      }
    },
  },
  watch: {
    $route(newVal) {
      this.showModal = newVal.meta && newVal.meta.showModal;
    },
  },
  data() {
    return {
      showModal: this.$route.meta.showModal,
    };
  },
  mounted() {
    document.addEventListener("keydown", this.listener);
  },
  unmounted() {
    document.removeEventListener("keydown", this.listener);
  },
});
</script>

<style scoped lang="scss">
/// BASIC
/// From @maxvoltar https://codepen.io/maxvoltar/pen/eYOPdMG?editors=1010

ul {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  margin: 3px;
}

// ADVANCED

// Smaller screens in portrait

@media (max-aspect-ratio: 1/1) and (max-width: 425px) {
  ul {
    flex-direction: row;
  }

  li {
    height: auto;
    width: 100%;
  }

  img {
    width: 100%;
    max-height: 55vh;
    min-width: 0;
  }
}
</style>
