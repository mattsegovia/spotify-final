<template>
<div id="login">
    
</div>

</template>

<script>
    
    
    export default {
        name: 'login',        
        data () {
            return {
                authtoken: 'abcd',
                error: false
            }
        },
        methods: {
            submitTodo (description) {
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