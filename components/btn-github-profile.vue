<template>
  <div class="btn-github-profile">
    <a
      href="https://github.com/Dev-Wellington/"
      class="btn-github-profile__link"
    >
      <icon-github class="btn-github-profile__logo" />
    </a>
    <!-- fazer com que quando pequeno aparecer o texto e mudar o sentido -->
  </div>
</template>

<script setup lang="ts">
import iconGithub from './icons/icon-github.vue';
</script>

<style scoped>
.btn-github-profile {
  display: flex;
  place-items: center;
 border-radius: 15px;
    height: 125px;
    width:  400px;
  background-color: #F5F5F5;
  cursor: pointer;
}
.btn-github-profile__link {
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #525252;
}
.btn-github-profile__link:hover {
  color: #262626;
}
.btn-github-profile__logo {
  width: 80px;
  height: 80px;
}
</style>
