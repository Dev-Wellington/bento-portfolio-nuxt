<template>
  <div>
    <button @click="sendMessage">{{ send }}</button>
  </div>
</template>

<script setup lang="ts">
const send: string = "Enviar Mensagem";
const sendMessage = () => {
  console.log("Message sent!");
};
</script>

<style scoped>
div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
button{
  width: 100%;
  height: 55px;
  background-color: #e5e5e5;
  color: #1d0e04;
  border: none;
  border-radius: 15px;
}
</style>
