<template>
  <div>
    <a href="" @click.prevent="goDetail">
      <b-card
        style="width: 12rem"
        :img-src="manga.imageUrl"
        img-alt="Manga Image"
        img-top
      >
        <header class="card-header">
          <h5>{{ manga.title }}</h5>
        </header>
      </b-card>
    </a>
  </div>
</template>

<script>
export default {
  name: "MangaCard",
  props: ["manga"],
  methods: {
    goDetail() {
      this.$router.push({
        name: "DetailPage",
        params: {
          type: "manga",
          id: this.manga.id,
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