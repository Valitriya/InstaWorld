<template>
  <div>
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
</template>
<script>
export default {
  name: "ImageUpload",
  data() {
    return {
      shouldResetFileInput: false,
      imageUpload: [],
      hasCameraSupport: true,
      imageCaptured: false,
      videoObject: {}
    };
  },
  methods: {
    captureImage() {
      if (this.$refs.videoElement && this.$refs.canvas) {
        let videoElement = this.$refs.videoElement;
        let canvas = this.$refs.canvas;
        canvas.width = videoElement.getBoundingClientRect().width;
        canvas.height = videoElement.getBoundingClientRect().height;
        let context = canvas.getContext("2d");
        context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        this.imageCaptured = true;
        this.post.photo = this.dataURItoBlob(canvas.toDataURL());
        this.disableCamera();
        this.$emit("capture-image", this.videoObject);
      }
    },
    captureImageFallback(file) {
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
    },
    clearImageUpload() {
      this.imageUpload = null;
      this.shouldResetFileInput = !this.shouldResetFileInput;
      this.imageCaptured = false;
    },
  },
  mounted() {
    this.captureImage();
  },
};
</script>
