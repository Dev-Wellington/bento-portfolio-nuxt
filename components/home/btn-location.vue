<template>
    <div>
        <icon-map-point class="icon-map-point" />
         <p>Rio de Janeiro</p>
    </div>
</template>

<script setup lang="ts">
import iconMapPoint from '../icons/icon-map-point.vue';

</script>

<style scoped>
div {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color:#525252;
    background-color:#f5f5f5;
    border-radius:16px;
     padding: 16px;
}
.icon-map-point{
    width:24px;
    height:24px;
    color:#525252;
}
</style>