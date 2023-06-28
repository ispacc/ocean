<script lang="ts" setup>
import ToolBar from './components/ToolBar/index.vue'
import SideBar from './components/SideBar/index.vue'
import ChatBox from './components/ChatBox/index.vue'
</script>

<template>
  <main class="home">
    <div class="wrapper">
      <ToolBar />
      <SideBar />
      <ChatBox />
    </div>

    <LoginBox />
  </main>
</template>

<style lang="scss" scoped src="./styles.scss" />
