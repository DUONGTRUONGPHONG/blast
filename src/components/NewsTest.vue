<script>

export default {
    data() {
        return {
            news:[
                {
                    title:"Foo Fighters share new live version of ‘No Son Of Mine’",
                    time:"3 hours ago",
                    src:require("@/assets/posts/1.jpg"),
                    cmt:"33",
                    type:"Music",
                },
                {
                    title:"Tom Grennan ‘breaks the internet’ as fans overload servers during virtual gig",
                    time:"3 hours ago",
                    src:require("@/assets/posts/2.jpg"),
                    cmt:"18",
                    type:"Music",
                },
                {
                    title:"Why do the Golden Globes always get it so wrong?",
                    time:"3 hours ago",
                    src:require("@/assets/posts/3.jpg"),
                    cmt:"20",
                    type:"Music",
                },
            ]
        };
    }
};

</script>

<template>
    <div class="flex gap-6 text-left mb:flex-col">
        <div class=" drop-shadow-sm w-[358px] h-[452px]" v-for="(item,index) in news" :key="index">
        <img class="rounded-xl" :src="item.src" alt="">
        <div class="p-4">
            <button class="mb-4 bg-gray-500 px-3 py-1 rounded-full text-white ">{{item.type}}</button>
            <h3 class="h-24 mb-6 text-2xl">{{ item.title }}</h3>
            <div class="flex justify-between mt-6">
                <span class="text-sm opacity-80"><i class="fa-solid fa-clock pr-1"></i>{{item.time}}</span>
                <span class="text-sm opacity-80"><i class="fa-solid fa-comment pr-1"></i>{{ item.cmt }}</span>
            </div>
        </div>
    </div>
    </div>
</template>

<style scoped></style>
