<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="card" style="">
                        <img class="card-img-top" src="//via.placeholder.com/100x50" alt="Imagem de capa do card">
                        <div class="card-body text-left" style="padding: 0.5rem">
                            <p class="card-text">{{ getUser.name }}</p>
                            <p class="card-text">{{ getUser.email }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'Home',
    components: {
        // HelloWorld
    },
    computed: {
        ...mapGetters([
            'getUser'
        ])
    }
}
</script>

<style scoped>
    .card-body {padding: 0.5rem}
    .card-body .card-text {margin-bottom: 0rem;}
</style>
