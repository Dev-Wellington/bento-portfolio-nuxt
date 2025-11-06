<template>
  <div class="curriculo-card">
    
    <div class="tab-header">
      
      <span class="title">Currículo</span>
    </div>

   
    <div class="card-content">
     
      <div class="preview-area"></div>

      
      <button class="view-button" @click="verCurriculo">
        Ver Currículo
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const verCurriculo = () => {
  console.log('Visualizar currículo');
  // Adicione aqui a ação desejada
  // window.open('/curriculo.pdf', '_blank');
};
</script>

<style scoped>

</style>