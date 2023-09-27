<template>
  <q-item clickable tag="a" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-white text-grand-hotel">{{
        title
      }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
<<<<<<< HEAD
=======

<style lang="sass">
.q-list .q-item__label
  font-size: 25px
</style>
>>>>>>> 2b3c157140158f72d6b1a5631c304d07e73f817e
