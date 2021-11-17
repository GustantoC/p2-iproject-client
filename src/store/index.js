import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/scripts/axios'
import swal from "sweetalert2";
import Router from '../router'

const Toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    mangas: [],
    animes: []
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
    }
  },
  actions: {
    loginHandler(context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token)
          context.commit("SET_LOGGED_IN", true)
          Router.push("/")
          Toast.fire({
            icon: 'success',
            title: 'Login Successful',
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
    registerHandler(context, payload) {
      if (payload.password !== payload.confirmPassword) {
        Toast.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Password does not match!'
        })
      } else {
        delete payload.confirmPassword
        console.log(payload)
        axios({
          method: 'POST',
          url: '/register',
          data: payload
        })
          .then(() => {
            Router.push("/login")
            Toast.fire({
              icon: 'success',
              title: 'Register Successful',
            })
          })
          .catch(({ response }) => {
            Toast.fire({
              icon: 'error',
              title: 'Error!',
              text: response.data.message
            })
          })
      }
    },
    getTopMangas(context) {
      axios({
        method: 'GET',
        url: '/top50/manga/manga',
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
        url: '/top50/anime/airing',
      })
        .then(({ data }) => {
          context.commit("SET_ANIMES", data)
        })
        .catch(({ response }) => {
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
        url: '/top50/anime/upcoming',
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
    }
  },
  modules: {
  }
})
