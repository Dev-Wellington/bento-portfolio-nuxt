<template>
    <div class="btn-minimal-linkedin">
        <span>
            <icon-linkedin/>
            <h3>LinkedIn</h3>
        </span>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.btn-minimal-linkedin {
    display: flex;
    border-radius: 15px;
    height: 82px;
    width:  min(143px,100%);
    
    background-color: #171717;
}
span{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;
    
    cursor: pointer;
    
}
</style>