<template>
  <div>
    <button @click="sendMessage">{{ send }}</button>
  </div>
</template>

<script setup lang="ts">
const send: string = "Send";
const sendMessage = () => {
  console.log("Message sent!");
};
</script>

<style scoped></style>
