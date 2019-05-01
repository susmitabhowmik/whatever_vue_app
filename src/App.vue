<template>
  <div id="app">
     <header class="b-header clearfix">
        <a href="/home" class="logo"><span>Whatever</span> </a>
   <div class="b-header__ctrl">
            <div class="b-header__ctrl__item"> 
                <a href="/restaurants" class="ab-item login "> <i class="fa fa-map-marker" aria-hidden="true"></i><span>Restaurants</span>
                </a></div>
             <div class="b-header__ctrl__item"> 
                <a href="/localEvents" class="ab-item login "> <i class="fa fa-star-o" aria-hidden="true"></i><span>Local Events</span>
                </a></div>

             <div class="b-header__ctrl__item"> 
                <a href="/majorEvents" class="ab-item login "> <i class="fa fa-star-o" aria-hidden="true"></i><span>Major Events</span>
                </a></div>
            <div class="b-header__ctrl__item">
                <a href="/login" class="ab-item login jquery_popup"> <i class="fa fa-unlock-alt" aria-hidden="true"></i><span>Login</span>
                </a>
            </div>
        </div>
        <div class="b-nav-toggle closed"> WHATEVER 
        </div>
        <!-- <nav class="b-nav">
            <ul>
                <li class="menu-item-has-children">
                     
                    <a href="/restaurants"> Restaurants <i class="fa  fa-map-marker" aria-hidden="true"></i></a>
                </li>
                <li class="menu-item-has-children"> <a href="/localEvents">Local Events <i class="fa fa-star-o" aria-hidden="true"></i></a>
                </li>
                <li class="menu-item-has-children"> <a href="/majorEvents">Major Events <i class="fa fa-star-o" aria-hidden="true"></i></a>
                </li>
            </ul>
        </nav> -->
    </header>
     <router-view/>
<footer>
    
</footer>

  </div>
</template>

<style>

</style>
