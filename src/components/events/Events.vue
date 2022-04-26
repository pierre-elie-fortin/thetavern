<script setup lang="ts">
import eventsData from '@/data/events.json';

interface iEvents {
  active: boolean | undefined
  eventName: string | undefined
  image: string | undefined
}

let events: iEvents[] = eventsData.eventList


</script>

<template>
  <div class="wrapper">
    <h3>Nos événements</h3>
    <div class="media_content">
      <div class="content" v-for="event in events" :key="event.eventName">
        <div v-if="event.active">
          <img class="image" :src="event.image" :alt="event.eventName"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  color: white;
  font-size: var(--font-size-title);
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center
}

.content {
  display: flex;
  justify-content: center;
  padding: 10px
}

.image {

  height: 250px;
  width: 250px;
  box-shadow: 5px 5px 5px 2px rgba(0,0,0,0.3);
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
}

@media (min-width: 768px) {
  .media_content {
    display: flex;
    flex-wrap: wrap;
  }

  .content {
    flex: 1 0;
    display: flex;
    align-items: center;

  }

  .image {
    height: 350px;
    width: 350px;
  }
}
</style>

