<template>
  <div class="form-container">
    <div class="field">
      <form @submit.prevent="handleSubmit">
        <form-info />
        <form-topic />
        <form-email />
        <form-message />
        <form-button />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleSubmit = () => {
  console.log("Form submitted!");
};
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
