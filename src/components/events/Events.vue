<script setup lang="ts">
import eventsData from '@/data/events.json';
import {ref} from 'vue'

interface iEvents {
  active: boolean | undefined
  eventName: string
  image: string
}

let events: iEvents[] = eventsData.eventList
let zoom = ref(false)
let altImage = ref('')
let pathImage = ref('')

// functions
const onZoomImage = (value: iEvents) => {
  backToTitle()
  zoom.value = true
  pathImage.value = value.image
  altImage.value = value.eventName
}

const backToTitle = () => {
  let elmntToView = document.getElementById("events");
  elmntToView?.scrollIntoView();
}

const onStopZoom = () => {
  zoom.value = false
}
</script>

<template>
  <div class="wrapper">
    <h3 id="events">Nos événements</h3>
    <div class="media_content">
      <div class="content" v-for="event in events" :key="event.eventName">
        <div v-if="event.active && !zoom">
          <img class="image" @click="onZoomImage(event)" :src="event.image" :alt="event.eventName"/>
        </div>
      </div>
      <div v-if="zoom">
        <img class="imageZoom" @click="onStopZoom" :src="pathImage" :alt="altImage"/>
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
  align-items: center;
  margin-top: var(--gutter-m);
}

.content {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.image {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  height: 250px;
  width: 250px;
  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.3);
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
}

.imageZoom {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  height: 350px;
  width: 350px;
  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.3);
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
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

  .imageZoom {
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    height: 450px;
    width: 450px;
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.3);
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
}
</style>

