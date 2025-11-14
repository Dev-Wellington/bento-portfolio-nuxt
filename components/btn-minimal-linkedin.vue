<template>
    <div class="btn-minimal-linkedin">
        <span>
            <icon-linkedin class="icon"/>
            <h3>LinkedIn</h3>
        </span>
    </div>
</template>

<script setup lang="ts">
import IconLinkedin from '@/components/icons/icon-linkedin.vue';
</script>

<style scoped>
.btn-minimal-linkedin {
    display: flex;
    border-radius: 15px;
    height: 64px;
        width:  clamp(165px, 20vw, 200px);

    color: #525252;
    
    background-color: #f5f5f5;
}
span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;
    
    cursor: pointer;
}
.icon {
    width: 60px;
    height: 60px;
}
</style>