<script>

export default {
    data() {
        return {
            events: [
                {
                    date: "March 14, 2021",
                    time: "8:00 pm",
                    name: "Sorry Babushka",
                    address: "1 East Plumb Branch St.Saint Petersburg, FL 33702",
                    bg: require("@/assets/events/event1.jpg"),
                },
                {
                    date: "March 16, 2021",
                    time: "7:00 pm",
                    name: "Big Daddy",
                    address: "71 Pilgrim Avenue Chevy Chase, MD 20815",
                    bg: require("@/assets/events/event2.jpg"),
                },
                {
                    date: "March 23, 2021",
                    time: "9:30 pm",
                    name: "Rocky Pub",
                    address: "514 S. Magnolia St. Orlando, FL 32806",
                    bg: require("@/assets/events/event3.jpg"),
                },
            ],
        };
    },

};

</script>

<template>
    <!-- <div  class=" text-white  bg-cover bg-center flex flex-col justify-center p-5 rounded-xl">
            <button class="text-black inline-block max-w-[120px] px-4 py-2 bg-white rounded-3xl mb-16"> Buy ticket</button>
            <div class="mb-7">
                <span>{{ date }}</span> <br>
                <span>{{time}}</span>
            </div>
            <h3 class="mb-4">{{name}}</h3>
            <p>{{address}}</p>
        </div> -->
    <div class="flex gap-8 mb:flex-col">
        <div class="relative w-[358px] h-[326px]" v-for="(event, index) in events" :key="index">
        <img class="w-ful h-full rounded-xl" :src="event.bg" alt="">
        <div class="flex flex-col text-left text-white absolute w-full h-full top-0 left-0 justify-center p-5 rounded-xl">
            <button class=" text-gray-800 inline-block max-w-[120px] font-bold px-4 py-2 bg-white rounded-3xl mb-16"> Buy
                ticket</button>
            <div class="mb-5">
                <span class="text-lg">{{ event.date }}</span> <br>
                <span class="opacity-80">{{ event.time }}</span>
            </div>
            <h3 class="mb-3 text-white">{{ event.name }}</h3>
            <p>{{ event.address }}</p>
        </div>
    </div>
    </div>
</template>

<style scoped></style>
