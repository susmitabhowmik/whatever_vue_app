<template>
  <div class="restaurants b-promo__sub-title">
    <h1>{{ message }}</h1>
    <p>Please enter your address: <input type="text" v-model="address" /></p>
    <p>Please enter a radius (miles): <input type="text" v-model="radius" /></p>
    <p>Please enter a cusine: <input type="text" v-model="cuisine" /></p>
<!--     <button v-on:clcick ="toggleParams()">Refine Search</button> 
 -->    
 <!--  <p>Please enter a minimum price: <input type="text" v-model="minprice" /></p>
  <p>Please enter a maximum price: <input type="text" v-model="maxprice" /></p> -->

  <p><button v-on:click="addParams()"> Go! </button></p>
  <p>Name: {{restaurant.name}}</p>
  <p>Address: {{restaurant.address}}</p>
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
      message: "Find a restaurant near you!",
      restaurant: [],
      url: `http://www.google.com/maps/embed/v1/directions?key=${process.env.VUE_APP_GOOGLE_API_KEY}`
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