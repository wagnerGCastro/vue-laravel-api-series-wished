<template>
    <form @submit.prevent="submit($event)">
        <div class="login-page">
            <div class="card">
                <div class="card-header">Login</div>
                <div class="card-body">
                    <div class="form-group">
                        <input required  type="email" v-model="form.email" class="form-control" placeholder="E-mail" />
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

// import { mapActions } from "vuex";

export default {
    data: () => ({
        form: {
            email: '',
            password: ''
        }
    }),
    methods: {
        // ...mapActions("auth", ["ActionDoLogin"]),
        // async submit() {
        //   try {
        //     await this.ActionDoLogin(this.form);

        //     this.$router.push({ name: "home" });
        //   } catch (err) {
        //     alert(err.data ? err.data.message : "Não foi possível fazer login");
        //   }
        // },
        
        submit(e) {

            /**
             * https://www.twilio.com/blog/5-ways-to-make-http-requests-in-node-js-using-async-await
             */

            console.log(this.form.email)
            console.log(this.form.password)

            /** 
             * Sem Async Wait
             */
            this.$http.post(this.$http.options.root+'/auth/login', this.form).then(response => {
                console.log(response.body)
            }, response => {
                // error callback
                console.log(response)
            })

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
