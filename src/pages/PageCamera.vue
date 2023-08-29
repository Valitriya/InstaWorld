<template>
  <q-page class="container q-pa-md small-screen-only">
    <div class="camera-frame q-pa-md">
    <Camera/>
    </div>
    <div class="text-center q-pa-md">
      <q-btn
        v-if="hasCameraSupport"
        @click="captureImage"
        round
        color="pink-6"
        icon="eva-camera"
        size="lg"
      />
      <q-file
        :key="shouldResetFileInput"
        v-else
        filled
        bottom-slots
        @input="captureImageFallback"
        v-model="imageUpload"
        label="Choose an image"
        counter
        accept="image/*"
        class="custom-input small-wrapper-input"
      >
        <template v-slot:prepend>
          <q-icon name="cloud_upload" @click="clearImageUpload" />
        </template>
        <template v-slot:append>
          <q-icon
            name="close"
            @click.stop.prevent="clearImageUpload"
            class="cursor-pointer"
          />
        </template>
        <template v-slot:hint> File size </template>
      </q-file>
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
              round />
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
import Camera from "../components/Camera.vue"
import { uid } from "quasar";
require("md-gum-polyfill");

export default {
  name: "PageCamera",
  components: {
    Camera
  },
  data() {
    return {
      shouldResetFileInput: false,
      post: {
        id: uid(),
        textCaption: "",
        textLocation: "",
        photo: null,
        date: Date.now(),
      },
      hasCameraSupport: true,
      imageUpload: [],
      locationLoading: false
    };
  },
  methods: {
    getLocation() {
      this.locationLoading = true;
      navigator.geolocation
        .getCurrentPosition((position) => {
          this.getCityAndCountry(position);
        })
        .catch(
          (err) => {
            this.locationError();
          },
          { timeout: 7000 }
        );
    },
    getCityAndCountry(position) {
      let apiUrl = `https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?json=1`;
      this.$axios
        .get(apiUrl)
        .then((result) => {
          this.locationSuccess(result);
        })
        .catch((err) => {
          this.locationError();
        });
    },
    locationSuccess(result) {
      this.post.textLocation = result.data.city;
      if (result.data.country) {
        this.post.textLocation += ` , ${result.data.country}`;
      }
      this.locationLoading = false;
    },
    locationError() {
      this.$q.dialog({
        dark: true,
        title: "Error",
        message: "Could not find your location",
      });
      this.locationLoading = false;
    },
  },
  computed: {
    locationSupported(){
      if ('geolocation' in navigator) return true
      return false
    }
  }
};
</script>
<style lang="sass">
.camera-frame, .input-wrapper
  border: 5px solid $pink
  border-radius: 10px
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
