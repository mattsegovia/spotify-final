<template>
    <div class="field has-addons has-addons-centered">
        <p class="control">
            <span class="select navbar-item has-dropdown is-hoverable is-dark">

                <a class="navbar-link">
                <!-- Search for --><img :src=queryType height="100" width="50">
                </a>
                    <div class="navbar-dropdown is-boxed">                                            
                        <a @click="specifySearch('song','../../../dist/song.svg')" class="navbar-item">
                            <!-- Song --> <img src="../../dist/song.svg" height="100" width="100">
                        </a>

                        <a @click="specifySearch('artist', '../../../dist/artist.svg')" class="navbar-item">
                            <!-- Artist --> <img src="../../dist/artist.svg" height="100" width="100">
                        </a>

                        <a @click="specifySearch('album', '../../../dist/album.svg')" class="navbar-item">
                           <!-- Album --> <img src="../../dist/album.svg" height="100" width="100">
                        </a>
                    </div>
            </span>
        </p>
        <p class="control">
            <input class="input" type="text" placeholder="Search...">
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
                queryType: '../../../dist/song.svg'
            }
        },
        methods: {
            specifySearch(category, src) {
                //store.specifySearch()
                console.log(category)
                this.queryType = src;
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