<template>
  <n-config-provider :theme="darkTheme">
    <n-global-style />
    <RouterView></RouterView>
  </n-config-provider>
</template>

<script setup>
import { darkTheme } from 'naive-ui';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e8f0f8;
  margin-top: 60px;
}
</style>
