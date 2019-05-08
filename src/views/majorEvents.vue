<template>
  <div class="majorEvents">
    <h1>{{ message }}</h1>
      <div class="b-slide-menu__form__row row">
      <div class="col-md-3"><span class="b-slide-menu__form__row__title"><h4>Address:</h4></span>
      </div>
      <div class="col-md-6"> <div class="b-slide-menu__form__row__item"> <input type="text" placeholder="Address" v-model="address" /></div></div></div>

      <div class="b-slide-menu__form__row row">
      <div class="col-md-3"><span class="b-slide-menu__form__row__title"><h4>Radius (miles):</h4></span>
      </div> 
      <div class="col-md-6"> <div class="b-slide-menu__form__row__item"><input type="text" v-model="radius" placeholder="Radius" /></div></div></div>

      <div class="b-slide-menu__form__row row">
      <div class="col-md-3"><span class="b-slide-menu__form__row__title"><h4>Start date:</h4></span></div>
      <div class="col-md-6"> <div class="b-slide-menu__form__row__item" style="text-align: center;"><input type="dateTime-local" v-model="start_date" /></div></div></div>

      <div class="b-slide-menu__form__row row">
      <div class="col-md-3"><span class="b-slide-menu__form__row__title"><h4>
      End date:</h4></span></div>
      <div class="col-md-6"> <div class="b-slide-menu__form__row__item" style="text-align: center;"><input type="dateTime-local" v-model="end_date" /></div></div></div>

<!--     <button v-on:clcick ="toggleParams()">Refine Search</button> 
 -->  <p><button class="btn btn--black" v-on:click="addParams()"> Go! </button></p>
    <h3><div class="outputTitle">Name</div> {{majorEvent.name}}</h3>
    <h3><div class="outputTitle"> Date</div> {{majorEvent.localDate}}</h3>
    <h3><div class="outputTitle"> Time</div> {{majorEvent.localTime}}</h3>
    <h3><div class="outputTitle"> Address</div> {{majorEvent.address}}</h3>
    <h3><div class="outputTitle"> Venue</div> {{majorEvent.venue}}</h3>
   <!--  <p>Minimum Price: ${{majorEvent.minPrice}}</p>
    <p>Maximum Price: ${{majorEvent.maxPrice}}</p> -->
    <h3><div class="outputTitle">URL</div> <a v-bind:href="`${majorEvent.url}`">{{majorEvent.url}} </a></h3>
    <!-- <p><iframe id="map" width="100%" height="500px" v-bind:src="src()"></iframe></p> -->
     <div id='map' style='width: 100%; height: 500px;'></div>

  </div>
</template>

<style>
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
      message: "Find a major event near you!",
      majorEvent: [],
      // url: `http://www.google.com/maps/embed/v1/directions?key=${process.env.VUE_APP_GOOGLE_API_KEY}`
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
    // src: function() { 
    //   return this.url + "&origin=" + this.address + "&destination=" + this.majorEvent.venue;
    // }
  }
};
</script>