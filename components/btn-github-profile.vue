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

<script setup lang="ts"></script>

<style scoped>
.btn-github-profile {
  width: min(100%, 400px);
  height: 125px;
  display: flex;
  place-items: center;
  background-color: #f5f5f5;
  border-radius: 20px;
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
