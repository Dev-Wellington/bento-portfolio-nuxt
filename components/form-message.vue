<template>
    <div>
        <label for="message">Mensagem</label>
        <textarea
            id="message"
            name="message"
            :placeholder="messagePlaceholder"
            required
            minlength="10"
            maxlength="500"
            :title="messageTitle"
        ></textarea>
    </div>
</template>

<script setup lang="ts">
const messagePlaceholder = "Escreva sua mensagem aqui";
const messageTitle = "Por favor escreva uma mensagem válida";
</script>

<style scoped>
div{
    display:flex;
    flex-direction:column;
    
}
</style>