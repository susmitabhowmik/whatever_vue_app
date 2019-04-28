<template>
  <div class="restaurants">
    <h1>{{ message }}</h1>
    <p>Please enter your address: <input type="text" v-model="address" /></p>
    <p>Please enter a radius (miles): <input type="text" v-model="radius" /></p>
     <p>Please enter a start date: <input type="dateTime-local" v-model="start_date" /></p>
    <p>Please enter an end date: <input type="dateTime-local" v-model="end_date" /></p>

<!--     <button v-on:clcick ="toggleParams()">Refine Search</button> 
 -->    <p><button v-on:click="addParams()"> Go! </button></p>
    <p>Name: {{localEvent.event_name}}</p>
    <p>Description: {{localEvent.description}}</p>
    <p>Start Time: {{localEvent.start_time}}</p>
    <p>End Time: {{localEvent.end_time}}</p>
    <p>Venue: {{localEvent.venue}}</p>
    <p>URL: {{localEvent.url}}</p>

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
      message: "Find a local event near you!",
      localEvent: [],
      url: `http://www.google.com/maps/embed/v1/directions?key=${process.env.VUE_APP_GOOGLE_API_KEY}`
    };
  },
  created: function() {
  },
  methods: {
    addParams: function() {
      console.log('retrieving data...');
      axios.get("/api/events2?address=" + this.address + "&radius=" + this.radius + "&startDateTime=" + this.start_date + "&endDateTime=" + this.end_date).then(response => {
        console.log(response);
        this.localEvent = response.data;
      });
    },
    src: function() { 
      return this.url + "&origin=" + this.address + "&destination=" + this.localEvent.venue;
    }
  }
};
</script>