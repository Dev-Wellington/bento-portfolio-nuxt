<template>
    <div>
        <img :src="background" alt="background photo" />
    </div>
</template>

<script setup lang="ts">
const background: string = '/img/background-photo.png';
</script>

<style scoped>
div
{ 
    display:flex;
    align-items:start;
    width:100%;
    height:100%;
}
img {
    width: 100%;
    height: 100%;
    
    object-fit: cover;
}
</style>
