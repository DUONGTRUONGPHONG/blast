<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            play: false,
            volume: 0.5,
            searchString: "",
            currentTime: 0,
            duration: 0
        };
    },
    props: [],
    methods: {
        handlePlay() {
            this.play = !this.play;
            if (this.play) {
                this.$refs.test.play();
            } else {
                this.$refs.test.pause();
            }
        },
        handleVolume() {
            return this.$refs.test.volume = this.volume
        },
        searchPlaylist() {
            this.playlist.forEach((track) => {
                if (this.searchString) {
                    if (!track.title.toLowerCase().includes(this.searchString.toLowerCase()) && !track.artist.toLowerCase().includes(this.searchString.toLowerCase())) {
                        track.display = false
                    } else {
                        track.display = true
                    }
                } else if (this.searchString === "" || this.searchString === null) {
                    track.display = true
                }
            })
        },
        updateTime() {
            this.currentTime = this.$refs.test.currentTime;
        },
        TuaTime() {
            this.$refs.test.currentTime = this.currentTime
        },
        updateDuration() {
            this.duration = this.$refs.test.duration;
        }
    },
    mounted() {
        const audio = this.$refs.test;
        audio.addEventListener('timeupdate', this.updateTime);
        audio.addEventListener('durationchange', this.updateDuration);
        audio.volume = this.volume
        // console.log(mapState({nameMusic: state => state.nameMusic}))
        console.log(this.$store.state.urlMusic)
    },
    computed: {
        ...mapState({
            nameMusic: state => state.nameMusic,
            urlMusic:state => state.url
        }),
        durationKey() {
            const seconds = Math.round(this.duration % 60);
            const minutes = Math.floor(this.duration / 60);
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        },
        currentTimeKey() {
            const seconds = Math.round(this.currentTime % 60);
            const minutes = Math.floor(this.currentTime / 60);
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        },
        // checkUrl() {
        //     return this.$store.state.urlMusic || require('../assets/audio/Ed Sheeran - Shape of You (Official Music Video).mp3');
        // },
    }

    // watch:{
    //     volume:function(newvalue){
    //         this.$refs.test.volume = newvalue
    //         // console.log(newvalue)
    //     }
    // }

};
</script>

<template>
    <div class="sidebar mb:hidden fixed top-0 left-0 h-full bg-white w-[278px] border-gray-400 border-r">
        <div class="w-full h-[70px] flex justify-start items-center px-4 border-b border-r border-gray-400">
            <img class="w-[100px] h-auto" src="../assets/logo.svg" alt="" />
        </div>
        <div class="px-6 py-3 overflow-y-scroll border-slate-400 border phong max-h-[288px]">
            <div class="flex justify-start">
                <ul class="flex flex-col gap-3 h-full text-left">
                    <li>
                        <i class="fa-solid fa-lg fa-fw fa-house text-gray-400 mr-2"></i><router-link
                            to="/">Home</router-link>
                    </li>
                    <li>
                        <i class="fa-solid fa-lg fa-fw fa-user text-gray-400 mr-2"></i>Artists
                    </li>
                    <li>
                        <i class="fa-solid fa-lg fa-fw fa-music text-gray-400 mr-2"></i>Release
                    </li>
                    <li>
                        <i class="fa-solid fa-lg fa-fw fa-calendar-days text-gray-400 mr-2"></i>Events
                    </li>
                    <li>
                        <i class="fa-solid fa-lg fa-fw fa-microphone text-gray-400 mr-2"></i>Podcasts
                    </li>
                    <li>
                        <i class="fa-solid fa-lg fa-fw fa-folder text-gray-400 mr-2"></i>Pages
                    </li>
                    <li>
                        <i class="fa-solid fa-lg fa-fw fa-cart-shopping text-gray-400 mr-2"></i>Store
                    </li>
                    <li><i class="fa-solid fa-lg fa-fw fa-file text-gray-400 mr-2"></i>News</li>
                </ul>
            </div>
        </div>
        <div class="px-6 py-3">
            <div class="flex justify-center items-center m-auto  my-4 w-[90px] h-[90px] rounded-2xl bg-gray-200">
                <i class="fa-solid fa-music text-gray-600  text-4xl mr-2"></i>
            </div>
            <h4 class="text-center font-bold mb-2">{{ nameMusic }}</h4>
            <div class="flex gap-4 justify-center">
                <div class="preve"><i class="fa-solid text-gray-600 fa-lg fa-backward-step"></i></div>
                <audio :src="urlMusic" ref="test"></audio>
                <button @click="handlePlay" class="playpause">
                    <span v-show="play"><i class="fa-solid text-gray-600 fa-lg fa-pause"></i></span>
                    <span v-show="!play"><i class="fa-solid text-gray-600 fa-lg fa-play"></i></span>
                </button>
                <div class="next"><i class="fa-solid text-gray-600 fa-lg fa-forward-step"></i></div>
            </div>
            <div class="time flex items-center gap-2">
                <!-- <div class="w-[80%] h-1 bg-gray-400 rounded-xl"></div> -->
                {{ currentTimeKey }}
                <!-- <input @change="TuaTime" v-model="currentTime" type="range" max="100" min="0" step="1"> -->
                <a-slider @change="TuaTime" v-model="currentTime" :tip-formatter="null" :max="duration" id="test" />
                <span>{{ durationKey }}</span>
            </div>
            <div class="flex justify-between  ">
                <div class="flex items-center gap-2 phong"><a-icon class="text-xl" type="sound" />
                    <!-- <input class="w-[15px] hover:w-full duration-500" @change="handleVolume" v-model="volume" type="range"
                                max="1" min="0" step="0.1"> -->
                    <a-slider @change="handleVolume" v-model="volume" :max="1" id="volume" :step="0.1" />
                </div>
                <div class="flex items-center"><i class="fa-solid fa-lg fa-list"></i></div>
            </div>
        </div>
        <button>
            <a href="@/assets/audio/Lac-Rhymastic-2729471.mp3" target="_blank" download="Lac.mp3">
                <a-button type="primary" shape="circle" icon="download" />
            </a>
        </button>


    </div>
</template>

<style scoped></style>
