<template>
  <div class="linkedin-card-container">
    <div class="linkedin-card-content">
      <icon-linkedin class="linkedin-card-icon" />
      <h3>LinkedIn</h3>
      <div class="linkedin-card-text">
        <p>Interessado no meu perfil?
        No LinkedIn, você encontra mais sobre minha trajetória e projetos.</p>
      </div>
    </div>
    <a
      href="https://www.linkedin.com/in/wellington-ds-silva/"
      target="_blank"
      rel="noopener"
      class="linkedin-card-btn"
      >Conecte-se</a
    >
  </div>
</template>

<script setup lang="ts">
import IconLinkedin from '@/components/icons/icon-linkedin.vue';
</script>

<style scoped>
.linkedin-card-container {
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  width: min(400px, 100%);
  height: 300px;
  background-color: #f5f5f5;
  border-radius: 20px;
  color: #525252;
  gap: 20px;
}
.linkedin-card-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
h3 {
  font-size: 1.25rem;
}
p {
  font-size: 1.25rem;
  line-height: 1.25;
  font-weight: 400;
}
.linkedin-card-icon {
  width: 60px;
  height: 60px;
  
}
.linkedin-card-text {
}
.linkedin-card-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(120px, 100%);
  height: 40px;
  text-decoration: none;
  border-radius: 15px;
  background-color: #e5e5e5;
  color: #525252;
}
</style>
