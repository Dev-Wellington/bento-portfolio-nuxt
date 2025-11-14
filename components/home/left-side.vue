<template>
  <div class="home-left-side">
    <div class="profile-photos">
      <home-profile-photo />
      <home-background-photo />
    </div>

    <home-profile-header />

    <div class="profile-actions">
      <home-btn-send-me />
      <home-btn-location />
    </div>
     <home-skills-carousel />
    

    <div class="profile-social-links">
      <btn-minimal-linkedin />
      <btn-minimal-github />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.home-left-side {
  
  width: clamp(350px, 100%, 450px);
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.profile-photos {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 25px;
}
.profile-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}
.profile-social-links {
  display: flex;
  flex-direction: row;
  align-items: center;
 justify-content: space-between;
 
}

</style>
