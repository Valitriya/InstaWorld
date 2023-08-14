<template>
  <q-page class="container q-pa-md">

    <div class="row q-col-gutter-lg">
      <div class="col-8">
        <q-card 
        v-for="post in posts"
        :key="post.id"
        class="card-post bg-pink-4 q-mb-md"
        flat
        bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://sun9-48.userapi.com/impg/If3R-LcLYWlkmKukSnxnCFUm83Cf-aQm3ZDKCA/CElOBgUC0CU.jpg?size=1400x1936&quality=95&sign=a9a9f900f90dca64c7bab48e9786f66a&type=album">
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
      </div>
      <div class="col-4">
        <q-item class="fixed">
          <q-item-section avatar>
            <q-avatar  size="48px">
              <img src="https://sun9-48.userapi.com/impg/If3R-LcLYWlkmKukSnxnCFUm83Cf-aQm3ZDKCA/CElOBgUC0CU.jpg?size=1400x1936&quality=95&sign=a9a9f900f90dca64c7bab48e9786f66a&type=album">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label
              class="text-bold text-pink-11">valensimip</q-item-label>
            <q-item-label caption>
              Valentina
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
  
  </q-page>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'PageHome',
  data(){
    return {
      posts: [
        {
          id: 1,
          caption: "Flowers",
          date: 1692027508724,
          location: "Saint Petersburg, Russia",
          imageUrl: "https://sun9-26.userapi.com/impg/lVE22o2WWEBMlSqCsMxkNYsWsUM_RuAL_PQy1g/GOVd4DuVAX4.jpg?size=640x640&quality=96&sign=127e6dd64e0cd1391e51245ee89af184&type=album"
        },
        {
          id: 2,
          caption: "Flowers",
          date: 1692027508724,
          location: "Saint Petersburg, Russia",
          imageUrl: "https://sun9-26.userapi.com/impg/lVE22o2WWEBMlSqCsMxkNYsWsUM_RuAL_PQy1g/GOVd4DuVAX4.jpg?size=640x640&quality=96&sign=127e6dd64e0cd1391e51245ee89af184&type=album"
        },
        {
          id: 3,
          caption: "Flowers",
          date: 1692027508724,
          location: "Saint Petersburg, Russia",
          imageUrl: "https://sun9-26.userapi.com/impg/lVE22o2WWEBMlSqCsMxkNYsWsUM_RuAL_PQy1g/GOVd4DuVAX4.jpg?size=640x640&quality=96&sign=127e6dd64e0cd1391e51245ee89af184&type=album"
        },
        {
          id: 4,
          caption: "Flowers",
          date: 1692027508724,
          location: "Saint Petersburg, Russia",
          imageUrl: "https://sun9-26.userapi.com/impg/lVE22o2WWEBMlSqCsMxkNYsWsUM_RuAL_PQy1g/GOVd4DuVAX4.jpg?size=640x640&quality=96&sign=127e6dd64e0cd1391e51245ee89af184&type=album"
        }
      ]
    }
  },
  filters: {
    niceDate(value){
      return date.formatDate(value, 'MMM D h:mmA')
    }
  }
}
</script>
<style lang="sass">
.card-post
  .q-btn 
    color: white
  .q-img
    min-height: 250px
.q-avatar
  img
    object-fit: cover
</style>