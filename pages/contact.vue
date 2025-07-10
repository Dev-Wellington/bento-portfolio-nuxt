<template>
  <div class="contact">
    <div class="socials">
      <div class="email-github">
        <contact-btn-email />
        <btn-github-profile />
      </div>
      <contact-btn-large-linkedin />
    </div>
    <div class="form">
      <component></component>
    </div>
    <form-container class="form" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.contact {
  margin-top: 7dvh;
}
.socials {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(1rem, 7vw, 7.2rem);
}
.email-github {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.form {
  margin-top: 8dvh;
  margin-bottom: 8dvh;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
