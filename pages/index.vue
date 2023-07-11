<template>
  <div class="flex h-screen flex-col flex-auto justify-center items-center font-serif">
    <div class="mb-2">Welcome to Orion</div>
    <div class="mb-4">Log in with your Orion account to continue</div>
    <div class="flex flex-row gap-3">
      <el-button type="primary"  >Log in</el-button>
      <el-button type="primary"  >Sign Up</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig()
const data = {}

async function login() {
  const data = await $fetch('/api/admin/login', {
    method: 'post',
    body: {username: 'admin', password: '123'}
  })
  console.log(data)
}
</script>
