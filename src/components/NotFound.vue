<template>
  <div class="not-found">
    <router-link class="copy" :to="{ name: 'home' }">
      There Is Nothing Here
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "not-found",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.not-found {
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
}

.copy {
  font-family: monospace;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50vh;
}
</style>
