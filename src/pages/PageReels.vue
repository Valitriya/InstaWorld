<template>
    <q-page class="container q-pa-md">
      <VideoComponent :videoData="videoData" />
    </q-page>
  </template>
  
  <script>
  import VideoComponent from '../components/Reels.vue';
  import axios from 'axios';
  export default {
    name: 'PageReels',
    components: {
    VideoComponent,
  },
  data() {
    return {
      videoData: null,
    };
  },
  async created() {
    try {
      const response = await axios.get('URL_РЕДДИТ_API');
      this.videoData = response.data; // Обработка данных, полученных из Reddit API
    } catch (error) {
      console.error('Ошибка при запросе к Reddit API', error);
    }
  },
  }
  </script>