<template>
 <div id='map' style='width: 100%; height: 500px; background-color: black'></div>
</template>

<style>
#map { position:relative; top:0; bottom:0; width:100%; }
</style>

<script>
import axios from 'axios';
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
  }
};
</script>
