<template>
    <div class="stats-container">
        <div class="stats-grid">
            <div class="stat-card">
                <span class="stat-number">12+</span>
                <span class="stat-label">Projetos</span>
            </div>
            <div class="stat-card">
                <span class="stat-number">12+</span>
                <span class="stat-label">Tecnologias</span>
            </div>
        </div>
        <div class="stat-card stat-card-full">
            <span class="stat-number">500+</span>
            <span class="stat-label">Commits</span>
        </div>
    </div>
</template>

<script setup lang="ts">
// Você pode tornar os números dinâmicos no futuro
const stats = {
    projects: '12+',
    technologies: '12+',
    commits: '500+'
};
</script>

<style scoped>
.stats-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
}

.stat-card {
    background-color: #f5f5f5;
    border-radius: 16px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
}



.stat-card-full {
    width: 100%;
}

.stat-number {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2d3748;
    line-height: 1;
}

.stat-label {
    font-size: 1.25rem;
    font-weight: 500;
    color: #4a5568;
}


@media (max-width: 768px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    .stat-number {
        font-size: 2rem;
    }
    
    .stat-label {
        font-size: 1rem;
    }
}
</style>