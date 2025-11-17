<template>
  <div class="teste">
    <div class="sub-teste">
      <div class="card-teste">
        <projects-card-video-project />
      </div>
      <div class="card-test-links">
        <div class="sub-div">
          <projects-card-info-project
            titulo="Pomodoro"
            descricao="Aplicação de gerenciamento de tempo baseada na técnica Pomodoro. Permite aos usuários definir sessões de trabalho e intervalos, ajudando a aumentar a produtividade e manter o foco."
          />
          <div class="skills">
            <projects-skills text="Vue.js" />
            <projects-skills text="CSS3" />
          </div>
        </div>
        <div class="sub-div2">
          <projects-btn-live-project />
          <projects-btn-github-links />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import cardVideoProject from '~/components/projects/card-video-project.vue';
</script>

<style scoped>
.teste {
  margin-top: 7dvh;
  margin-bottom:8dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sub-teste {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
}
.card-teste {
  width: min(450px, 100%);
  height: 300px;
  border-radius: 20px;
  border: 1px solid #ccc;
}
.card-test-links {
  width: min(450px, 100%);
  
  display: flex;
  flex-direction: column;
  gap:20px;
}
.sub-div {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.sub-div2 {
  height:70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f5f5;
  border-radius:20px;
  gap: 10px;
}
.skills {
  
  display: flex;
  flex-direction: row;
  gap: 10px;
}
@media screen and (width <= x) {
}
</style>
