<template>
    <div>
        <icon-mail class="icon-mail" />
        <a href="mailto:wellingtonsantosprogrammer@gmail.com" class="btn-send-me">{{text}}</a>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IconMail from '../icons/icon-mail.vue';
const text = ref<string>('ME MANDE UM EMAIL');
</script>

<style scoped>
div{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#f5f5f5;
    border-radius:16px;
     padding: 16px;
}
.icon-mail{
    margin-right:8px;
    width:24px;
    height:24px;
    color:#525252;
}
a{
    text-decoration: none;
    color:#525252
}
</style>