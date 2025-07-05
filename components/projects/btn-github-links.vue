<template>
  <div>
    <a :href="link" target="_blank" rel="noopener noreferrer">
      <img :src="image" alt="Github Project" />
    </a>
  </div>
</template>

<script setup lang="ts">
const link = "https://example.com";
const image = "https://example.com";
</script>

<style scoped></style>
