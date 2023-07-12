<template>
  <div class="flex h-screen flex-col flex-auto justify-center items-center font-serif">
    <div class="flex items-center font-serif justify-center text-2xl">
      <NuxtLink to="/">Home</NuxtLink>
      |
      <NuxtLink to="/demo">Demo</NuxtLink>
    </div>
    <slot/>
  </div>
</template>

<script lang="ts" setup>
</script>
