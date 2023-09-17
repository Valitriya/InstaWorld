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
  </div>
</template>
<script>
export default {
  name: "ImageCapture",
  props: {
    post: Object,
  },
//   data() {
//     return {
//       post: {
//         videoObject: {},
//       },
//       imageCaptured: false,
//     };
//   },
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
  created() {
    this.imageCaptured = false;
  },
};
</script>
