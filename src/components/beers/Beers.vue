<script setup lang="ts">
import beersData from '@/data/beers.json';

interface iBeers {
  beerName: string | undefined
  beerType: string | undefined
  degree: number | undefined
  half: number | undefined
  pint: number | undefined
  happy: number | undefined
}

import logo from "@/assets/svg_rock.svg";

const logoRockTavern = logo

let beers: iBeers[] = beersData.beerList
</script>


<template>
  <div class="wrapper">
    <div class="title">
      <h3>Nos bières</h3>
    </div>
    <div class="wrapper_content">
      <div class="content" v-for="beer in beers" :key="beer.beerName">
        <div class="content_info">
          <div class="name">
            <span class="info">{{ beer.beerName }}</span>
          </div>
          <div class="price">
            <span class="info">{{ beer.half }}€</span>
            <span class="info">{{ beer.pint }}€</span>
            <span>{{ beer.happy }}HH</span>
          </div>
        </div>
        <div class="description">
          <span class="info">{{ beer.beerType }}</span>
          <span>{{ beer.degree }}°</span>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
h3 {
  color: white;
  font-size: var(--font-size-title);
  display: flex;
  justify-content: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  background-color: var(--color-background-menu);
  width: 100%;
  margin-top: var(--gutter-m);
  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.3);
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  border-radius: 20px;
}

.wrapper_content {
  margin-top: 20px;
}

.content_info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 var(--gutter);
}

.content {
  display: flex;
  flex-direction: column;
  color: white;
  margin-bottom: 16px;
}

.description {
  color: #548CA8;
  margin-left: var(--gutter);
}

.info {
  margin-right: 8px;
}

@media only screen and (min-width: 600px) {
  .content {
    font-size: 18px;
    margin: 0 60px 16px ;
  }

  @media only screen and (min-width: 950px) {
    .content {
      font-size: 18px;
      margin: 0 200px 16px;
    }
  }
}


</style>


