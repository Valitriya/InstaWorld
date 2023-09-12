<template>
  <div>
    <div class="camera-frame text-center q-pa-md">
      <video
        v-show="!imageCaptured"
        class="full-width"
        autoplay
        playsinline
        ref="videoElement"
      />
      <canvas
        v-show="imageCaptured"
        ref="canvas"
        class="full-width"
        height="240"
      />
    </div>
    <div class="text-center q-pa-md">
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
    hasCameraSupport: Boolean,
  },
  data() {
    return {
      imageCaptured: false,
      cameraSupported: null,
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
    disableCamera() {
      this.$refs.videoElement.srcObject.getVideoTracks().forEach((track) => {
        track.stop();
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
    dataURItoBlob(dataURI) {
      // convert base64 to raw binary data held in a string
      // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
      var byteString = atob(dataURI.split(",")[1]);
      // separate out the mime component
      var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
      // write the bytes of the string to an ArrayBuffer
      var ab = new ArrayBuffer(byteString.length);
      // create a view into the buffer
      var ia = new Uint8Array(ab);
      // set the bytes of the buffer to the correct values
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      // write the ArrayBuffer to a blob, and you're done
      var blob = new Blob([ab], { type: mimeString });
      return blob;
    },
  },
  mounted() {
    this.initCamera();
  },
  beforeDestroy() {
    if (this.hasCameraSupport) {
      this.disableCamera();
    }
  },
};
</script>
