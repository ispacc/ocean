<template>
  <div class="flex h-screen flex-col flex-auto justify-center items-center font-serif">
    <div class="mb-2 text-4xl">Welcome Back</div>
    <div>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="username">Username</label>
        <input
            id="username"
            v-model="username"
            class="dark:bg-black shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your username" type="text">
      </div>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="password">Password</label>
        <input
            id="password"
            v-model="password"
            class="dark:bg-black shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password" type="password">
      </div>
      <div class="flex items-center justify-between">
        <button
            class="dark:shadow-md hover:shadow-indigo-500/50"
            @click="signIn"
        >
          Sign In
        </button>
        <a class="dark:shadow-md hover:shadow-indigo-500/50" href="#">Forgot
          Password?</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const username = ref('')
const password = ref('')
const router = useRouter()

const signIn = async () => {
  const data: any = await $fetch('/api/admin/login', {
    method: 'post',
    body: {
      username: username.value,
      password: password.value
    }
  })
  console.log(data.data)
  if (data.code !== 200) {
    return ElMessage.error('账号名或密码错误')
  }
  localStorage.setItem('tokenValue', data.data.tokenValue)
  await router.push('/chat/chatroom')
};
</script>
