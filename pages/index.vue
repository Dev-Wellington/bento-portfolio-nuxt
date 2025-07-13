<template>
    <div class="home-container">    
        <home-left-side />
        <home-right-side />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.home-container {
    display:flex;
   flex-direction: column;
    align-items: center;
    justify-content: center;
   
   
    
   
    gap: 35px;
   
    
    
}
@media screen and (min-width: 768px) {
    .home-container {
      flex-direction: row;
    }
    
}
</style>