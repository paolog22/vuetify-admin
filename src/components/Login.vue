<template>
    <div class="login">
        <div class="form-box">
            <div class="logo">
                <img src="https://albasolucoes.com/wp-content/uploads/2017/09/cropped-logo-inicial.png">
            </div>
            <v-form v-model="valid" class="login-form">
                <v-text-field
                        label="Login"
                        v-model="email"
                        :rules="emailRules"
                        required
                ></v-text-field>
                <v-text-field
                        label="Password"
                        required
                ></v-text-field>
            </v-form>
            <div>
                <router-link to="/forgot-password">Forget password</router-link>
            </div>
            <div class="text-lg-right">
                <v-btn @click="submit" :disabled="!valid">Login</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                valid: false,
                name: '',
                email: '',
                emailRules: [
                    (v) => !!v || 'E-mail is required',
                    (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ]
            }
        },
        methods:{
            submit(){

            }
        }
    }
</script>

<style scoped>
    .form-box {
        width: 450px;
        margin: 10% auto;
        background-color: #fff;
        padding: 30px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 7px;
    }

    .logo{
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 20px;
    }

    .container {
        align-content: center;
    }

    .login {
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 3px;
        min-height: 100%;
        background-image: url("https://images.unsplash.com/photo-1437422061949-f6efbde0a471?auto=format&fit=crop&w=2250&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D");
    }
</style>
