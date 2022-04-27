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

let beers: iBeers[] = beersData.beerList
</script>


<template>
  <div class="wrapper">
    <h3>Nos bières</h3>
    <div class="media_content">
      <div class="content" v-for="beer in beers" :key="beer.beerName">
        <div class="price">
          <span class="info">{{ beer.beerName }}</span>
          <span class="info">{{ beer.half }}€</span>
          <span class="info">{{ beer.pint }}€</span>
          <span>{{ beer.happy }}HH</span>
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
body{

}

h3 {
  color: white;
  font-size: var(--font-size-title);

}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-background-menu);
  width: 100%;
  margin-top: var(--gutter-m);
  box-shadow: 5px 5px 5px 2px rgba(0,0,0,0.3);
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
}

.media_content{
  margin-top: 20px;
}

.content {
  display: flex;
  flex-direction: column;
  color: white;
  margin-bottom: 16px;
}

.description {
  color: #548CA8;
}

.info {
  margin-right: 8px;
}

@media (min-width: 768px) {
  .media_content {
    display: flex;
    flex-wrap: wrap;
    }

  .content {
    flex: 1 0 40%;
    font-size: 22px;
    margin: 5px 5px 16px;
    display: flex;
    align-items: center;
  }
}
</style>


