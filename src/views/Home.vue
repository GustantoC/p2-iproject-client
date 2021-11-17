<template>
  <div>
    <h1>this is the home page</h1>
    <b-row>
      <b-col>
        <MangaCard
          v-for="manga in mangas"
          :key="manga.title"
          :manga="manga"
        ></MangaCard>
      </b-col>
      <b-col>
        <AnimeCard
          v-for="anime in animes"
          :key="anime.title"
          :anime="anime"
        ></AnimeCard>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import MangaCard from "../components/MangaCard.vue";
import AnimeCard from "../components/AnimeCard.vue";

export default {
  name: "Home",
  components: {
    MangaCard,
    AnimeCard,
  },
  computed: {
    mangas() {
      return this.$store.state.mangas;
    },
    animes() {
      return this.$store.state.animes;
    },
  },
  created() {
    this.$store.dispatch("getTopMangas");
    this.$store.dispatch("getTopAnimeAiring");
  },
};
</script>
