<template>
  <q-page class="container q-pa-md">
    <q-card 
      class="card-post bg-pink-4"
      flat
      bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label
          class="text-bold text-white">valensimip</q-item-label>
          <q-item-label caption>
            Saint Petersburg, Russia
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <img src="https://sun9-26.userapi.com/impg/lVE22o2WWEBMlSqCsMxkNYsWsUM_RuAL_PQy1g/GOVd4DuVAX4.jpg?size=640x640&quality=96&sign=127e6dd64e0cd1391e51245ee89af184&type=album">
      <q-card-section>
        <div>Flowers</div>
        <div class="text-caption text-white">August 10 18:09</div>
        <div class="wrapper absolute-bottom-right">
          <q-btn flat round icon="favorite" />
          <q-btn flat round icon="bookmark" />
          <q-btn flat round icon="share" />
        </div>

      </q-card-section>

    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageHome'
}
</script>
<style lang="sass">
.card-post
  .q-btn 
    color: white
  .q-img
    min-height: 250px
</style>