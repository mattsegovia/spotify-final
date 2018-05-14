<template>
    <div class="search">
        <div class="field has-addons ">
            <p class="control">
                <span class="select navbar-item has-dropdown is-hoverable is-dark">

                    <a class="navbar-link">
                    <!-- Search for --><img :src=queryImage height="100" width="50">

                    </a>    
                        <!-- ************* NOTE: Will only search for Artists ************* --> 
                        <div class="navbar-dropdown is-boxed">  
                            <!-- for some reason the vue bind scr attribute has a different "root (starting location)" than the default html src attribute -->
                            <a @click="specifySearch('artist','https://image.flaticon.com/icons/svg/148/148722.svg')" class="navbar-item">
                                <!-- Song --> <img src="https://image.flaticon.com/icons/svg/148/148722.svg" height="100" width="100">
                            </a>

                            <a @click="specifySearch('artist', 'https://image.flaticon.com/icons/svg/234/234450.svg')" class="navbar-item">
                                <!-- Artist --> <img src="https://image.flaticon.com/icons/svg/234/234450.svg" height="100" width="100">
                            </a>

                            <a @click="specifySearch('artist', 'https://image.flaticon.com/icons/svg/140/140258.svg')" class="navbar-item">
                            <!-- Album --> <img src="https://image.flaticon.com/icons/svg/140/140258.svg" height="100" width="100">
                            </a>
                        </div>
                </span>
            </p>
            <p class="control is-expanded">
                <input v-model="query" class="input" type="text" :placeholder="placeholderText" @keyup.enter="search_artist(query)">
            </p>
            <p class="control">
                <a class="button is-success"  href = "#" v-on:click="search_artist(query)">
                Search
                </a>
            </p>

        </div>

        <p v-show="isFetchingResult">Searching for {{ queryType }}...</p>

        <p v-show="!isFetchingResult">
            <DisplayResult :query="query" 
            :artistInfo="artistInfo"/>
        </p>

    </div>
</template>

<script>
    import DisplayResult from './DisplayResult.vue'

    const socket = io()

    export default {
        name: 'Search',        
        data () {
            //queryImage: '@/assets/album.svg'
            return {
                query: '',
                queryType: 'artist',
                queryImage: 'https://image.flaticon.com/icons/svg/234/234450.svg',
                isFetchingResult: false
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
                this.isFetchingResult = true
                //Upate searches through WebSocket
                socket.emit('add-search', this.query)
                let vm = this
                axios.get(`/search/?artist=${querystring}`)
                    .then(response => {
                        vm.isFetchingResult = false
                        vm.$store.state.artistInfo = response.data
                        console.log(vm.artistInfo.artists)
                    })
                //Clear query
                this.query = ''
            }
        },
        computed: {
            placeholderText () {
                return `Search for ${this.queryType}...`
            },
            artistInfo () {
                return this.$store.state.artistInfo
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
    /* border: 1px solid gainsboro;
    display: block; */
}
.title, .subtitle {
    text-align: center !important;
}
</style>