<template>
    <div>
        <label for="email">Email</label>
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
const emailPlaceholder = "Digite seu endereço de email";
const emailTitle = "Por favor digite um email válido";
// const email = ref<string>('');
</script>

<style scoped>
div{
    display:flex;
    flex-direction:column;
    
}
</style>