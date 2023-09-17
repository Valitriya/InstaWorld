<template>
  <div>
    <div>
      <q-btn
        v-if="hasCameraSupport !== null"
        @click="captureImage"
        round
        color="pink-6"
        icon="eva-camera"
        size="lg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Camera",
  props: {
    cameraPost: Object,
    hasCameraSupport: Boolean,
  },
  data() {
    return {
      cameraSupported: null,
      post: {
        photo: null,
      },
    };
  },
  methods: {
    initCamera() {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then((stream) => {
          this.$refs.videoElement.srcObject = stream;
          this.$emit("video-element", this.$refs.videoElement);
          this.cameraSupported = true;
        })
        .catch((error) => {
          this.cameraSupported = false;
        });
    },
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
        this.$emit("capture-image", this.post.videoObject);
        this.disableCamera();
      }
    },
    disableCamera() {
      this.$refs.videoElement.srcObject.getVideoTracks().forEach((track) => {
        track.stop();
      });
    },
    mounted() {
      this.initCamera();
    },
    beforeDestroy() {
      if (this.hasCameraSupport) {
        this.disableCamera();
      }
    },
  },
};
</script>
