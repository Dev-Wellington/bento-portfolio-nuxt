<template>
  <div class="form-container">
    <div class="field">
      <label for="topic">Assunto</label>
      <input
        type="text"
        id="topic"
        name="topic"
        :placeholder="topicPlaceholder"
        required
        minlength="10"
        maxlength="35"
        :title="topicTitle"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const topicPlaceholder = "Digite o assunto da sua mensagem";
const topicTitle = "Digite um assunto valido para sua mensagem";
</script>

<style scoped>
.form-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.field {
  display: flex;
  flex-direction: column;
  width: min(915px, 100%);
  gap: 6px;
}

label {
  color:#525252;
  font-size: 18px;
  font-weight: 500;
}

input {
  
  height: 44px;
  border-radius: 15px;
  padding: 12px 20px;
  border: none;
  background-color: #f0f0f0;
  color: #525252;
  font-size: 16px;
}
input::placeholder {
}
input:focus {
  outline: none;

  /*border-color:;
   box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);*/
}
</style>
