<template>
  <div
      class="antialiased font-sans text-gray-700 dark:text-gray-200 bg-white dark:bg-black [--scroll-mt:10rem] lg:[--scroll-mt:7rem]">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
