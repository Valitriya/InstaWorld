<template>
    <q-page class="container q-pa-md small-screen-only">
      <div class="camera-frame q-pa-md">
        <video 
          class="full-width"
          autoplay
          playsinline
          ref="video"
        />
        <canvas
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
        } 
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