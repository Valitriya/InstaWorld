<template>
  <q-page class="flex flex-center">
    <!-- <Camera/> -->
    <ImageUpload/>
  </q-page>
</template>

<script>
// import Camera from "../components/Camera/Camera.vue"
import ImageUpload from 'src/components/Camera/ImageUpload.vue';
export default {
  name: "PageMessage",
  components: {
    // Camera
    ImageUpload
  }
};
</script>
