<template>
  <div class="flex h-screen flex-col flex-auto justify-center items-center font-serif">
    <div class="mb-4 text-4xl">Sign Up</div>
    <div>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="username">Username</label>
        <input
            id="username"
            v-model="username"
            class="dark:bg-black shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text">
      </div>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="password">Password</label>
        <input
            id="password"
            v-model="password"
            class="dark:bg-black shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password">
      </div>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="password">Verify Password</label>
        <input
            id="password2"
            v-model="password2"
            class="dark:bg-black shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password">
      </div>
      <div class="flex items-center justify-between">
        <button
            class="dark:shadow-md hover:shadow-indigo-500/50"
            @click="signIn"
        >
          Sign Up
        </button>
        <button class="dark:shadow-md hover:shadow-indigo-500/50" @click="reset">Reset</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import httpRequest from "~/utils/request";

const username = ref('')
const password = ref('')
const password2 = ref('')
const router = useRouter()

const signIn = async () => {
  if (password.value !== password2.value) {
    return ElMessage.error('两次密码不一致')
  }
  const data: any = await httpRequest.post('/admin/register', {
    username: username.value,
    password: password.value
  })
  if (data.code !== 200) {
    return ElMessage.error(data.message)
  }
  await router.push('/login')
}

const reset: any = () => {
  username.value = ''
  password.value = ''
  password2.value = ''
}
</script>
