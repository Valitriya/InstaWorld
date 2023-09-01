<template>
  <q-page class="container q-pa-md small-screen-only">
    <div class="camera-frame q-pa-md">
      <Camera @video-element="setVideoElement" />
    </div>
    <div class="text-center q-pa-md">
      <ImageUpload
        :videoElement="videoElement"
        :imageUpload="imageUpload"
        :shouldResetFileInput="shouldResetFileInput"
        :hasCameraSupport="hasCameraSupport"
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
        <q-input
          v-model="post.textLocation"
          :loading="locationLoading"
          class="col custom-input"
          label="Location"
        >
          <template v-slot:append>
            <q-btn
              v-if="!locationLoading && locationSupported"
              @click="getLocation"
              icon="eva-navigation-2-outline"
              dense
              flat
              round
            />
          </template>
        </q-input>
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
import { uid } from "quasar";
require("md-gum-polyfill");

export default {
  name: "PageCamera",
  components: {
    Camera,
    ImageUpload,
  },
  data() {
    return {
      post: {
        id: uid(),
        textCaption: "",
        textLocation: "",
        photo: null,
        date: Date.now(),
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
      this.videoElement = videoElement;
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
