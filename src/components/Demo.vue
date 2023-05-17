<template>
  <button @click="count2++">Click me {{ count2 }} times</button>
</template>

<script lang="ts" setup>

import {ref} from "vue";

let count2 = ref(10)
</script>
