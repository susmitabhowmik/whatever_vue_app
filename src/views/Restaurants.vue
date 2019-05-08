<template>
  <div class="restaurants">
<!--   <div class="restaurants b-promo__sub-title">
 -->    <h1>{{ message }}</h1>
      <div class="b-slide-menu__form__row row">
      <div class="col-md-3"><span class="b-slide-menu__form__row__title"><h4>Address:</h4></span>
      </div>
      <div class="col-md-6"> <div class="b-slide-menu__form__row__item"> <input type="text" placeholder="Address" v-model="address" /></div></div></div>
    
      <div class="b-slide-menu__form__row row">
      <div class="col-md-3"><span class="b-slide-menu__form__row__title"><h4>Radius (miles):</h4></span>
      </div> 
      <div class="col-md-6"> <div class="b-slide-menu__form__row__item"><input type="text" v-model="radius" placeholder="Radius" /></div></div></div>


      <div class="b-slide-menu__form__row row">
      <div class="col-md-3"><span class="b-slide-menu__form__row__title"><h4>Cusine:</h4></span>
      </div> 
        <div class="col-md-6"> <div class="b-slide-menu__form__row__item"><input type="text" placeholder="Cuisine" v-model="cuisine" /></div></div> </div>
<!--     <button v-on:clcick ="toggleParams()">Refine Search</button> 
 -->    
 <!--  <p>Please enter a minimum price: <input type="text" v-model="minprice" /></p>
  <p>Please enter a maximum price: <input type="text" v-model="maxprice" /></p> -->

    <p><button class="btn btn--black" v-on:click="addParams()"> Go! </button></p>

    <h3><div class="outputTitle"> Name</div> {{restaurant.name}}</h3>
    <h3><div class="outputTitle"> Address</div> {{restaurant.address}}</h3>
<!-- <iframe id="map" width="100%" height="500px" text-align:left> -->
      <div id='map' style='width: 100%; height: 500px;'></div>

<!-- </iframe>
 -->  



</div>
</template>

<style>
p {text-align: center;}
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
      message: "Find a restaurant near you!",
      restaurant: [],
      // url: `http://www.google.com/maps/embed/v1/directions?key=${process.env.VUE_APP_GOOGLE_API_KEY}`
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
    // src: function() { 
    //   return this.url + "&origin=" + this.address + "&destination=" + this.restaurant.address;
    // },

  }
};
</script>