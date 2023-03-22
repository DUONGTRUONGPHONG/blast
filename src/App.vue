<template>
  <div id="app">
    
    <SidebarTest></SidebarTest>
    
    <div class="sm:pl-[21%]">
      <HeaderTest v-if="this.$store.state.isLoggedIn===true"></HeaderTest>
      <router-view/>
    </div>
    
    
  </div>
</template>
<script>

import HeaderTest from './components/HeaderTest.vue';
import SidebarTest from './components/SidebarTest.vue';

export default {
    name: "HelloWorld",
    props: {},
    components: { SidebarTest, HeaderTest }
}
</script>
<style>
#app {
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}


</style>
