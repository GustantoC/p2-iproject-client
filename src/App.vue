<template>
  <div>
    <vue-particles color="#dedede" id="particles"></vue-particles>
    <Loading v-if="isLoading"></Loading>
    <div id="app">
      <div class="w-100">
        <b-button v-b-toggle.sidebar-footer class="mt-5" right>
          <b-icon icon="box"></b-icon>
        </b-button>
      </div>
      <SideBar></SideBar>
      <b-container>
        <router-view />
      </b-container>
    </div>
    <HFooter class="float-bottom mt-5"></HFooter>
  </div>
</template>

<script>
import SideBar from "@/components/Sidebar.vue";
import HFooter from "vue-hacktiv8-footer";
import Loading from "@/components/Loading.vue";

export default {
  components: {
    SideBar,
    HFooter,
    Loading,
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.$store.commit("SET_LOGGED_IN", true);
      this.$router.push("/");
    }
  },
};
</script>

<style>
#app {
  min-height: 100%;
  min-height: 100vh;
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
body {
  background-image: linear-gradient(to bottom, #DED9C4, #D0CAB2);
  background-repeat: no-repeat;
  background-size: auto;
  font-family: "Cabin", sans-serif;
}
#particles{
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.7;
  z-index: -1;
}
</style>
