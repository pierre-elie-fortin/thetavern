<script lang="ts">
import beersData from './../../data/beers.json';

interface Props {
  beerName: string | undefined
  beerType: string | undefined
}

export default {
  data() {
    return {
      beers: beersData.beerList,
    };
  },
};
</script>


<template>
  <ul>
    <li v-for="beer in beers" :key="beer.id">
      {{ beer.beerName }}
    </li>
  </ul>
  <p v-if="loading">
    Still loading..
  </p>
  <p v-if="error">
  </p>
</template>


