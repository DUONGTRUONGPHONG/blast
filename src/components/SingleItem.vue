<script>
export default {
    data() {
        return {

        };
    },
    props: ["top ","image","name","tg","time"],
};

</script>

<template>
    <li class="flex justify-between items-center border-b-2 border-slate-300 pt-2 pb-2 last:border-b-0">
                <div class="flex gap-3 items-center">
                    <h3>{{ top }}</h3>
                    <div class="flex flex-col justify-between items-center">
                        <div class="">icon</div>
                        <span>1</span>
                    </div>
                    <img class="w-12 h-12 rounded-lg" :src="image" alt="">
                    <div class="flex flex-col">
                        <h4>{{name}}</h4>
                        <span>{{tg}}</span>
                    </div>
                </div>
                <span class="ml-28">{{time}}</span>
            </li>
</template>

<style scoped>

</style>
