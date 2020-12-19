<template>
    <form @submit.prevent="submit($event)">
        <div class="login-page">
            <div class="card">
                <div class="card-header">Login</div>
                <div class="card-body">
                    <div class="form-group">
                        <input required  type="text" v-model="form.email" class="form-control" placeholder="E-mail" />
                    </div>
                    <div class="form-group">
                        <input required type="password" placeholder="Senha" class="form-control" v-model="form.password" />
                    </div>
                    <button class="btn btn-primary w-100">Entrar</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
/* eslint-disable */

import { services  } from  '@/config/http'
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
    data: () => ({
        form: {
            email: '',
            password: ''
        }
    }),

    created() {
        // Executa a Action e Chama Mutation e altera o State.User
        // this.actionSetUser({ name: 'Wagner G. de Castro', email: 'wagner@gmail.com' })
    },

    mounted() {
        // console.log('token', this.$store.state)
        // console.log('user', this.$store.state.user)
    },

    methods: {
        ...mapActions(['actionSetUser','actionDoLogin']),
        // async submit() {
        //   try {
        //     await this.ActionDoLogin(this.form);

        //     this.$router.push({ name: "home" });
        //   } catch (err) {
        //     alert(err.data ? err.data.message : "Não foi possível fazer login");
        //   }
        // },
        
        async submit(e) {

            /**
             * https://www.twilio.com/blog/5-ways-to-make-http-requests-in-node-js-using-async-await
             */

            // console.log(this.form.email)
            // console.log(this.form.password)

            /** 
             * Sem Async Wait, sem As action do Store Vuex
             */
            // this.$http.post(this.$http.options.root+'/auth/login', this.form).then(response => {
            //     console.log(response.body)
            //     this.actionDoLogin(response.body)
            // }, response => {
            //     // error callback
            //     console.log(response)
            // })

            /** 
             * Com Async Wait, sem As action do Store Vuex
             */
            try {
                await this.actionDoLogin(this.form)
                // this.$router.push({ name: 'home' })
            } catch (error) {
                // console.log(error);
                alert(error.data ? error.data.message : 'Não foi possível fazer login')
            }
           
        }
    }
}
</script>


<style scoped lang="scss">
    .login-page {
        height: calc(100vh - 84px);
        display: flex;
        align-items: center;
        justify-content: center;
        .card {
            width: 360px;
        }
    }
</style>
