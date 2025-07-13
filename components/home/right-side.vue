<template>
    <div class="home-right-side">
        <home-about />
        <home-card-resume />
        <home-skills-carousel />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.home-right-side{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 450px;
    gap: 35px;
}
</style>