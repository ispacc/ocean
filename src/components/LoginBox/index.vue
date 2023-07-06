<script lang="ts" setup>
import { computed, reactive } from 'vue'
import { useWsLoginStore } from '@/stores/ws'
import apis from '@/services/apis'

const loginStore = useWsLoginStore()
const visible = computed({
  get() {
    return loginStore.showLogin
  },
  set(value) {
    loginStore.showLogin = value
  },
})

const form = reactive({
  username: '',
  password: '',
})

const loginUser = async () => {
  const data = await apis.loginUser(form).send()
  localStorage.setItem('tokenName', data.tokenName)
  localStorage.setItem('tokenValue', data.tokenValue)
}
</script>

<template>
  <ElDialog v-model="visible" :width="376" center class="login-box-modal">
    <div class="login-box">
      <el-form :model="form">
        <el-form-item label="username">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="password">
          <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loginUser">Login</el-button>
          <el-button>Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </ElDialog>
</template>

<style lang="scss" scoped src="./styles.scss" />
