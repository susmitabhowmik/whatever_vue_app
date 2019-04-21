<template>
  <div class="restaurants">
    <h1>{{ message }}</h1>
    <p>Please enter your address: <input type="text" v-model="address" /></p>
    <p>Please enter a radius: <input type="text" v-model="radius" /></p>
    <p>Please enter a start date: <input type="dateTime-local" v-model="start_date" /></p>
    <p>Please enter an end date: <input type="dateTime-local" v-model="end_date" /></p>

<!--     <button v-on:clcick ="toggleParams()">Refine Search</button> 
 -->    <p><button v-on:click="addParams()"> Go! </button></p>
    <p>Name: {{majorEvent.name}}</p>
    <p>Date/Time {{majorEvent.dateTime}}</p>
    <p>Address: {{majorEvent.address}}</p>
    <p>Venue: {{majorEvent.venue}}</p>
    <p>Price Range: {{majorEvent.priceRange}}</p>
    <p>URL: {{majorEvent.url}}</p>



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
    };
  },
  created: function() {
  },
  methods: {
    addParams: function() {
      console.log('retrieving data...');
      axios.get("/api/events?address=" + this.address + "&radius=" + this.radius + "&startDateTime=" + this.start_date + "&endDateTime=" + this.end_date ).then(response => {
        console.log(response);
        this.majorEvent = response.data;
      });
    }
  }
};
</script>