<template>
  <div id="app">
     <header class="b-header clearfix">
        <a href="/home" class="logo"><span>Whatever</span> </a>
        <a class="weather" href="#"> <img width="35" height="35" src="img/rain-xxl.png" alt="Weather"> <span>+ 24° C</span> </a>
        <div class="b-header__ctrl">
            <div class="b-header__ctrl__item"> </div>
            <div class="b-header__ctrl__item">
                <a href="#" class="ab-item login jquery_popup"> <i class="fa fa-unlock-alt" aria-hidden="true"></i><span>My Account</span>
                </a>
            </div>
        </div>
        <div class="b-nav-toggle closed"> WHATEVER <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
        <nav class="b-nav fadein">
            <ul>
                <li class="menu-item-has-children">
                    <a href="/restaurants"> Restaurants <i class="fa fa-map-marker" aria-hidden="true"></i> </a>
                </li>
                <li class="menu-item-has-children"> <a href="/localEvents">Local Events <i class="fa fa-star-o" aria-hidden="true"></i></a>
                </li>
                <li class="menu-item-has-children"> <a href="/majorEvents">Major Events <i class="fa fa-star-o" aria-hidden="true"></i></a>
                </li>
            </ul>
        </nav>
    </header>
     <router-view/>


  </div>
</template>

<style>

</style>
