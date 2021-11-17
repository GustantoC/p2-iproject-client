<template>
  <div>
    <h1>OctaCool</h1>
    <form class="form">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="searchQuery"
      />
      <button
        class="btn btn-success my-2 my-sm-0"
        type="submit"
        @click.prevent="searchHome"
      >
        Search
      </button>
    </form>
    <div class="row">
      <div class="col">
        <h2>Mangas</h2>
        <section class="card-list">
          <MangaCard
            v-for="manga in mangas"
            :key="manga.title"
            :manga="manga"
          ></MangaCard>
        </section>
      </div>
      <div class="col">
        <h2>Animes</h2>
        <section class="card-list">
          <AnimeCard
            v-for="anime in animes"
            :key="anime.title"
            :anime="anime"
          ></AnimeCard>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MangaCard from "@/components/MangaCard.vue";
import AnimeCard from "@/components/AnimeCard.vue";
import swal from "sweetalert2";

const Toast = swal.mixin({
  toast: true,
  position: "top-start",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

export default {
  name: "Home",
  components: {
    MangaCard,
    AnimeCard,
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    mangas() {
      return this.$store.state.mangas;
    },
    animes() {
      return this.$store.state.animes;
    },
  },
  methods: {
    searchHome() {
      if (this.searchQuery.length < 3) {
        Toast.fire({
          icon: "error",
          title: "Search query error!",
          text: "minimum length is 3",
        });
      } else {
        this.$store.dispatch("startLoading");
        this.$store.dispatch("getTopMangas", { title: this.searchQuery });
        this.$store.dispatch("searchAnime", { title: this.searchQuery });
      }
    },
  },
  created() {
    this.$store.dispatch("startLoading");
    this.$store.dispatch("getTopMangas");
    this.$store.dispatch("getTopAnimeAiring");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap");

a {
  color: white;
  text-decoration: none;
}

body {
  font-family: "DM Mono", monospace;
}

.card-list {
  display: flex;
  overflow-x: scroll;
}

.card-list::-webkit-scrollbar {
  width: 10px;
  height: 20px;
}

.card-list::-webkit-scrollbar-thumb {
  background-color: rgb(223, 100, 0);
  border-radius: 10px;
  box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 1),
    inset -2px -2px 2px rgba(0, 0, 0, 1);
}

.card {
  min-width: 250px;
  padding: 1rem;
  border-radius: 16px;
  background: #ffab4c;
  box-shadow: -1rem 0 3rem rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  margin: 1rem;
  scroll-snap-align: start;
  clear: both;
  position: relative;
}

.card:focus-within ~ .card,
.card:hover ~ .card {
  transform: translateX(130px);
}

.card:hover {
  transform: translateY(-1rem);
}
.card:not(:first-child) {
  margin-left: -130px;
}

.card-header {
  margin-bottom: auto;
}

.card-header h5 {
  font-size: 18px;
  margin: 0.25rem 0 auto;
  text-decoration: none;
  color: inherit;
  border: 0;
  display: inline-block;
  cursor: pointer;
}

.card-header h5:hover {
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  text-shadow: none;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
