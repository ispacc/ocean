<template>
  <a-button @click="handleClick">Info Message</a-button>
  <a-button @click="switchTheme">switch theme</a-button>
</template>

<script lang="ts" setup>
import { Message } from '@arco-design/web-vue'

function handleClick() {
  Message.info('This is an info message')
}

const switchTheme = () => {
  document.body.setAttribute('arco-theme', 'dark')
}
</script>
