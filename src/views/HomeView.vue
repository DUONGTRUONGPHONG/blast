<template>
  <div>
    <button class="mb-6 mt-3" @click="manageUser">
      Hi <span class="text-[#f65656] font-bold">{{ user }}</span>
    </button>
    <SlideHero></SlideHero>
      <div class="mb-28 mt-16 mb:mx-auto mb:w-[90%]">
        <h2 class="mb-8 text-left">New Releases</h2>
          <AlbumTest >
          </AlbumTest>
      </div>

      <div class="mt-16 mb:mx-auto mb:w-[90%]">
        <h2 class="mb-8 text-left">Upcoming Events</h2>
          <EventTest
          ></EventTest>
      </div>
      <div class="mt-16 mb:mx-auto mb:w-[90%]">
        <h2 class="mb-8 text-left">News</h2>
        <NewsTest></NewsTest>
      </div>
  </div>
</template>
<style>
.phong::-webkit-scrollbar {
  width: 10px;
  background: rgb(239, 238, 238);
}

.phong::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background-color: #c1beb9;
}
</style>
<script>
import AlbumTest from "@/components/AlbumTest.vue";
import SlideHero from "@/components/SlideHero.vue";
import { getAuth } from "firebase/auth";
import EventTest from "../components/Event-test.vue";
import NewsTest from "../components/NewsTest.vue";
export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    const auth = getAuth();
    const user = auth.currentUser.displayName;
    this.user = user;
    // console.log(user)
  },
  methods: {
    manageUser() {
      this.$router.push("/user");
    },
  },
  computed: {},
  components: { SlideHero, EventTest, AlbumTest, NewsTest},
};
</script>

<!-- , Sidebar, Album, Event, SingleItem -->
