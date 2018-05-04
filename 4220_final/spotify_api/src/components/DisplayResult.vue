<template>
    <div id = "DisplayResult" class="field has-addons has-addons-centered">
      
    </div>

</template>

<script>
    export default {
        name: 'DisplayResult',        
        data () {
            //queryImage: '@/assets/album.svg'
            return {
                query: '',
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
.DisplayResult {
    margin: 10px 20px !important;
    padding: 10px;
    border: 1px solid gainsboro;
    display: block;
}
.title, .subtitle {
    text-align: center !important;
}
</style>