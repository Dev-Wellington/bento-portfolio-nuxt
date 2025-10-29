<template>
  <div class="contact">
    <div class="socials">
      <div class="email-github">
        <contact-btn-email />
        <btn-github-profile />
      </div>
      <contact-btn-large-linkedin />
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
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
gap: clamp(1rem, 10vw, 7rem);


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
@media (max-width: 768px) {
  .socials {
    flex-wrap: nowrap;
    gap: clamp(1rem, 5vw, 3rem);
  }
  .email-github {
    gap: 30px;
  }
}
@media (max-width: 500px) {
  .socials {
    flex-direction: column;
    
  } 
}
</style>
