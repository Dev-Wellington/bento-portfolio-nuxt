<template>
  <div class="btn-github-profile">
    <a href="https://github.com/Dev-Wellington/" class="btn-github-profile__link">
      <img
        src=""
        alt="GitHub Profile"
        class="btn-github-profile__logo"
      />
    </a>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.btn-github-profile {
    width: min(100%,400px);
    height: min(100%,125px);
    display:flex;
    place-items: center;
    padding:20px 0 20px 0;
    background-color: #171717;
}
.btn-github-profile__link{
    width: min(100%,80px);
    height: min(100%,80px);
    display:flex;
    place-items: center;
}
.btn-github-profile__logo{
    width: 100%;
    height: 100%;
    
}
</style>
