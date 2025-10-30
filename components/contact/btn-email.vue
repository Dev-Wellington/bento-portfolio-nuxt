<template>
    <div class="btn-email__background">
        <div 
            class="btn-email__mail" 
            @mouseenter="isHovered = true" 
            @mouseleave="isHovered = false"
        >
            <a 
                href="mailto:wellingtonsantosprogrammer@gmail.com" 
                class="btn-email__link"
            >
                <icons-icon-mail 
                    class="btn-email__icon" 
                    v-show="icon && isHovered" 
                />
            </a>
            <a 
                class="btn-email__link btn-email__text" 
                href="mailto:wellingtonsantosprogrammer@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                v-show="!isHovered"
            >
                wellingtonsantosprogrammer@gmail.com
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IconsIconMail from '@/components/icons/icon-mail.vue';

const isHovered = ref(false);
const icon = ref(true);
</script>

<style scoped>
.btn-email__background {
   
 
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 20px;
}

.btn-email__mail {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 90%;
    height: 80px;
    border-radius: 25px;
    padding: 5px;
    gap: 5px;
    background-color: #e5e5e5;
    color: #525252;
    cursor: pointer;
}

.btn-email__icon {
    width: 40px;
    height: 40px;
    color: inherit; 
}

.btn-email__text {
    text-decoration: none;
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    color: #525252;
}

.btn-email__text:hover {
    color: #262626;
}

.btn-email__link {
    text-decoration: none; 
    color: inherit; 
}
</style>
