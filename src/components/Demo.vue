<template>
  <div class="container">
    <a-form :model="form" :style="{ width: '400px' }">
      <a-form-item field="name" label="Username: ">
        <a-input
            v-model="form.name"
            placeholder="please enter your username..."
        />
      </a-form-item>
      <a-form-item field="post" label="password: ">
        <a-input-password :style="{width:'400px'}" allow-clear placeholder="Please enter password"/>
      </a-form-item>
      <a-form-item class="bottom">
        <a-button @click="login">login</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from 'vue'

const form = reactive({
  name: '',
  post: '',
  isRead: false
});

const login = () => {

}

</script>

<style lang="stylus">
.container
  display: flex
  justify-content: center
  align-items: center
  height: 100vh


</style>

