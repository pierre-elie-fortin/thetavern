<script setup lang="ts">
import Logo from "@/components/Logo/Logo.vue";
import Beers from "@/components/beers/Beers.vue";
import Events from "@/components/events/Events.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <Logo></Logo>
      <Events></Events>
      <Beers></Beers>
    </div>
  </header>
</template>