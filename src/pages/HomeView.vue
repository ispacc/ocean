<template>
  <div class="about">
    <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
      <a-form-item field="name" label="Username:">
        <a-input
          v-model="form.name"
          placeholder="please enter your username..."
        />
      </a-form-item>
      <a-form-item field="post" label="password:">
        <a-input-password
          v-model="form.post"
          placeholder="please enter your post..."
        />
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { Message } from '@arco-design/web-vue'
import { publicApi } from '@/apis'
import router from '@/router'

const form = reactive({
  name: '',
  post: ''
})
const handleSubmit = async () => {
  const data = await publicApi.login(form.name, form.post)
  if (data.code === 200) {
    Message.info('登录成功')
    await router.push({ path: '/chat' })
  } else {
    Message.error(data.message)
  }
}
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
