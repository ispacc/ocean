<template>
  <div class="container">
    <a-form :model="form" :style="{ width: '400px' }">
      <a-form-item field="name" label="Username: ">
        <a-input
            v-model="form.name"
            placeholder="please enter your username..."
        />
      </a-form-item>
      <a-form-item field="password" label="password: ">
        <a-input-password v-model="form.password" :style="{width:'400px'}" allow-clear
                          placeholder="Please enter password"/>
      </a-form-item>
      <a-form-item class="bottom">
        <a-button @click="commit">login</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from 'vue'
import {login} from "../api";

const form = reactive({
  name: '',
  post: '',
  password: '',
  isRead: false
});

async function commit() {
  const data = await login({
    name: form.name,
    password: form.password
  })
}
</script>

<style lang="stylus">
.container
  display: flex
  justify-content: center
  align-items: center
  height: 100vh


</style>

