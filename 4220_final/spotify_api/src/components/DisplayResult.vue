<template>
    <div id = "DisplayResult" class="">

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
    <img :src="item.images[0].url" class="image is-246x246" >
    </section>
    
    <footer class="modal-card-foot">

      <p class='is-primary'> Popularity score:</p>
      <section class = "section">
           
          <div class="container">
           
            <span> <img class = "image is-32x32"  v-if='item.popularity>80' src="https://image.flaticon.com/icons/svg/597/597893.svg">
            <img class = "image is-32x32"  v-else-if='item.popularity>50 && item.popularity<80' src="https://image.flaticon.com/icons/svg/34/34780.svg">
            <img class = "image is-32x32"  v-else src="https://image.flaticon.com/icons/svg/34/34812.svg">
            </span> 
          </div>
      </section>

    </footer>
  </div>
</div>
      </li>
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
    },
    closeModals(n) {
      //For multiple modals
      let modals = document.getElementsByClassName("modal");
      //i represents which modal. It will go through all modals

      modals[n].style.display = "none";
    }
  }
};
</script>

<style scoped>
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
</style>