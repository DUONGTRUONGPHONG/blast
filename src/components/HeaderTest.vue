<script>
import { getAuth, signOut } from "firebase/auth";
export default {
    data() {
        return {
            user: null,
            show: false
        };
    },
    methods: {
        async logout() {
            try {
                const auth = getAuth();
                await signOut(auth)
                this.$store.commit('SET_LOGGEDIN', false)
                this.$router.push('/login')
                // console.log(this.$store.state.isLoggedIn)
            } catch (error) {
                console.log(error)
            }
        },
        showMenu() {
            this.show = !this.show
        }

    }

};

</script>

<template>
    <header class="flex justify-between mb:justify-center p-3">
        <div class="menu-mobile md:hidden flex gap-6 justify-between">
                <img  src="@/assets/logo.svg" alt="">
                <div class="  relative" @click="showMenu"><i class="fa-solid fa-bars"></i>
                    <ul class="flex flex-col gap-2 bg-white rounded-xl z-50 left-full max-w-[100px] p-3 font-bold absolute top-full"
                        :class="{ hidden: show }">
                        <li>About</li>
                        <li>Contacts</li>
                        <router-link to="/">Home</router-link>
                        <router-link to="/user">Profile</router-link>
                    </ul>
                </div>
                <button class="text-[#f65656]  font-bold" @click="logout">Logout <i
                        class="fa-solid fa-fw fa-right-to-bracket"></i></button>
        </div>
        <div class="flex gap-14 ">
            <ul class="flex gap-7 items-center font-bold mb:hidden">
                <li>About</li>
                <li>Contacts</li>
                <router-link to="/">Home</router-link>
                <router-link to="/user">Profile</router-link>
            </ul>
            <input
                class="p-3 rounded-3xl outline-none bg-gray-200 mb:hidden placeholder-gray-500 placeholder-opacity-100 pl-5"
                type="text" placeholder="Artist, track or podcast">
        </div>
        <div class="flex gap-7 items-center pr-5 mb:hidden">
            <div class="cursor-pointer"><i class="fa-solid fa-xl text-gray-400 fa-fw fa-shop"></i></div>
            <div class="cursor-pointer"><i class="fa-solid fa-xl text-gray-400 fa-fw fa-cart-shopping"></i></div>
            <!-- <router-link class="font-bold" to="/login" v-if="this.$store.state.isLoggedIn === false">Sign in <i
                            class="fa-solid fa-fw fa-right-to-bracket"></i></router-link> -->
            <button class="text-[#f65656] font-bold" @click="logout">Logout <i
                    class="fa-solid fa-fw fa-right-to-bracket"></i></button>

        </div>
    </header>
</template>

<style scoped></style>
