<template>
    <div>
        <p>{{ text }}</p>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';


defineProps({
    text: {
        type: String,
        required: true
    }
});
</script>

<style scoped>
div {
    background-color: #d4d4d4;
    color:#525252;
    padding: 2px 5px;
    border-radius: 5px;
}
</style>