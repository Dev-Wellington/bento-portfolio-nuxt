<template>
    <div>
        <img :src="profile" alt="Profile photo" />
    </div>
</template>

<script setup lang="ts">
const profile: string = '/img/perfil.png';
</script>

<style scoped>
div
{ 
    display:flex;
    align-items:start;
    width:150px;
    height:171px;
}
img {
    width: 100%;
    height: 100%;
    
    object-fit: cover;
}
</style>
