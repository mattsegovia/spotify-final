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

                      <search-component/> <!-- SEARCH BAR *********************** -->
                      
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
           <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    </div>

    

</template> 

<script>
import searchComponent from './components/searchComponent.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    searchComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

h1, h2 {
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
