<template>
  <Home/>
</template>

<script setup>
import {reactive} from 'vue'
import Home from "./view/Home.vue";

const form = reactive({
  name: '',
  post: '',
  isRead: false,
})
const handleSubmit = (data) => {
  console.log(data);
}


</script>
