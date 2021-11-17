<template>
  <div id="app">
    <b-button v-b-toggle.sidebar-footer>
      <b-icon icon="arrow-right"></b-icon>
    </b-button>
    <SideBar></SideBar>
    <b-container>
      <router-view />
    </b-container>
    <HFooter class="float-bottom"></HFooter>
  </div>
</template>

<script>
import SideBar from "@/components/Sidebar.vue";
import HFooter from "vue-hacktiv8-footer";
export default {
  components: {
    SideBar,
    HFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
