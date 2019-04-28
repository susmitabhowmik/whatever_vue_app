<template>
  <div id="maps">
  <p>From: <input type="text" v-model.lazy = "origin"></p>
  <p>To: <input type="text" v-model.lazy="destination"></p>
  <p><iframe width="80%" height="500px" v-bind:src="src()"></iframe></p>
</div>
</template>

import axios from "axios";
<script type="text/javascript">
export default {
  data: function() {
    const api_key = process.env.VUE_APP_GOOGLE_API_KEY;
    return {
      origin: "Empire State Building",
      destination: "Freedom Tower",
      url: `http://www.google.com/maps/embed/v1/directions?key=${api_key}`
    };
  },
  created: function() {},
  methods: {
    src: function() {
      return this.url + "&origin=" + this.origin + "&destination=" + this.destination;
    }
  }
};
</script>