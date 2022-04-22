<template>
  <div class="wrapper">
    <img class="logo" :src="logoRockTavern" alt="my-logo"/>
  </div>
</template>

<script setup lang="ts">
// Please just use `@` to refer to the root "src" directory of the project
import logo from "@/assets/svg_rock.svg";

const logoRockTavern = logo
</script>

<style scoped>
.logo {
  width: 100%;
}

.wrapper {
  display: flex;
  justify-content: center;
}

@media (min-width: 1024px) {
  .logo {
    width: 80%;
  }
}
</style>