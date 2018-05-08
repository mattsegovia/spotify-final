<template>
    <div id = "DisplayResult" class="">
        <br>
        
        <p class="is-pulled-left is-clearfix is-paddingless is-marginless"></p>

<!-- HERE ADD THE V-FOR, to make a button modal everytime--> 
<ul id="example-1">
  <li v-for="artists in artistInfo" :key="artists" >
      <ul>
      <li v-for="(item,index) in artists.items" :key="item" >
        <button v-on:click="openModals(index)" class="button is-large"> 
    {{item.name}} 
</button>
<div class="modal" id="modals">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{{item.name}}</p>
      <button v-on:click="closeModals(index)" class="delete" aria-label="close"></button>
    </header>

    <section class="modal-card-body">
    <!-- <img :src="item.images[0].url" class="artistPic image is-246x246"> -->
    <img v-if="item.images.length > 0" :src="item.images[0].url" class="artistPic image is-246x246" >
    <!-- Show default image -->
    <img v-else src="https://image.flaticon.com/icons/svg/174/174872.svg" class="artistPic image is-246x246" >
    </section>
    
    <!-- <footer class="modal-card-foot">
      <section>
          <image v-if="item.popularity < 80" src="https://image.flaticon.com/icons/svg/597/597893.svg" />
      </section>
    </footer> -->

    <footer class="modal-card-foot">    
      <div class="container"> 
           <span> Popularity score: 
            <img class = "image is-32x32 has-text-centered"  v-if='item.popularity>80' src="https://image.flaticon.com/icons/svg/597/597893.svg">
            <img class = "image is-32x32"  v-else-if='item.popularity>50 && item.popularity<80' src="https://image.flaticon.com/icons/svg/34/34780.svg">
            <img class = "image is-32x32"  v-else src="https://image.flaticon.com/icons/svg/34/34812.svg">
            </span> 
          
            <br>
            <p> Folowers: {{item.followers.total}} </p> 
            <br>
            <p>  Genres: {{item.genres.toString()}} </p>
            <br>
            <a :href="item.external_urls.spotify" >Artist Profile</a>
      </div>     
    </footer>

  </div>
</div>
      </li>
      </ul>
  </li>
</ul>

    </div> <!-- End of root element -->

</template>

<script>
import searchComponent from "./searchComponent.vue";
export default {
  name: "DisplayResult",
  data() {
    return {
      queryString: "",
      artistInformation: {}
    };
  },
  props: ["query", "artistInfo"],
  components: {
    searchComponent
  },
  methods: {
    search_artist(query) {},
    //One Modal
    openModal() {
      //ADD coDE HERE
      document.getElementById("modals").classList.add("is-active");
    },
    closeModal() {
      document.getElementById("modals").classList.remove("is-active");
    },
    openModals(n) {
      //ADD coDE HERE
      let modal = document.getElementsByClassName("modal");
      modal[n].style.display = "block";
      // modal[n].addClass('is-active')
    },
    closeModals(n) {
      //For multiple modals
      let modals = document.getElementsByClassName("modal");

      modals[n].style.display = "none";
      // modal[n].removeClass('is-active')
    }
  }
};
</script>

<style scoped>
.image {
  margin: auto;
}
.modal {
  display: none;
  background-color: rgba(26, 25, 25, 0.678);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}

#modal {
  display: none;
  background-color: rgba(22, 22, 22, 0.678);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}
.button {
  margin: 50px auto;
}
.artistPic {
  width: 70%;
  height: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
}
</style>