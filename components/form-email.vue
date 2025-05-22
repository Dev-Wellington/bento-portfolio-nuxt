<template>
  <div class="form-container">
    <div class="field">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        :placeholder="emailPlaceholder"
        required
        minlength="5"
        maxlength="50"
        :title="emailTitle"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const emailPlaceholder = "Digite seu email";
const emailTitle = "Digite um email válido";
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
  
}

label {
  color: #525252;
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
}
</style>
