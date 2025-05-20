<template>
  <div class="back-container">
    <div class="back">
      <icon-linkedin class="linkedin-icon" />
      <h3>LinkedIn</h3>
      <div class="text">
        <p>Interessado no meu perfil?
        No LinkedIn, você encontra mais sobre minha trajetória e projetos.</p>

      </div>
    </div>
    <a
      href="https://www.linkedin.com/in/wellington-ds-silva/"
      target="_blank"
      rel="noopener"
      class="btnL"
      >Conecte-se</a
    >
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.back-container {
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: min(400px, 100%);
  height: 300px;
  background-color: #f5f5f5;
  border-radius: 20px;
  color: #525252;
 
}
.back{
  display: flex;
  flex-direction: column;
  gap: 12px;
}
h3 {
  font-size: 1.25rem;
}
p {
  font-size: 1.25rem;
}
.linkedin-icon {
  width: 60px;
  height: 60px;
}
.btnL {
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
