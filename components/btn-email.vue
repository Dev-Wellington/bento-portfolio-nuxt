<template>
    <div class="btn-email__background">
        <div class="btn-email__mail">
            <icon-mail/>
            <p class="btn-email__text">wellingtonsantosprogrammer@email.com</p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.btn-email__mail{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;
    background-color: #373737;
    border-radius: 15px;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}
</style>