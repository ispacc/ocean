<template>
  <div>
    <NuxtLink to="/about">about</NuxtLink>
    |
    <NuxtLink to="/">根</NuxtLink>
    |
    <NuxtLink to="/parent-1">嵌套路由页面</NuxtLink>
    <slot/>
  </div>
</template>
