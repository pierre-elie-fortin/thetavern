<script setup lang="ts">
import Beers from "@/components/beers/Beers.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <Beers></Beers>
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


@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }


}
</style>
