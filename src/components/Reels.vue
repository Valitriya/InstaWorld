<template>
    <div v-if="videoData">
      <video :src="videoData.url" controls></video>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      videoData: Object, // Проп передающий данные видео из Reddit API
    },
  };
  </script>