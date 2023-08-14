<template>
  <q-page class="container q-pa-md">
    <q-card 
      v-for="post in posts"
      :key="post.id"
      class="card-post bg-pink-4 q-mb-md"
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
            {{post.location}}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <img :src="post.imageUrl">
      <q-card-section>
        <div>{{post.caption}}</div>
        <div class="text-caption text-white">{{post.date | niceDate}}</div>
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