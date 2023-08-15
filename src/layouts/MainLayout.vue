<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white text-white">
      <q-toolbar class="bg-pink-4">
        <q-toolbar-title class="text-grand-hotel text-bold">
          JuicyGram
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer 
      elevated
      class="bg-white small-screen-only">
    </q-footer>
    <q-footer bordered class="bg-white">
      <q-tabs 
        class="text-cyan"
        active-color="pink-5"
        aligh="center"
        indicator-color="transparent">
        <q-route-tab 
          to="/message"
          name="message" 
          icon="eva-message-square-outline">
          <q-badge color="pink-5" floating>2</q-badge>
        </q-route-tab>
        <q-route-tab 
          to="/reels"
          name="reels" 
          icon="eva-film-outline"/>
        <q-route-tab 
          to="/search"
          name="search" 
          icon="eva-search-outline">
        </q-route-tab>
        <q-route-tab 
          to="/camera"
          name="camera" 
          icon="eva-camera-outline">
        </q-route-tab>
        <q-route-tab 
          to="/profile"
          alert 
          name="profile" 
          icon="face" 
          label="Profile"/>
      </q-tabs>
    </q-footer>
      
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    icon: 'eva-home-outline',
    link: '/'
  },
  {
    title: 'Search query',
    icon: 'travel_explore',
    link: 'http://localhost:8080/#/search'
  },
  {
    title: 'Interesting',
    icon: 'interests',
    link: 'http://localhost:8080/#/interesting'
  },
  {
    title: 'Reels',
    icon: 'eva-film-outline',
    link: 'http://localhost:8080/#/reels'
  },
  {
    title: 'Message',
    icon: 'eva-message-square-outline',
    link: 'http://localhost:8080/#/message'
  },
  {
    title: 'Notification',
    icon: 'favorite',
    link: 'http://localhost:8080/#/notification'
  },
  {
    title: 'Create',
    icon: 'add_circle_outline',
    link: 'http://localhost:8080/#/create'
  },
  {
    title: 'Profile',
    icon: 'face',
    link: 'http://localhost:8080/#/profile'
  }
]

export default {
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

<style lang="sass">
  .q-toolbar__title 
    text-align: center
    font-size: 31px
    .q-footer
      .q-tab__icon
        font-size: 35px
</style>

