<template>
  <div>
    <label for="topic">Assunto</label>
    <input
      type="topic"
      id="topic"
      name="topic"
      :placeholder="topicPlaceholder"
      required
      minlength="10"
      maxlength="35"
      :title="topicTitle"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const topicPlaceholder = "Digite o assunto da sua mensagem";
const topicTitle = "Digite um assunto valido para sua mensagem";
</script>

<style scoped></style>
