<template>
    <div class="field has-addons has-addons-centered">
        <p class="control">
            <span class="select navbar-item has-dropdown is-hoverable is-dark">

                <a class="navbar-link">
                <!-- Search for --><img :src=queryImage height="100" width="30">
               
                </a>
                    <div class="navbar-dropdown is-boxed">  
                        <!-- for some reason the vue bind scr attribute has a different "root (starting location)" than the default html src attribute -->
                        <a @click="specifySearch('song','http://icons.iconarchive.com/icons/iynque/ios7-style/1024/Music-icon.png')" class="navbar-item">
                            <!-- Song --> <img src="http://icons.iconarchive.com/icons/iynque/ios7-style/1024/Music-icon.png" height="50" width="50">
                        </a>

                        <a @click="specifySearch('artist', 'https://icon-icons.com/icons2/659/PNG/512/microphone_01_icon-icons.com_60036.png')" class="navbar-item">
                            <!-- Artist --> <img src="https://icon-icons.com/icons2/659/PNG/512/microphone_01_icon-icons.com_60036.png" height="50" width="50">
                        </a>

                        <a @click="specifySearch('album', 'http://icons.iconarchive.com/icons/iconsmind/outline/256/CD-icon.png')" class="navbar-item">
                           <!-- Album --> <img src="http://icons.iconarchive.com/icons/iconsmind/outline/256/CD-icon.png" height="50" width="50">
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
            //queryImage: '@/assets/album.svg'
            return {
                queryType: 'song',
                queryImage: 'http://icons.iconarchive.com/icons/iynque/ios7-style/1024/Music-icon.png'
            }
        },
        methods: {
            specifySearch(category, src) {
                //store.specifySearch()
                this.queryType = category;  //category that will determine the type of search        (for backend)
                this.queryImage = src;      //source of image that will display in the dropdown list (for frontend)
                console.log('type: '+ this.queryType);
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