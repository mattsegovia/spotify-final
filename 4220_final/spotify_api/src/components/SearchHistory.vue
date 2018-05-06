<template>
    <div>
        <div class="modal" :class="{'is-active': openHistory}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title">Search History</p>
                <button class="delete" aria-label="close" @click="openHistory = false"></button>
                </header>
                <section class="modal-card-body">
                <!-- Content -->
                 <a class="panel-block" v-for="search in currentSearches" :key="currentSearches.indexOf(search)" @click="search_artist(search.searchQuery)">{{search.searchQuery}} - {{search.searchTime}}</a>
                </section>
                <footer class="modal-card-foot">
                <!-- <button class="button is-success">Save changes</button>
                <button class="button">Cancel</button> -->
                </footer>
            </div>
        </div>
        <a @click="openHistory = true" class="button is-success" href="#">Search History</a>
    </div>
</template>
<script>
export default {
  name: "SearchHistory",
  data() {
    return {
      query: "",
      queryType: "artist",
      queryImage: "https://image.flaticon.com/icons/svg/234/234450.svg",
      openHistory: false,
      artistInfo: {}
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    currentSearches() {
      return this.$store.state.searches;
    }
  },
  methods: {
    search_artist(querystring) {
        //Close search history
        this.openHistory = false
        //Update query in vuex store
        this.$store.state.query = querystring
        let vm = this;
        axios.get(`/search/?artist=${querystring}`).then(response => {
            vm.$store.state.artistInfo = response.data
            console.log(vm.artistInfo.artists);
        });
    }
  }
};
</script>
<style scoped>

</style>

