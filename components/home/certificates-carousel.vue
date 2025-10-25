<template>
    <div>
        <img :src="carousel" alt="carousel photo" />
    </div>
</template>

<script setup lang="ts">
const carousel: string = '/img/EXcertificate.png';
</script>

<style scoped>
div{
    width: 100%;
    height: 164px;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
