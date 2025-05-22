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
     
      <component></component>
    </div>
  <form-container class="form"/>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.contact{
 margin-top:7dvh;
}
.socials{
  display: flex;
  justify-content: center;
  
  gap: 7.20rem;
}
.email-github{
  display: flex;
  flex-direction:column;
  gap:50px;
}
.form{
  margin-top: 8dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  
}
</style>