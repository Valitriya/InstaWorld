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
<<<<<<< HEAD
      content-class="bg-grey-1"
=======
      content-class="q-pa-md bg-pink-4"
>>>>>>> 2b3c157140158f72d6b1a5631c304d07e73f817e
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
<<<<<<< HEAD
    <q-footer 
      elevated
      class="bg-white small-screen-only">
    </q-footer>
    <q-footer bordered class="bg-white">
      <q-tabs 
=======

    <q-footer elevated class="bg-white small-screen-only">
      <q-tabs
>>>>>>> 2b3c157140158f72d6b1a5631c304d07e73f817e
        class="text-cyan"
        active-color="pink-5"
        aligh="center"
        indicator-color="transparent"
      >
        <q-route-tab
          to="/message"
          name="message"
          icon="eva-message-square-outline"
        >
          <q-badge color="pink-5" floating>2</q-badge>
        </q-route-tab>
        <q-route-tab to="/reels" name="reels" icon="eva-film-outline" />
        <q-route-tab to="/search" name="search" icon="eva-search-outline">
        </q-route-tab>
        <q-route-tab to="/camera" name="camera" icon="eva-camera-outline">
        </q-route-tab>
<<<<<<< HEAD
        <q-route-tab 
          to="/profile"
          alert 
          name="profile" 
          icon="face" 
          label="Profile"/>
=======
        <q-route-tab to="/profile" name="profile" icon="face" />
>>>>>>> 2b3c157140158f72d6b1a5631c304d07e73f817e
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Home",
    icon: "eva-home-outline",
    link: "/",
  },
  {
    title: "Search query",
    icon: "travel_explore",
    link: "http://localhost:8080/#/search",
  },
  {
    title: "Interesting",
    icon: "interests",
    link: "http://localhost:8080/#/interesting",
  },
  {
    title: "Reels",
    icon: "eva-film-outline",
    link: "http://localhost:8080/#/reels",
  },
  {
    title: "Message",
    icon: "eva-message-square-outline",
    link: "http://localhost:8080/#/message",
  },
  {
    title: "Notification",
    icon: "favorite",
    link: "http://localhost:8080/#/notification",
  },
  {
    title: "Create",
    icon: "add_circle_outline",
    link: "http://localhost:8080/#/create",
  },
  {
    title: "Profile",
    icon: "face",
    link: "http://localhost:8080/#/profile",
  },
];

export default {
  name: "MainLayout",
  components: {
    EssentialLink,
  },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
};
</script>

<style lang="sass">
<<<<<<< HEAD
  .q-toolbar__title 
    text-align: center
    font-size: 31px
    .q-footer
      .q-tab__icon
        font-size: 35px
</style>

=======
.q-toolbar
  @media (min-width: $breakpoint-xs-max)
    height: 77px
.q-toolbar__title
  font-size: 31px
  @media (max-width: $breakpoint-xs-max)
    text-align: center
    font-size: 31px
.q-footer
  .q-tab__icon
    font-size: 45px
.q-list
  margin: 80px 0px 0px 30px
.q-item__section--side > .q-icon
  color: $white
  font-size: 30px
</style>
>>>>>>> 2b3c157140158f72d6b1a5631c304d07e73f817e
