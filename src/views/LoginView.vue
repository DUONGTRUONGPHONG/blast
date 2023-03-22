<template>
    <div class="mt-10 ">
        <img class="m-auto mb-6" src="../assets/logo.svg" alt="">
        <form novalidate @submit.prevent="login" class="flex items-center justify-center flex-col gap-4">
            <div class="relative w-full mb-2">
                <a-input placeholder="Email" type="email" v-model.trim="$v.email.$model" />
                <div class="error absolute text-red-500 top-full left-[50%] translate-x-[-50%]"
                    v-if="!$v.email.required && $v.email.$dirty">Vui lòng nhập email </div>
            </div>
            <div class="relative w-full mb-2">
                <!-- <a-input placeholder="" type="password"  /> -->
                <a-input-password placeholder="Password" v-model.trim="$v.password.$model"/>
                <div class="error absolute top-full left-[50%] text-red-500 translate-x-[-50%]" v-if="!$v.password.required && $v.password.$dirty">Vui lòng nhập mật khẩu </div>
                <div class="error absolute top-full left-[50%] text-red-500 translate-x-[-50%]" v-if="!$v.password.minLength">Mật khẩu phải có {{ $v.password.$params.minLength.min }} kí tự </div>
            </div>
            <a-spin v-if="$v.password.$invalid||$v.email.$invalid">
                <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
            </a-spin>
            <button v-else class="uppercase" type="submit">Sign In</button>
        </form>
        <span>Don't have an account? <router-link class="text-red-500 font-bold" to="/register">Sign up</router-link></span>
        <div v-if="errorMessage">{{ errorMessage }}</div>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { required, minLength } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            email: '',
            password: '',
            errorMessage: '',
        }
    },
    validations: {
        password: {
            required,
            minLength: minLength(4)
        },
        email: {
            required,
            minLength: minLength(4)
        },
    },
    components: {
        // 
    },
    methods: {
        async login() {
            try {
                const auth = getAuth();
                await signInWithEmailAndPassword(auth, this.email, this.password)
                // const user =  auth.currentUser;
                this.$store.commit('SET_LOGGEDIN', true)
                this.$router.push('/')
                // console.log(user)
            } catch (error) {
                if (error.code === "auth/user-not-found") {
                    this.errorMessage = "Email không tồn tại "
                }
            }
        }
    }
}

</script>
