<template>
    <form @submit.prevent="handleSubmit">
        <form-topic />
        <form-email />
        <form-message />
        <form-button />
    </form>
</template>

<script setup lang="ts">
const handleSubmit = () => {
    console.log("Form submitted!");
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
</style>