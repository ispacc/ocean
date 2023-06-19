<script lang="ts" setup>
import SockJS from 'sockjs-client'

function connect() {
  const sockJS = new SockJS('http://localhost:8081/orion')
  console.log('test')
}
</script>

<template>
  <div class="about">
    <a-button type="primary" @click="connect">Test Socket</a-button>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
}
</style>
