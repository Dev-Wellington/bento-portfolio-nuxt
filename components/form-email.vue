<template>
    <div>
        <label for="email"></label>
        <input 
            type="email" 
            id="email" 
            name="email" 
            :placeholder="emailPlaceholder" 
            required 
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
            :title="emailTitle">
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const emailPlaceholder = "Enter your email address";
const emailTitle = "Please enter a valid email address";
// const email = ref<string>('');
</script>

<style scoped>

</style>