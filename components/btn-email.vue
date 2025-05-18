<template>
    <div class="btn-email__background">
        <div class="btn-email__mail">
            <icon-mail class="btn-email__icon"/>
            <p class="btn-email__text">wellingtonsantosprogrammer@gmail.com</p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.btn-email__background{
    width: 400px;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
   
    background-color: #f5f5f5;
    border-radius: 20px;
}
.btn-email__mail{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:25px;
    background-color: #e5e5e5;
    color: #525252;

}
.btn-email__mail:hover{
    color: #d5d5d5;
}
.btn-email__icon{
    width: 40px;
    height: 40px;
}
.btn-email__text{
    font-size: 1rem;
    color: #525252;
}
</style>