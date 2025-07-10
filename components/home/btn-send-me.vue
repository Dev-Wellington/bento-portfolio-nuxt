<template>
    <div>
        <a href="mailto:seuemail@exemplo.com" class="btn-send-me">{{text}}</a>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref<string>('ME MANDE UM EMAIL');
</script>

<style scoped>

</style>