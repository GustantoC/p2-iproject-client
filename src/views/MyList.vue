<template>
  <div>
    <h1>My List</h1>
    <div class="row">
      <div class="col">
        <h2>Mangas</h2>
        <div class="d-flex justify-content-start flex-wrap">
          <MangaCard
            v-for="manga in myMangas"
            :key="manga.title"
            :manga="manga"
          ></MangaCard>
        </div>
      </div>
      <div class="col">
        <h2>Animes</h2>
        <div class="d-flex justify-content-start flex-wrap">
          <AnimeCard
            v-for="anime in myAnimes"
            :key="anime.title"
            :anime="anime"
          ></AnimeCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MangaCard from "@/components/MangaCard.vue";
import AnimeCard from "@/components/AnimeCard.vue";

export default {
  name: "MyList",
  components: {
    MangaCard,
    AnimeCard,
  },
  computed: {
    myMangas() {
      return this.$store.state.myMangas;
    },
    myAnimes() {
      return this.$store.state.myAnimes;
    },
  },
  created() {
    this.$store.dispatch("startLoading");
    this.$store.dispatch("getMyList");
  },
};
</script>

<style>
</style>