<template>
  <div>
    <a :href="link" target="_blank" rel="noopener noreferrer">
      <icon-click class="icon" />
    </a>
  </div>
</template>

<script setup lang="ts">
import iconClick from '../icons/icon-click.vue';
const link = "https://pomodorovue.netlify.app/";

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
