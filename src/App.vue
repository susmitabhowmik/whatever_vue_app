<template>
  <div id="app">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="nav-link" to="/" style="color:white;">WHATEVER</router-link> 
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/restaurants">Restaurants</router-link> 
      </li>
      <li class="nav-item active">
        <router-link class="nav-link" to="/events">Events</router-link> 
      </li>
    </ul>
  </div>
  </nav>
  <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
nav {
  margin-bottom: 50px;
}
</style>
