<template>
  <div class="flex h-screen flex-col flex-auto justify-center items-center font-serif">
    <div class="mb-2 text-4xl">Welcome to Orion</div>
    <div class="mb-4">Log in with your Orion account to continue</div>
    <div class="flex flex-row gap-5">
      <NuxtLink class="dark:shadow-md hover:shadow-indigo-500/50" to="/login">Log in</NuxtLink>
      <NuxtLink class="dark:shadow-md hover:shadow-indigo-500/50" to="/signup">Sign Up</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>


</script>
