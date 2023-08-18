<template>
    <q-page class="container q-pa-md">
      <div class="camera-frame q-pa-md">
        <img class="full-width" 
             src="https://sun9-13.userapi.com/impg/gOKXlXiJu3XH7SGJvzX3TkSE0GmGS4QaTMALxA/3FpZKJBCo84.jpg?size=1080x1080&quality=96&sign=7bd8a9bf28aff869c3a2febe0d884257&type=album">
      </div>
      <div class="text-center q-pa-md">
        <q-btn 
            round 
            color="pink-6"
            icon="eva-camera"
            size="lg" />
      </div>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'PageCamera'
  }
  </script>
  <style lang="sass">
   .camera-frame
      border: 2px solid $pink 
      border-radius: 10px
  </style>