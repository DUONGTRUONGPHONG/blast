
<template>
    <div class="flex flex-wrap gap-[30px] gap-y-20 max-w-[1166px]">
        <div class="w-[164px] h-40" v-for="(album, index) in albums" :key="index">
            <img class="rounded-xl w-full h-full" :src="album.src" alt="" />
            <router-link to="/listmusic" class="text-base font-bold cursor-pointer tracking-wider mt-2">{{ album.title }}</router-link>
            <br>
            <span class="text-sm">{{ album.desc }}</span>
            
            <br>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            albums: [
                {
                
                    title: "Adventure",
                    src: require("@/assets/covers/cover1.jpg"),
                    desc: "AudioPizza",
                },
                {
                
                    title: "Epic Motivational",
                    src: require("@/assets/covers/cover2.jpg"),
                    desc: "AudioPizza",
                },
                {
                
                    title: "Upbeat Rock",
                    src: require("@/assets/covers/cover3.jpg"),
                    desc: "AudioPizza",
                },
                {
                
                    title: "Ambient Pop",
                    src: require("@/assets/covers/cover4.jpg"),
                    desc: "AudioPizza",
                },
                {
                
                    title: "Righteous",
                    src: require("@/assets/covers/cover5.jpg"),
                    desc: "AudioPizza",
                },
                {
                
                    title: "Girls In The Hood",
                    src: require("@/assets/covers/cover6.jpg"),
                    desc: "AudioPizza",
                },
            ],
        };
    },
    created() {
    },
};
</script>
<style scoped></style>
