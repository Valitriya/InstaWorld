<template>
  <q-input
    v-model="post.textLocation"
    :loading="locationLoading"
    class="col custom-input"
    label="Location"
  >
    <template v-slot:append>
      <q-btn
        v-if="!locationLoading && locationSupported"
        @click="getLocation"
        icon="eva-navigation-2-outline"
        dense
        flat
        round
      />
    </template>
  </q-input>
</template>
<script>
import axios from 'axios';
export default {
  name: "Location",
  props: {
    post: Object
  },
  data() {
    return {
      locationLoading: false,
    };
  },
  methods:{  
    getLocation() {
    this.locationLoading = true;
    navigator.geolocation
      .getCurrentPosition((position) => {
        this.getCityAndCountry(position);
      }, (err) => {
        this.locationError(err);
      }, {timeout: 7000});
  },
  getCityAndCountry(position) {
    let apiUrl = `https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?json=1`;
    axios
      .get(apiUrl)
      .then((response) => {
        this.locationSuccess(response.data);
      })
      .catch((err) => {
        this.locationError();
      });
  },
  locationSuccess(result) {
    this.post.textLocation = result.data.city;
    if (result.data.country) {
      this.post.textLocation += ` , ${result.data.country}`;
    }
    this.locationLoading = false;
  },
  locationError() {
    this.$q.dialog({
      dark: true,
      title: "Error",
      message: "Could not find your location",
    });
    this.locationLoading = false;
  },
},
  computed: {
    locationSupported() {
      if ("geolocation" in navigator) return true;
      return false;
    },
  },
};
</script>
