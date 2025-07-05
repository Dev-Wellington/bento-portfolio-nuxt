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

<script setup lang="ts">
import cardInfoProject from '~/components/projects/card-info-project.vue';
import btnLiveProject from '~/components/projects/btn-live-project.vue';
import btnGithubLinks from '~/components/projects/btn-github-links.vue';
// import cardVideoProject from '~/components/projects/card-video-project.vue';
</script>

<style scoped>
.teste {
  
 margin-top:7dvh;
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
@media screen and (width <= x) {

}
</style>
