<template></template>
<script>
  export default{
      name: "Location",
      data(){
          return{

          }
      },
      getLocation() {
    this.locationLoading = true;
    navigator.geolocation
      .getCurrentPosition((position) => {
        this.getCityAndCountry(position);
      })
      .catch(
        (err) => {
          this.locationError();
        },
        { timeout: 7000 }
      );
  },
  getCityAndCountry(position) {
    let apiUrl = `https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?json=1`;
    this.$axios
      .get(apiUrl)
      .then((result) => {
        this.locationSuccess(result);
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
computed: {
  locationSupported() {
    if ("geolocation" in navigator) return true;
    return false;
  },
}
}
</script>
