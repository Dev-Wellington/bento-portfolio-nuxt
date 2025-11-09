<template>
  <div class="curriculo-card">
    
    <div class="tab-header">
      
      <span class="title">Currículo</span>
    </div>

   
    <div class="card-content">
     
      <div class="preview-area"></div>

      <div class="button-container">
        <button class="view-button" @click="verCurriculo">
          Ver Currículo
        </button>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const verCurriculo = () => {

  window.open('/curriculo_wellington.pdf', '_blank');
};
</script>

<style scoped>
.curriculo-card{
  height: 208px;
  width: 100%;
  color:#525252;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
}
.tab-header{
  height: 40px;
  width: 30%;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  padding-left: 16px;
  border-radius:40px 120px 0 0;
}
.card-content{
  height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  background-color:#f5f5f5;
  border-radius:0 20px 20px 20px;
  padding-bottom: 25px;
}
.preview-area{
 
  width: 100%;
  background-color: #e5e5e5;
}
.button-container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f5f5f5;
  font-family: 'Roboto', sans-serif;
  
}
.view-button{
  cursor:pointer;
  height:44px;
  margin-top: 8px;
  background-color: #e5e5e5;
  border: none;
 width: 90%;
 border-radius:15px;
 font-weight: 500;
  font-family: 'Roboto', sans-serif;
  color:#525252;
}
.view-button:hover{
  background-color: #d4d4d4;
  transition: background-color 0.2s;
  
}
</style>