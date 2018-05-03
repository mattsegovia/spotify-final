<template>
    <div class="field has-addons has-addons-centered">
        <p class="control">
            <span class="select navbar-item has-dropdown is-hoverable is-dark">

                <a class="navbar-link" href="/documentation/overview/start/">
                <!-- Search for --><img src="../assets/song.svg" height="100" width="50">
                </a>
                    <div class="navbar-dropdown is-boxed">                                            
                        <a @click="specifySearch('song')" class="navbar-item">
                            <!-- Song --> <img src="../assets/song.svg" height="100" width="100">
                        </a>

                        <a @click="specifySearch('artist')" class="navbar-item">
                            <!-- Artist --> <img src="../assets/artist.svg" height="100" width="100">
                        </a>

                        <a @click="specifySearch('album')" class="navbar-item">
                           <!-- Album --> <img src="../assets/album.svg" height="100" width="100">
                        </a>
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