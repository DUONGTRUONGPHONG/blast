<template>
    <div class="mt-10 ">
        <img class="m-auto mb-6" src="../assets/logo.svg" alt="">
        <form novalidate @submit.prevent="register" class="flex items-center justify-center flex-col gap-4">
            <a-input placeholder="Email" type="email" v-model="email" required />
            <a-input-password placeholder="Password" v-model="password" />
            <button class="uppercase" type="submit">Sign Up</button>
        </form>
        <span>Already have an account? <router-link class="text-red-500 font-bold" to="/login">Sign in</router-link></span>
        <div v-if="errorMessage">{{ errorMessage }}</div>
    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
    data() {
        return {
            email: '',
            password: '',
            errorMessage: '',
        };
    },
    methods: {
        async register() {
            try {
                const auth = getAuth();
                await createUserWithEmailAndPassword(auth, this.email, this.password);
                this.$store.commit('SET_LOGGEDIN', true);
                this.$router.push('/');
            } catch (error) {
                this.errorMessage = error.message;
            }
        },
    },
};
</script>
