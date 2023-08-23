<template>
    <q-page class="container q-pa-md small-screen-only">
      <div class="camera-frame q-pa-md">
        <video 
          v-show="!imageCaptured"
          class="full-width"
          autoplay
          playsinline
          ref="video"
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
            @click="captureImage"
            round 
            color="pink-6"
            icon="eva-camera"
            size="lg"/>
      </div>
      <div class="input-wrapper small-wrapper-input">
        <div class="row justify-center q-ma-md">
          <q-input 
            v-model="post.textCaption"
            class="col custom-input"
            label="Caption"/>
        </div>
        <div class="row justify-center q-ma-md">
          <q-input 
            v-model="post.textLocation "
            class="col custom-input"
            label="Location">
            <template v-slot:append>
                <q-btn 
                  icon="eva-navigation-2-outline"
                  dense
                  flat
                  round />
            </template>
          </q-input>
        </div>
      </div>
      <div class="row justify-center q-mt-lg">
        <q-btn 
          class="glossy" 
          color="info" 
          label="Go" />
      </div>
    </q-page>
  </template>
  
  <script>
  import { uid } from 'quasar'
  require('md-gum-polyfill')

  export default {
    name: 'PageCamera',
    data(){
      return{
        post: {
          id: uid(),
          textCaption:'',
          textLocation: '',
          photo: null,
          date: Date.now()
        },
        imageCaptured: false
      }
    },
    methods: {
      initCamera(){
        navigator.mediaDevices.getUserMedia({
          video: true
        }).then(stream =>{
          this.$refs.video.srcObject = stream
        })
      },
      captureImage(){
        let video = this.$refs.video
        let canvas = this.$refs.canvas
        canvas.width = video.getBoundingClientRect().width
        canvas.height = video.getBoundingClientRect().height
        let context = canvas.getContext('2d')
        context.drawImage(video, 0, 0, canvas.width, canvas.height)
        this.imageCaptured = true
        this.post.photo = this.dataURItoBlob(canvas.toDataURL())
      },
      dataURItoBlob(dataURI) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);
        // create a view into the buffer
        var ia = new Uint8Array(ab);
        // set the bytes of the buffer to the correct values
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        // write the ArrayBuffer to a blob, and you're done
        var blob = new Blob([ab], {type: mimeString});
        return blob;
      }
    },
    mounted(){
      this.initCamera()
    }
  }
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
    .q-field__control
      --q-color-primary: #efc7f7
      background-color: $pink-11  
      border-radius: 5px 
      &:before
        display: none
    .q-btn
      color: $white
    .q-field__native
      color: $white
      padding: 24px 10px 10px 10px
      font-weight: bold
  </style>