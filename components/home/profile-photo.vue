<template>
    <div>
        <img :src="profile" alt="">
    </div>
</template>

<script setup lang="ts">
const profile: string = new URL('@/assets/images/profile.jpg', import.meta.url).href;
</script>

<style scoped>

</style>