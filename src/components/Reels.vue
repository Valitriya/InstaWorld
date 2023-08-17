<template>
    <div>
      <h2>Short Videos</h2>
      <div v-for="video in videos" :key="video.id">
        <iframe
          :src="'https://www.youtube.com/embed/' + video.id"
          width="560"
          height="315"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['videos']
  };
  </script>