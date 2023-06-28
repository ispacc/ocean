<script lang="ts" setup>
import { computed, reactive, watchEffect } from 'vue'
import { useWsLoginStore, LoginStatus } from '@/stores/ws'
import QrCode from 'qrcode.vue'
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
  localStorage.setItem('TOKEN', data.token)
}

const loginQrCode = computed(() => loginStore.loginQrCode)
const loginStatus = computed(() => loginStore.loginStatus)

watchEffect(() => {
  // 打开窗口了 而且 二维码没获取，而且非登录就去获取二维码
  if (visible.value && !loginQrCode.value) {
    // 获取登录二维码
    loginStore.getLoginQrCode()
  }
})
</script>

<template>
  <ElDialog v-model="visible" :width="376" center class="login-box-modal">
    <div class="login-box">
      <img alt="MallChat" class="login-logo" src="@/assets/logo.jpeg" />
      <p class="login-slogan">边聊边买，岂不快哉~</p>

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

  <!--  <ElDialog class="login-box-modal" :width="376" v-model="visible" center>-->
  <!--    <div class="login-box">-->
  <!--      <img class="login-logo" src="@/assets/logo.jpeg" alt="MallChat" />-->
  <!--      <p class="login-slogan">边聊边买，岂不快哉~</p>-->
  <!--      <div class="login-qrcode-wrapper" v-loading="!loginQrCode">-->
  <!--        <QrCode-->
  <!--          class="login-qrcode"-->
  <!--          v-if="loginQrCode"-->
  <!--          :value="loginQrCode"-->
  <!--          :size="328"-->
  <!--          :margin="5"-->
  <!--        />-->
  <!--      </div>-->

  <!--      <p class="login-desc" v-if="loginStatus === LoginStatus.Waiting">-->
  <!--        <ElIcon :size="32" class="login-desc-icon" color="var(&#45;&#45;color-wechat)"-->
  <!--        ><IEpSuccessFilled-->
  <!--        /></ElIcon>-->
  <!--        扫码成功~，点击“登录”继续登录-->
  <!--      </p>-->
  <!--      <p class="login-desc" v-if="loginStatus === LoginStatus.Init">-->
  <!--        使用「<strong class="login-desc-bold">微信</strong>」扫描二维码登录~~-->
  <!--      </p>-->
  <!--    </div>-->
  <!--  </ElDialog> -->
</template>

<style lang="scss" scoped src="./styles.scss" />
