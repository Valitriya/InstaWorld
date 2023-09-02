<template>
  <q-page class="container q-pa-md small-screen-only">
    <div class="camera-frame q-pa-md">
      <Camera @video-element="setVideoElement" />
    </div>
    <div class="text-center q-pa-md">
      <ImageUpload
        :videoElement="post.videoObject.videoElement"
        :imageUpload="imageUpload"
        :shouldResetFileInput="shouldResetFileInput"
        :hasCameraSupport="hasCameraSupport"
        @capture-image="handleCaptureImage"
      />
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
        <!-- <Location /> -->
      </div>
    </div>
    <div class="row justify-center q-mt-lg">
      <q-btn class="glossy" color="info" label="Go" />
    </div>
  </q-page>
</template>

<script>
import Camera from "../components/Camera/Camera.vue";
import ImageUpload from "../components/Camera/ImageUpload.vue";
// import Location from "../components/Location.vue";
import { uid } from "quasar";
require("md-gum-polyfill");

export default {
  name: "PageCamera",
  components: {
    Camera,
    ImageUpload,
    Location,
  },
  data() {
    return {
      post: {
        id: uid(),
        textCaption: "",
        textLocation: "",
        photo: null,
        date: Date.now(),
        videoObject: {},
      },
      locationLoading: false,
      videoElement: null,
      imageUpload: null,
      hasCameraSupport: true,
      shouldResetFileInput: false,
    };
  },
  methods: {
    setVideoElement(videoElement) {
      this.post.videoObject = { videoElement };
    },
    handleCaptureImage() {
      console.log("Capture image event received with videoObject:", this.post.videoObject);
    },
  },
};
</script>
<style lang="sass">
.custom-input
  .q-field__label
    color: $white
    font-size: 22px
    padding: 0 0 0 10px
    font-family: 'Grand Hotel'
  .q-field__control,
  .q-field__inner
    --q-color-primary: #efc7f7
    background-color: $pink-11
    border-radius: 5px
    &:before
      display: none
  .q-btn,
  .q-icon
    color: $white
  .q-field__native
    color: $white
    padding: 24px 10px 10px 10px
    font-weight: bold
  .q-field__bottom
    color: $info
</style>
