<template>
    <div class="home-right-side">
        <home-card-resume />
        <home-about />
        

           <home-stats-card />
        
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.home-right-side{
    display: flex;
    flex-direction: column;
   
  width: clamp(350px, 100%, 450px);

    gap: 22px;
}
.tst{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 28px;
}
</style>