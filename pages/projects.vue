<template>
  <div class="teste">
    <div class="sub-teste">
      <div class="card-teste">
        <!-- <card-video-project /> -->
      </div>
      <div class="card-test-links">
        <div class="sub-div">
          <card-info-project />
        </div>
        <div class="sub-div2">
          <btn-live-project />
          <btn-github-links />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.teste {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sub-teste {
  display: flex;
  justify-content: center;
  
  gap:40px;
}
.card-teste{
  background-color: red;
  width: min(550px, 100%);
  height: 300px;
  border-radius: 20px;
  border: 1px solid #ccc;
}
.card-test-links {
  width: min(550px, 100%);
}
.sub-div2 {
  display: flex;
  flex-direction: row;
 justify-content: space-around;
  align-items: center;
  gap: 10px;
}
</style>
