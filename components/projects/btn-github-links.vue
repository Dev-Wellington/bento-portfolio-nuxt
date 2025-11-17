<template>
  <div>
    <a :href="link" target="_blank" rel="noopener noreferrer">
      <icon-github class="icon" />
    </a>
  </div>
</template>

<script setup lang="ts">
import iconGithub from "../icons/icon-github.vue";
const link = "https://github.com/Dev-Wellington/pomodoroDeploy";
</script>

<style scoped>
div {
  background-color: #d4d4d4;
  width: 45%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
   border-radius:20px;
}
a{
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  width: 40px;
  height: 40px;
  color: #525252;
}
</style>
