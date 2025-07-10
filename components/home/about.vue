<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('SOBRE MIM')
const description = ref('Sou um carioca de 21 anos que sempre foi apaixonado por artes e desenho, e acabou encontrando na tecnologia uma nova forma de se expressar. Hoje, estudo Engenharia de Software e venho aprimorando minhas soft e hard skills com foco em desenvolvimento e design.')
</script>

<style scoped>

</style>