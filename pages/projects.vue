<script setup></script>
<template>
  <div>
    <div>
      <!-- Background project mage -->
    </div>
    <div>
      <div>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <div>
          <v-for>{{ stack }}</v-for>
        </div>
      </div>
      <div>
        <button>
          <a href="{{ link }}" target="_blank">View project</a>
        </button>
        <button>
          <a href="{{ source }}" target="_blank">View source</a>
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped></style>
