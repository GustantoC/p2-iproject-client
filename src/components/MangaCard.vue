<template>
  <div>
    <b-card
      style="width: 15rem"
      :img-src="manga.imageUrl"
      img-alt="Manga Image"
      img-top
    >
      <b-card-text style="text-align: left">
        <h5>{{ manga.title }}</h5>
        <p>Score: <span >{{ manga.score }}</span></p>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "MangaCard",
  props: ["manga"],
};
</script>

<style>
</style>