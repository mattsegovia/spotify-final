<template>
<div id="login">
    <!-- No longer needed -->    
</div>

</template>

<script>

    export default {
        name: 'login',        
        data () {
            return {
                authtoken: '',
                error: false
            }
        },
        methods: {
            login(description) {
                if (description === '') return this.error = true;

                this.authtoken = ''
                this.error = false;
            }
        }

    }
</script>

<style scoped>
.login_{
    margin-bottom: 40px;
}
</style>