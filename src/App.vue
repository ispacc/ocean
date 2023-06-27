<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="about">
    <RouterView />
  </div>
</template>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
