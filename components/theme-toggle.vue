<template>
    <div>
        <button class="theme-toggle" >
            <icon-moon-to-sun v-if="colorMode.preference === 'light'" />
            <icon-sun-to-moon v-else />
        </button>
       
    </div>
</template>

<script setup lang="ts">

import IconSunToMoon from '@/components/icons/icon-sun-to-moon.vue';
import IconMoonToSun from '@/components/icons/icon-moon-to-sun.vue';
const colorMode = useColorMode();



</script>

<style scoped>
.theme-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.theme-toggle:hover {
  opacity: 0.8;
}
</style>