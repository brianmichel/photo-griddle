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
  /* backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px); */
}

.modal-content {
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
}
</style>