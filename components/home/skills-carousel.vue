<template>
    <div class="carousel">
        <div class="carousel-track">
           
            <div class="icon-group">
                <icon-nuxt class="icon" />
                <icon-css class="icon" />
                <icon-html class="icon" />
                <icon-vue class="icon" />
                <icon-typescript class="icon" />
                <icon-git class="icon" />
                <icon-tailwind class="icon" />
            </div>
            
            
            <div class="icon-group">
                <icon-nuxt class="icon" />
                <icon-css class="icon" />
                <icon-html class="icon" />
                <icon-vue class="icon" />
                <icon-typescript class="icon" />
                <icon-git class="icon" />
                <icon-tailwind class="icon" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconCss from '@/components/icons/icon-css.vue';
import IconHtml from '@/components/icons/icon-html.vue';
import IconNuxt from '@/components/icons/icon-nuxt.vue';
import IconVue from '@/components/icons/icon-vue.vue';
import IconTypescript from '@/components/icons/icon-typescript.vue';
import IconGit from '@/components/icons/icon-git.vue';
import IconTailwind from '@/components/icons/icon-tailwind.vue';
</script>

<style scoped>
.carousel {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 115px;
    background-color:#f5f5f5;
    overflow: hidden;
    position: relative;
    border-radius:20px;
}

.carousel-track {
    display: flex;
    width: max-content;
    animation: scroll 20s linear infinite;
    gap: 0;
}

.icon-group {
    display: flex;
    flex-shrink: 0;
}

.icon {
    width: 50px;
    height: 50px;
    margin: 0 15px;
    fill: #ffffff;
    flex-shrink: 0;
}


.carousel:hover .carousel-track {
    animation-play-state: paused;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}
</style>