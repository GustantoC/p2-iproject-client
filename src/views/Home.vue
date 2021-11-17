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
        <div class="d-flex justify-content-start flex-wrap">
          <MangaCard
            v-for="manga in mangas"
            :key="manga.title"
            :manga="manga"
          ></MangaCard>
        </div>
      </div>
      <div class="col">
        <h2>Animes</h2>
        <div class="d-flex justify-content-start flex-wrap">
          <AnimeCard
            v-for="anime in animes"
            :key="anime.title"
            :anime="anime"
          ></AnimeCard>
        </div>
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
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
})

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
            icon: 'error',
            title: 'Search query error!',
            text: 'minimum length is 3'
          })
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
