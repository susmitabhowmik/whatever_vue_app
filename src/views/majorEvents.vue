<template>
  <div class="majorEvents b-promo__sub-title">
    <h1>{{ message }}</h1>
    <p>Please enter your address: <input type="text" v-model="address" /></p>
    <p>Please enter a radius (miles): <input type="text" v-model="radius" /></p>
    <p>Please enter a start date: <input type="dateTime-local" v-model="start_date" /></p>
    <p>Please enter an end date: <input type="dateTime-local" v-model="end_date" /></p>

<!--     <button v-on:clcick ="toggleParams()">Refine Search</button> 
 -->    <p><button v-on:click="addParams()"> Go! </button></p>
    <p>Name: {{majorEvent.name}}</p>
    <p>Date {{majorEvent.localDate}}</p>
    <p>Time {{majorEvent.localTime}}</p>
    <p>Address: {{majorEvent.address}}</p>
    <p>Venue: {{majorEvent.venue}}</p>
    <p>Minimum Price: ${{majorEvent.minPrice}}</p>
    <p>Maximum Price: ${{majorEvent.maxPrice}}</p>
    <p>URL: {{majorEvent.url}}</p>
    <p><iframe id="map" width="100%" height="500px" v-bind:src="src()"></iframe></p>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Find a major event near you!",
      majorEvent: [],
      url: `http://www.google.com/maps/embed/v1/directions?key=${process.env.VUE_APP_GOOGLE_API_KEY}`
    };
  },
  created: function() {
  },
  methods: {
    addParams: function() {
      console.log('retrieving data...');
      axios.get("/api/events?address=" + this.address + "&radius=" + this.radius + "&startDateTime=" + this.start_date + "&endDateTime=" + this.end_date).then(response => {
        console.log(response);
        this.majorEvent = response.data;
      });
    },
    src: function() { 
      return this.url + "&origin=" + this.address + "&destination=" + this.majorEvent.venue;
    }
  }
};
</script>