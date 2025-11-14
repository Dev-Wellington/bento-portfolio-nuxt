<template>
  <div>
    <img :src="image" alt="Image Project" />
  </div>
</template>

<script setup lang="ts">
const image: string = "/img/Pomodoro.png";
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(500px, 100%);
  height: min(360px, 100%);
}
img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
}

</style>
