<template>
    <div class="home-right-side">
        <home-about />
        <div class="tst">

            <home-card-resume />
            <home-skills-carousel />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.home-right-side{
    display: flex;
    flex-direction: column;
    max-width: 450px;
    gap: 55px;
}
.tst{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 28px;
}
</style>