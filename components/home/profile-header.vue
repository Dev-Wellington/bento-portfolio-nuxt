<template>
    <div>
        <p>WELLINGTON SILVA</p>
        <p>FRONTEND DEVELOPER</p>
    </div>
</template>

<style scoped>
div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    background-color:#f5f5f5;
     padding: 16px;
    border-radius: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color:#525252;
}
@media (max-width: 400px) {
    div {
        flex-direction: column;
        gap: 10px;
        padding: 12px;
    }
}
</style>