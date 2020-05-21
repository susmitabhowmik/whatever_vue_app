<template>
  <div class="localEvents">
    <div class = "text">
      <h1>{{ message }}</h1>
      <h6 style="margin: 15px;">Please enter your address: <input type="text" v-model="address" /></h6>
      <h6 style="margin: 15px;">Please enter a radius (miles): <input type="text" v-model="radius" /></h6>
      <h6 style="margin: 15px;">Please enter a start date: <input type="dateTime-local" v-model="start_date" /></h6> 
      <h6 style="margin: 15px;">Please enter an end date: <input type="dateTime-local" v-model="end_date"  /></h6>

<!--     <button v-on:clcick ="toggleParams()">Refine Search</button> 
 -->    
      <p style="margin: 15px;"><button type="button" class="btn btn-secondary" v-on:click="addParams()"> Go! </button></p>
      <h6 style="margin: 15px;">Name: {{localEvent.event_name}}</h6>
      <h6 style="margin: 15px;">Description: {{localEvent.description}}</h6>
      <h6 style="margin: 15px;">Start Time: {{localEvent.start_time}}</h6>
      <h6 style="margin: 15px;">End Time: {{localEvent.end_time}}</h6>
      <h6 style="margin: 15px;">Venue: {{localEvent.venue}}</h6>
      <h6 style="margin: 15px;">URL:  <a v-bind:href="`${localEvent.url}`">{{localEvent.url}}</a></h6>
    </div>
    <div id="map"></div>
  </div>
</template>

<style>
  body {
    margin: 0;
    padding: 0;

  }
  h6 {
    margin: 15px;
  }
  .text {
    text-align: center;
  }
  #map {
   position: absolute; 
   width: 100%;
   height: 700px;
  }
</style>

<script>
import axios from "axios";

export default {
 mounted: function() {
    mapboxgl.accessToken = `${process.env.VUE_APP_MAPBOX_ACCESS_TOKEN}`;
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-79.4512, 43.6568],
      zoom: 13
    });
       
    map.addControl(new MapboxDirections({
      accessToken: mapboxgl.accessToken
    }), 'top-left');
  },

  data: function() {
    return {
      message: "Find a local event near you!",
      localEvent: [],
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