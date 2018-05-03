<template>
    <!-- <div class="row">
        <label for="search">Search on Spotify</label>
        <input id="search" type="text" class="input is-rounded" v-model="query" placeholder="Search...">
        <button @click="getQuery()" type="button" class="button is-success">Search</button>
    </div> -->


    <div class="field has-addons has-addons-centered">
        <p class="control">
            <span class="select navbar-item has-dropdown is-hoverable">
                
                
                
                
                <!-- <span class="select">
                <select>
                    <option data-thumbnail="../assets/song.svg"></option>
                    <option style="background-image:url('../assets/song.svg');"></option>
                    <option style="background-image:url('../assets/song.svg');"></option>
                </select> -->




                <!-- <select id="select" class="col" v-model="currentCategory">
                    <option><img src="../assets/song.svg">a</option>
                </select> -->




                <a class="navbar-link" href="/documentation/overview/start/">
                <!-- Search for --><img src="../assets/song.svg" height="100" width="50">
                </a>
                <!-- section tag...onclickup @click(fun('song')) ??? -->
                    <!-- if you get rid of all labels then pictures disappear -->
                    <div class="navbar-dropdown is-boxed">
                        <!-- test works!!!!! -->
                        <section @click="specifySearch('song')"> 
                        <a class="navbar-item">
                            <!-- Song --> <img src="../assets/song.svg" height="100" width="100">
                        </a>
                        </section>

                        <section @click="specifySearch('artist')"> 
                        <a class="navbar-item">
                            <!-- Artist --> <img src="../assets/artist.svg" height="100" width="100">
                        </a>
                        </section>

                        <section @click="specifySearch('album')"> 
                        <a class="navbar-item">
                           <!-- Album --> <img src="../assets/album.svg" height="100" width="100">
                        </a>
                        </section>
                    </div>

            </span>
        </p>
        <p class="control">
            <input v-model="query" class="input" type="text" placeholder="Search...">
        </p>
        <p class="control">
            <a class="button is-primary">
            Search
            </a>
        </p>
    </div>

</template>

<script>
    export default {
        name: 'Search',        
        data () {
            return {
                queryType: '../assets/'
            }
        },
        methods: {
            specifySearch(category) {
                //store.specifySearch()
                console.log(category)
            }
        }
    }
</script>

<style scoped>
.search {
    margin: 10px 20px !important;
    padding: 10px;
    border: 1px solid gainsboro;
    display: block;
}
.title, .subtitle {
    text-align: center !important;
}
</style>