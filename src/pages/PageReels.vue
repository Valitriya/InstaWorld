<template>
    <q-page class="container q-pa-md">
        <q-container>
            <video-list :videos="videos" />
        </q-container>
    </q-page>
  </template>
  
  <script>
  import VideoList from '../components/Reels.vue';
  export default {
    name: 'PageReels',
    components: {
    VideoList
  },
  data() {
    return {
      videos: []
    };
  },
  mounted() {
    this.fetchVideos();
  },
  methods: {
    async fetchVideos() {
      try {
        const response = await this.$axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              q: 'short videos', 
              key: 'AIzaSyDCsVdBDYaA0IVmAQCj6ZdagLBKP59vxRk',
              type: 'video',
              maxResults: 10
            }
          }
        );
        this.videos = response.data.items.map(item => ({
          id: item.id.videoId
        }));
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }
  }
  }
  </script>