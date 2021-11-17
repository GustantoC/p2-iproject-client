<template>
  <div>
    <a href="" @click.prevent="goDetail">
      <b-card
        style="width: 12rem"
        :img-src="anime.imageUrl"
        img-alt="Manga Image"
        img-top
      >
        <header class="card-header">
          <h5>{{ anime.title }}</h5>
        </header>
      </b-card>
    </a>
  </div>
</template>

<script>
export default {
  name: "AnimeCard",
  props: ["anime"],
  methods: {
    goDetail() {
      this.$router.push({
        name: "DetailPage",
        params: {
          type: "anime",
          id: this.anime.MalId,
        },
      });
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
a.hover {
  text-decoration: none;
}
</style>