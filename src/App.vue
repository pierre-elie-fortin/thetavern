<script setup lang="ts">
import HomePage from "@/views/HomePage.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HomePage></HomePage>
    </div>
  </header>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

body {
  background-color: var(--vt-c-black-soft);
}
</style>
