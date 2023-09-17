<template>
  <q-page class="container q-pa-md small-screen-only">
    <div class="text-center q-pa-md">
      <ImageCapture
        :post="post"
        @capture-image="handleCaptureImage"/>
      <Camera
        :post="post" 
        @video-element="setVideoElement" />
    </div>
    <div class="text-center q-pa-md">
      <!-- <ImageUpload 
        :post="post" 
        /> -->
    </div>
    <div class="input-wrapper small-wrapper-input">
      <div class="row justify-center q-ma-md">
        <q-input
          v-model="post.textCaption"
          class="col custom-input"
          label="Caption"
        />
      </div>
      <div class="row justify-center q-ma-md">
        <Location :post="post" />
      </div>
    </div>
    <div class="row justify-center q-mt-lg">
      <q-btn class="glossy" color="info" label="Go" />
    </div>
  </q-page>
</template>

<script>
import Camera from "../components/Camera/Camera.vue";
import ImageCapture from "src/components/Camera/ImageCapture.vue";
import ImageUpload from "../components/Camera/ImageUpload.vue";
import Location from "../components/Location.vue";
import { uid } from "quasar";
require("md-gum-polyfill");

export default {
  name: "PageCamera",
  components: {
    Camera,
    ImageCapture,
    ImageUpload,
    Location,
  },
  data() {
    return {
      post: {
        id: uid(),
        textCaption: "",
        textLocation: "",
        date: Date.now(),
        photo: null,
      },
      locationLoading: false,
      videoElement: null,
      hasCameraSupport: true
    };
  },
  methods: {
    setVideoElement(videoElement) {
      this.post.videoObject = { videoElement };
    },
    handleCaptureImage() {
      console.log(
        "Capture image event received with videoObject:",
        this.post.videoObject,
        this.$refs.cameraRef.captureImage()
      );
    },
    handleImageCaptured() {
      console.log("Image captured:", imageData);
    },
  },
};
</script> 
