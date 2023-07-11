<template>
  <div class="flex h-screen flex-col flex-auto justify-center items-center font-serif">
    <div class="mb-2 text-4xl">Welcome Back</div>
    <div>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="username">Username</label>
        <input
            id="username"
            v-model="username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your username" type="text">
      </div>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="password">Password</label>
        <input
            id="password"
            v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password" type="password">
      </div>
      <div class="flex items-center justify-between">
        <button
            class="shadow-md hover:shadow-indigo-500/50"
            @click="signIn"
        >
          Sign In
        </button>
        <a class="shadow-md hover:shadow-indigo-500/50" href="#">Forgot
          Password?</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const username = ref('')
const password = ref('')

const signIn = async () => {
  // 在这里处理登录逻辑，可以使用 username.value 和 password.value 获取用户名和密码数据
  console.log('Username:', username.value);
  console.log('Password:', password.value);
  const data = await $fetch('/api/admin/login', {
    method: 'post',
    body: {
      username: username.value,
      password: password.value
    }
  })
};
</script>
