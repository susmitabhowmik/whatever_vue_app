<template>
  <div class="restaurants">
  <div class="text">
    <h1>{{ message }}</h1>
    <h6 style="margin: 15px;">Please enter your address: <input type="text" v-model="address" /></h6>
    <h6 style="margin: 15px;">Please enter a radius (miles): <input type="text" v-model="radius" /></h6>
    <h6 style="margin: 15px;">Please enter a cusine: <input type="text" v-model="cuisine" /></h6>
<!--     <button v-on:clcick ="toggleParams()">Refine Search</button> 
 -->   <h6 style="margin: 15px;"> Minimum Price (optional):
       <select v-model="min_price" data-placeholder="Minimum Price" style="background-color: white" tabindex="2" >
        <option value="1">💲</option>
        <option value="2">💲💲</option>
        <option value="3">💲💲💲</option>
        <option value="4">💲💲💲💲</option>
        </select> </h6>
        <h6 style="margin: 15px;">Maximum price (optional):
        <select v-model="max_price" style="background-color: white" data-placeholder="Maximum Price" tabindex="2">
        <option value="1">💲</option>
        <option value="2">💲💲</option>
        <option value="3">💲💲💲</option>
        <option value="4">💲💲💲💲</option>
        </select> </h6>
      <p style="margin: 15px;"><button type="button" class="btn btn-secondary" v-on:click="addParams()"> Go! </button></p>
      <h6 style="margin: 15px;">Name: {{restaurant.name}}</h6>
      <h6 style="margin: 15px;">Address: {{restaurant.address}}</h6>
    </div>  
      <div id='map'></div> 
    </div>
</template>

<style>
  body {
    margin: 0;
    padding: 0;

  }
  .text {
    text-align: center;
    padding-bottom: 80px;
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
      message: "Find a Restaurant",
      restaurant: [],

    };
  },
  created: function() {
  },
  methods: {
    addParams: function() {
      console.log('retrieving data...');
      axios.get("/api/restaurants?address=" + this.address + "&keyword=" + this.cuisine + "&distance=" + this.radius * 1609.34).then(response => {
        console.log(response);
        this.restaurant = response.data;
      });
    },
    src: function() { 
      return this.url + "&origin=" + this.address + "&destination=" + this.restaurant.address;
    }
  }
};
</script>