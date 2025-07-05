<template>
  <div class="form-container">
    <div class="field">
      <form @submit.prevent="submit" ref="form">
        <form-info />
        <form-topic />
        <form-email />
        <form-message />
        <input type="hidden" name="_captcha" value="false">
        <form-button />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref<HTMLFormElement | null>(null)

const submit = async () => {
  if (!form.value) return

  const formData = new FormData(form.value)
  await fetch('https://formsubmit.co/wellingtonsantosprogrammer@gmail.com', {
    method: 'POST',
    body: formData,
  })

  
  
  form.value.reset()
}
</script>

<style scoped>
.form-container {
  width: 100%;

  
}
.field {
  display: flex;
  flex-direction: column;
  width: min(915px, 100%);
}
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
