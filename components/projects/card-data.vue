<template>
<div class="card">
    <div class="card__header">
        <h2 class="card__title">{{ titulo }}</h2>
        <div class="card__icon">
            <slot name="icon"></slot>
        </div>
    </div>
    <p class="card__description">{{ descricao }}</p>
</div>
</template>

<script setup lang="ts">
defineProps<{
  titulo: string
  descricao?: string
}>();
</script>

<style scoped>
.card__header {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>