<template>
  <div class="home-container">
    <home-left-side />
    <home-right-side />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  
  gap: clamp(3rem, 10vw, 7rem);
  flex-direction: row;
 
  margin-top:8dvh;
  margin-bottom:8dvh;
}
@media screen and (max-width: 768px) {
  .home-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
