<template>
  <div>
    <q-file
      :key="shouldResetFileInput"
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
</template>
<script>
import Camera from "../Camera/Camera.vue";

export default {
  name: "ImageUpload",
  component: {
    Camera,
  },
  data() {
    return {
      hasCameraSupport: false,
      imageUpload: null, 
      shouldResetFileInput: false,
      imageCaptured: false
    };
  },
  methods: {
    captureImageFallback(file) {
      if(this.post && typeof this.post.photo !== 'undefined' && this.post.photo !== null){
        this.post.photo = file;

        let canvas = this.$refs.canvas;
        let context = canvas.getContext("2d");

        let reader = new FileReader();
        reader.onload = (event) => {
          let img = new Image();
          img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
            this.imageCaptured = true;
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(file);
      }else {
        console.error('post or post.photo is not initialized.');
      }
  },
    clearImageUpload() {
      this.imageUpload = null;
      this.shouldResetFileInput = !this.shouldResetFileInput;
      this.imageCaptured = false;
    },
  },
};
</script>
