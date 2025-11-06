<template>
    <div class="btn-minimal-github">
        <span>
            <icon-github class="icon"/>
            <h3>Github</h3>
        </span>
    </div>
</template>

<script setup lang="ts">
import IconGithub from '@/components/icons/icon-github.vue';
</script>

<style scoped>
.btn-minimal-github {
    display: flex;
    border-radius: 15px;
    height: 115px;
    width:  200px;
    
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
    width: 55px;
    height: 55px;
}
</style>