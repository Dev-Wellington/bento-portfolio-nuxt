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
  font-weight: 600;
  width: 100%;
  height: 55px;
  background-color: #e5e5e5;
  /*color: #525252;*/
  border: none;
  border-radius: 15px;
  cursor:pointer;
}
button:hover {
  background-color: #d4d4d4;
}
</style>
