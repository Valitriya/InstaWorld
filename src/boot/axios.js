import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

const axiosInstance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
  });
  
  export default ({ Vue }) => {
    Vue.prototype.$axios = axiosInstance;
  };