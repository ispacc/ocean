<template>
  <div>
    <h1>Axios Page</h1>
    <input type="number" v-model="phone" />
    <button @click="getCode">获取验证码</button>
  </div>
</template>
<script lang="ts" setup>
import { AxiosInstance } from 'axios'
import { inject, ref } from 'vue'
import { Message } from '@arco-design/web-vue'
import { publicApi } from '../../../apis/index'

const phone = ref('12345678901')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const $http = inject<AxiosInstance>('$http')

const getCode = () => {
  publicApi
    .getCode2(phone.value)
    .then((v) => {
      console.log(v)
      Message.success(`获取成功 ${v.num}`)
    })
    .catch((err) => {
      Message.error(err.message)
    })
}
</script>
