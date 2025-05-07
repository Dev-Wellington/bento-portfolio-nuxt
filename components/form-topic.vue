<template>
  <div>
    <label for="topic"></label>
    <input
      type="topic"
      id="topic"
      name="topic"
      :placeholder="topicPlaceholder"
      required
      minlength="10"
      maxlength="35"
      :title="topicTitle"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const topicPlaceholder = "Enter your topic";
const topicTitle = "Please enter a valid topic";
</script>

<style scoped></style>
