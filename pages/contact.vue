<template>
  <div class="contact">
    <div class="socials">
      <div class="email-github">
        <btn-email />
        <btn-github-profile />
      </div>
      <btn-large-linkedin />
    </div>
    <div class="form">
      <h2>Entre em contato pelo formulário abaixo</h2>
      <component></component>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.contact{
 margin-top:3vh;
}
.socials{
  display: flex;
  justify-content: center;
  
  gap: 2rem;
}
.email-github{
  display: flex;
  flex-direction:column;
  gap:50px;
}
</style>