import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/scripts/axios'
import swal from "sweetalert2";
import Router from '../router'

const Toast = swal.mixin({
  toast: true,
  position: 'top-start',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    isLoading: false,
    mangas: [],
    animes: [],
    myMangas: [],
    myAnimes: [],
    detailPage: {}
  },
  mutations: {
    SET_LOGGED_IN: (state, payload) => {
      state.isLoggedIn = payload
    },
    SET_MANGAS: (state, payload) => {
      state.mangas = payload
    },
    SET_ANIMES: (state, payload) => {
      state.animes = payload
    },
    SET_ISLOADING: (state, payload) => {
      state.isLoading = payload
    },
    SET_DETAIL_PAGE: (state, payload) => {
      state.detailPage = payload
    },
    SET_MY_MANGAS: (state, payload) => {
      state.myMangas = payload
    },
    SET_MY_ANIMES: (state, payload) => {
      state.myAnimes = payload
    }
  },
  actions: {
    loginHandler(context, payload) {
      context.commit("SET_ISLOADING", true)
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token)
          context.commit("SET_LOGGED_IN", true)
          context.commit("SET_ISLOADING", false)
          Router.push("/")
          Toast.fire({
            icon: 'success',
            title: 'Login Successful',
          })
        })
        .catch(({ response }) => {
          context.commit("SET_ISLOADING", false)
          Toast.fire({
            icon: 'error',
            title: 'Error!',
            text: response.data.message
          })
        })
    },
    registerHandler(context, payload) {
      if (payload.password !== payload.confirmPassword) {
        Toast.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Password does not match!'
        })
      } else {
        delete payload.confirmPassword
        context.commit("SET_ISLOADING", true)
        axios({
          method: 'POST',
          url: '/register',
          data: payload
        })
          .then(() => {
            context.commit("SET_ISLOADING", false)
            Router.push("/login")
            Toast.fire({
              icon: 'success',
              title: 'Register Successful',
            })
          })
          .catch(({ response }) => {
            context.commit("SET_ISLOADING", false)
            Toast.fire({
              icon: 'error',
              title: 'Error!',
              text: response.data.message
            })
          })
      }
    },
    logoutHandler(context) {
      localStorage.clear()
      context.commit("SET_LOGGED_IN", false)
      Router.push("/")
      Toast.fire({
        icon: 'success',
        title: 'Logout Successful',
      })
    },
    getTopMangas(context, payload) {
      payload = payload || { title: '' }
      axios({
        method: 'GET',
        url: '/getManga',
        params: payload
      })
        .then(({ data }) => {
          context.commit("SET_MANGAS", data)
        })
        .catch(({ response }) => {
          Toast.fire({
            icon: 'error',
            title: 'Error!',
            text: response.data.message
          })
        })
    },
    getTopAnimeAiring(context) {
      axios({
        method: 'GET',
        url: '/getAnime/airing',
      })
        .then(({ data }) => {
          context.commit("SET_ANIMES", data)
          context.commit("SET_ISLOADING", false)
        })
        .catch(({ response }) => {
          context.commit("SET_ISLOADING", false)
          Toast.fire({
            icon: 'error',
            title: 'Error!',
            text: response.data.message
          })
        })
    },
    getTopAnimeUpcoming(context) {
      axios({
        method: 'GET',
        url: '/getAnime/upcoming',
      })
        .then(({ data }) => {
          context.commit("SET_ANIMES", data)
          context.commit("SET_ISLOADING", false)
        })
        .catch(({ response }) => {
          context.commit("SET_ISLOADING", false)
          Toast.fire({
            icon: 'error',
            title: 'Error!',
            text: response.data.message
          })
        })
    },
    getDetail(context, payload) {
      let { type, id } = payload
      context.commit("SET_ISLOADING", true)
      axios({
        method: 'GET',
        url: `/getDetail/${type}/${id}`,
      })
        .then(({ data }) => {
          context.commit("SET_DETAIL_PAGE", data)
          context.commit("SET_ISLOADING", false)
        })
        .catch(({ response }) => {
          context.commit("SET_ISLOADING", false)
          Toast.fire({
            icon: 'error',
            title: 'Error!',
            text: response.data.message
          })
        })
    },
    startLoading(context) {
      context.commit("SET_ISLOADING", true)
    },
    stopLoading(context) {
      context.commit("SET_ISLOADING", false)
    },
    addToMyList(context, payload) {
      let { type, id } = payload
      axios({
        method: 'POST',
        url: `/addToMyList/${type}/${id}`,
        headers: { access_token: localStorage.getItem("access_token") }
      })
        .then(() => {
          Toast.fire({
            icon: 'success',
            title: 'Successfully added to your list',
          })
        })
        .catch(({ response }) => {
          Toast.fire({
            icon: 'error',
            title: 'Error!',
            text: response.data.message
          })
        })
    },
    getMyList(context) {
      axios({
        method: 'GET',
        url: `/myList`,
        headers: { access_token: localStorage.getItem("access_token") }
      })
        .then(({ data }) => {
          context.commit("SET_MY_MANGAS", data.myMangas)
          context.commit("SET_MY_ANIMES", data.myAnimes)
          context.commit("SET_ISLOADING", false)
        })
        .catch(({ response }) => {
          context.commit("SET_ISLOADING", false)
          Toast.fire({
            icon: 'error',
            title: 'Error!',
            text: response.data.message
          })
        })
    },
    searchAnime(context,payload){
      axios({
        method: 'GET',
        url: '/getAnime/airing',
        params: payload
      })
        .then(({ data }) => {
          context.commit("SET_ANIMES", data)
          context.commit("SET_ISLOADING", false)
        })
        .catch(({ response }) => {
          context.commit("SET_ISLOADING", false)
          Toast.fire({
            icon: 'error',
            title: 'Error!',
            text: response.data.message
          })
        })
    }
  },
  modules: {
  }
})
