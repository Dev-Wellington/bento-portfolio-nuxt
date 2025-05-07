<template>
    <div>
        <label for="message"></label>
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
const messagePlaceholder = "Enter your message here";
const messageTitle = "Please enter a valid message";
</script>

<style scoped>

</style>