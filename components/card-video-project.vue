<template>
    <div>
        <video
            v-for="video in videos"
            :key="video.id"
            :src="video.src"
            type="video/mp4"
            @mouseenter="playV"
            @mouseleave="resetV"
            muted
        >
            Your browser does not support the video tag.
        </video>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const videos = ref([
    { id: 1, src: 'link' },
    { id: 2, src: 'link' },
    { id: 3, src: 'link' },
]);


const playV = (event: Event) => {
    const video = event.target as HTMLVideoElement;
    video.play();
};


const resetV = (event: Event) => {
    const video = event.target as HTMLVideoElement;
    video.pause();
    video.currentTime = 0; 
};
</script>

<style scoped>

</style>