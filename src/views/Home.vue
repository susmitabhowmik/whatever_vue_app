<template>
  <div id="home">
    <h1>{{message}}</h1>
    <h5>See and visit interesting places. Share experiences with your friends.</h5>
    <button type="button" class="btn btn-light"><router-link style="color: black;" class="nav-link" to="/restaurants">Restaurants</router-link> </button>  
    <button type="button" class="btn btn-light"><router-link style="color:black" class="nav-link" to="/localEvents">Find me a local event</router-link> </button>
    <button type="button" class="btn btn-light"><router-link style="color:black" class="nav-link" to="/majorEvents" color="black">Find me a major event</router-link> </button>
  </div>
</template>

<style>
    html {
      background-image: url(../../public/background.png);
      background-size: cover;
      height: 1000px;
      width: 100%;
      margin:0;
      padding: 0;
    }
    button {
      margin: 5px;
    }
    #home {
      text-align:center;
      position: absolute;
      top: 45%;
      width:50%;
      left: 25%;
      color: white
        }
  </style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to Whatever: The app for indecisive people."
    };
  },
  created: function() {},
  methods: {}
};
</script>
