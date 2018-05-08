<template>
  <div id="app">

    <nav class="navbar is-transparent is-dark">
              <div class="navbar-brand">
                <a class="navbar-item" href="https://www.spotify.com/us/" w>
                  <img src="./assets/spotify_logo_green.png" width="112" height="28">
                </a>
            
              <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                  <a class="navbar-item">
                    Featured Playlists
                  </a>
                  <a class="navbar-item">
                    New Releases
                  </a>
                </div>
    </nav>

    <br />
    <h1 class="title">{{ description }}</h1>
    <search-component /> <!-- SEARCH BAR *********************** -->                   
    <SearchHistory/>
  </div>
</template> 

<script>
import searchComponent from "./components/searchComponent.vue";
import SearchHistory from "./components/SearchHistory";
import Login from "./components/Login.vue";
import DisplayResult from "./components/DisplayResult.vue";
export default {
  name: "app",
  data() {
    return {
      description: "Search for an artist, song, or album!"
    };
  },
  components: {
    searchComponent,
    SearchHistory,
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
