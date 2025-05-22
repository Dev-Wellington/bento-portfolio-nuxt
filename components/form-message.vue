<template>
  <div class="form-container">
    <div class="field">
      <label for="message">Mensagem</label>
      <textarea
        id="message"
        name="message"
        :placeholder="messagePlaceholder"
        required
        minlength="20"
        maxlength="500"
        :title="messageTitle"
        rows="6"
      ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
const messagePlaceholder = "Digite sua mensagem";
const messageTitle = "Digite uma mensagem válida (mínimo 20 caracteres)";
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
  color: #525252;
  font-size: 18px;
  font-weight: 500;
}
textarea {
  font-family: sans-serif;
  border-radius: 15px;
  padding: 12px 20px;
  border: none;

  resize: vertical;
  min-height: 44px;
  max-height: 160px;
  font-size: 16px;

  background-color: #f0f0f0;
  color: #525252;
}
textarea:focus {
  outline: none;
}
</style>
