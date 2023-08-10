<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-cyan">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          InstaWorld
        </q-toolbar-title>

        <div>InstaWorld v{{ $q.version }}</div>
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

    <q-footer bordered class="bg-white">
      <q-tabs 
        class="cyan-10"
        active-color="info"
        aligh="center"
        indicator-color="transparent">
        <q-route-tab 
          to="/message"
          name="message" 
          icon="message" 
          label="Message">
          <q-badge color="red" floating>2</q-badge>
        </q-route-tab>
        <q-route-tab 
          to="/notification"
          name="notification" 
          icon="favorite" 
          label="Notification">
            <q-badge color="red" floating>10+</q-badge>
        </q-route-tab>
        <q-route-tab 
          to="/reels"
          alert 
          name="reels" 
          icon="not_started" 
          label="Reels"/>
        <q-route-tab 
          to="/search"
          alert 
          name="search" 
          icon="search" 
          label="Search">
        </q-route-tab>
        <q-route-tab 
          to="/camera"
          alert 
          name="camera" 
          icon="camera" 
          label="Camera">
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
    icon: 'home',
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
    icon: 'not_started',
    link: 'http://localhost:8080/#/reels'
  },
  {
    title: 'Message',
    icon: 'chat',
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
