<template>
  <div class="modal-route">
    <div class="modal-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.modal-route {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  /* width: 75%;
  max-width: 75%; */
  margin: auto;
}
</style>