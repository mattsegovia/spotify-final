<template>
  <div id="app">

  <nav class="navbar is-transparent is-dark">
              <div class="navbar-brand">
                <a class="navbar-item" href="https://www.spotify.com/us/" w>
                  <img src="./assets/spotify_logo_green.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
                </a>
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            
              <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                  <a class="navbar-item" href="https://bulma.io/">
                    Home
                  </a>
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link" href="/documentation/overview/start/">
                      Docs
                    </a>
                    <div class="navbar-dropdown is-boxed">
                      <a class="navbar-item" href="/documentation/overview/start/">
                        Overview
                      </a>
                      <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                        Modifiers
                      </a>
                      <hr class="navbar-divider">
                      <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                        Elements
                      </a>
                      <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                        Components
                      </a>
                    </div>
                  </div>
                </div>
            
                <div class="navbar-end">
                  <div class="navbar-item">
                    <div class="field is-grouped">
                      <p class="control">
                      
                    
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

          <search-component/> <!-- SEARCH BAR *********************** -->
                      


    <!-- <img src="./assets/logo.png"> -->
    <h1>{{ msg }}</h1>

  </div>
</template> 

<script>
import searchComponent from "./components/searchComponent.vue";
import Login from "./components/Login.vue";
import DisplayResult from "./components/DisplayResult.vue";
export default {
  name: "app",
  data() {
    return {
      msg: "Search Artist Information"
    };
  },
  components: {
    searchComponent,
    Login,
    DisplayResult
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

/* .navbar{
  background-color: black;
} */
</style>
