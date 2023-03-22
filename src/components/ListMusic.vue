

<template>
    <div class="mr-8 mt-8 mb:mx-auto mb:w-[90%]">
    <h2 class="text-left mb-3">Name Music</h2>
        <div>
            <div class="flex justify-end mb-3"><a-button @click="showModal"> Thêm </a-button></div>
        <a-modal v-model="visible" :footer="null" title="Thêm bài hát ">

                <div>
                    <a-form-model layout="inline" :model="Form" @submit="postMusic" @submit.native.prevent>
                        <a-form-model-item>
                            <a-input v-model="Form.id" placeholder="Id"></a-input>
                        </a-form-model-item>
                        <a-form-model-item>
                            <a-input v-model="Form.title" type="text" placeholder="Title"></a-input>
                        </a-form-model-item>
                        <a-form-model-item>
                            <a-input v-model="Form.artist" type="text" placeholder="Artist"></a-input>
                        </a-form-model-item>
                        <a-form-model-item>
                            <a-input v-model="Form.duration" type="text" placeholder="Duration"></a-input>
                        </a-form-model-item>
                        <a-form-model-item>
                            <a-button type="primary" html-type="submit" :disabled="Form.id === null || Form.title === null">
                                Submit
                            </a-button>
                        </a-form-model-item>
                    </a-form-model>
                </div>
            </a-modal>
        </div>
        <div class="flex p-5 rounded-3xl mb:flex-col border border-gray-300 w-full md:max-h-[430px] gap-8">
            <div class="md:max-w-[30%]">
                <img class="w-[290px] h-[290px] mb:mx-auto rounded-xl mb-3" src="../assets/covers/cover10.jpg" alt="" />
                <div class="flex justify-between mb-3">
                    <div>
                        <i class="fa-solid fa-music mr-2"></i><span class="opacity-70">10 tracks</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-headphones mr-2"></i><span class="opacity-70">19 503</span>
                    </div>
                </div>
                <button class="w-full h-9 rounded-full text-white bg-red-500">
                    BUY ALBUM
                </button>
            </div>
            <div class="overflow-y-scroll w-full md:max-w-[70%] pr-3">
                <div  @click="plays(name1,url1)"
                    class="flex justify-between items-center border-t cursor-pointer first:border-t-0">
                    <div class="flex items-center">
                        <audio ref="audio" src="https://drive.google.com/uc?id=1pOiJwgIw9UJvsRogFzdU1yY-z2isHnDN"></audio>
                        <div
                            class="flex justify-center items-center m-auto my-4 w-[48px] h-[48px] rounded-lg bg-gray-200 mr-2">
                            <i class="fa-solid fa-music text-gray-600"></i>
                        </div>
                        <div class="text-left">
                            <h4>1.Lac</h4>
                            <span class="opacity-70 text-sm">Rymastic</span>
                        </div>
                    </div>
                    <span>3:58</span>
                </div>
                <div  @click="plays(name2,url2)"
                    class="flex justify-between items-center border-t cursor-pointer first:border-t-0">
                    <div class="flex items-center">
                        <audio ref="audio" src="https://drive.google.com/uc?id=1bPU-WrXiFGXd1I2_vcmgPGLERBYYQOib"></audio>
                        <div
                            class="flex justify-center items-center m-auto my-4 w-[48px] h-[48px] rounded-lg bg-gray-200 mr-2">
                            <i class="fa-solid fa-music text-gray-600"></i>
                        </div>
                        <div class="text-left">
                            <h4>2.Shape of you</h4>
                            <span class="opacity-70 text-sm">Ed Sheeran</span>
                        </div>
                    </div>
                    <span>4:23</span>
                </div>
             
            </div>
        </div>
        <div class="text-left my-10 md:max-w-[60%]">
            <h3 class="mb-5">About new albums</h3>
            <p class="opacity-80 text-justify">
                There are many variations of passages of Lorem Ipsum available, but the
            majority have alteration in some form, by injected humour, or randomised
            words which don't look even slightly believable.It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
        </p>
    </div>

    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            list: [],
            loading: false,
            play: false,
            visible: false,
            name1:"Lac",
            url1:"https://drive.google.com/uc?id=1bPU-WrXiFGXd1I2_vcmgPGLERBYYQOib",
            name2:"Shape of you",
            url2:"https://drive.google.com/uc?id=1pOiJwgIw9UJvsRogFzdU1yY-z2isHnDN",
            Form: {
                id: null,
                title: null,
                artist: null,
                duration: null,
            },
        };
    },
    async mounted() {
        try {
            const response = await axios.get("http://localhost:3000/playlist");
            this.list = response.data;
            this.loading = true;
            // console.log(this.list)
        } catch (error) {
            console.log(error);
        }
    },
    // computed: {
    //     currentSongUrl() {
    //         return this.playlist[this.currentSongIndex].url;
    //     },
    // },
    methods: {
        async postMusic() {
            try {
                await axios.post("http://localhost:3000/playlist", {
                    id: this.Form.id,
                    title: this.Form.title,
                    artist: this.Form.artist,
                    duration: this.Form.duration,
                });
                const response = await axios.get("http://localhost:3000/playlist");
                this.list = response.data;
                this.visible=false
            } catch (error) {
                console.log(error);
            }
        },
        async editItem(item) {
            try {
                await axios.put("http://localhost:3000/playlist/" + item.id, {
                    title: this.title,
                    artist: this.artist,
                });
                item.title = this.title;
                item.artist = this.artist;
            } catch (error) {
                console.log(error);
            }
        },
        plays(song,url) {
            
            this.$store.commit("SET_MUSIC",{song,url})
        },
        showModal() {
            this.visible = true;
        },
        // this.$refs.audio.play();
        // this.play = !this.play;
        // if (this.play) {
        //     this.$refs.audio.play();
        // } else {
        //     this.$refs.audio.pause();
        // }
    },
    // playSong(song) {
    //     this.currentSongIndex = this.playlist.indexOf(song);
    //     this.$refs.audioPlayer.play();
    // },
    // playNextSong() {
    //     if (this.currentSongIndex < this.playlist.length - 1) {
    //         this.currentSongIndex++;
    //         this.$refs.audioPlayer.play();
    //     } else {
    //         this.currentSongIndex = 0;
    //     }
    // },

    components: {},
};
</script>
<style scoped>
::-webkit-scrollbar {
    width: 4px;
    background: #e2e2e2;
    border-radius: 8px;
}

::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
}
</style>
