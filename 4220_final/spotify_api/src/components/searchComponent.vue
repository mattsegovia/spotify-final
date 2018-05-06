<template>
    <div class="search">
        <div class="field has-addons ">
            <p class="control">
                <span class="select navbar-item has-dropdown is-hoverable is-dark">

                    <a class="navbar-link">
                    <!-- Search for --><img :src=queryImage height="100" width="50">
                
                    </a>
                        <div class="navbar-dropdown is-boxed">  
                            <!-- for some reason the vue bind scr attribute has a different "root (starting location)" than the default html src attribute -->
                            <a @click="specifySearch('song','https://image.flaticon.com/icons/svg/148/148722.svg')" class="navbar-item">
                                <!-- Song --> <img src="https://image.flaticon.com/icons/svg/148/148722.svg" height="100" width="100">
                            </a>

                            <a @click="specifySearch('artist', 'https://image.flaticon.com/icons/svg/234/234450.svg')" class="navbar-item">
                                <!-- Artist --> <img src="https://image.flaticon.com/icons/svg/234/234450.svg" height="100" width="100">
                            </a>

                            <a @click="specifySearch('album', 'https://image.flaticon.com/icons/svg/140/140258.svg')" class="navbar-item">
                            <!-- Album --> <img src="https://image.flaticon.com/icons/svg/140/140258.svg" height="100" width="100">
                            </a>
                        </div>
                </span>
            </p>
            <p class="control is-expanded">
                <input v-model="query" class="input" type="text" placeholder="Search...">
            </p>
            <p class="control">
                <a class="button is-success"  href = "#" v-on:click="search_artist(query)">
                Search
                </a>
            </p>

        </div>

        <p>
            <DisplayResult :query="query" 
            :artistInfo="artistInfo"/>
        </p>
    </div>
</template>

<script>
    import DisplayResult from './DisplayResult.vue'

    export default {
        name: 'Search',        
        data () {
            //queryImage: '@/assets/album.svg'
            return {
                query: 'lil',
                queryType: 'artist',
                queryImage: 'https://image.flaticon.com/icons/svg/234/234450.svg',
                artistInfo: {}
            }
        },
        methods: {
            specifySearch(category, src) {
                //store.specifySearch()
                this.queryType = category;  //category that will determine the type of search        (for backend)
                this.queryImage = src;      //source of image that will display in the dropdown list (for frontend)
                console.log('type: '+ this.queryType);
            },
            search_artist(querystring) {
                let vm = this
                axios.get(`/search/?artist=${querystring}`)
                    .then(response => {
                        vm.artistInfo = response.data
                        console.log(vm.artistInfo.artists)
                    })
            }
        },
        components: {
            DisplayResult
        }
    }
</script>

<style scoped>
.search {
    margin: 10px 20px !important;
    padding: 10px;
}
.title, .subtitle {
    text-align: center !important;
}
</style>