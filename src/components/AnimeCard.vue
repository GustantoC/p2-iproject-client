<template>
  <div>
    <b-card
      style="width: 15rem"
      :img-src="anime.imageUrl"
      img-alt="Manga Image"
      img-top
    >
      <b-card-text style="text-align: left">
        <h5>{{ anime.title }}</h5>
        <p>Score: <span >{{ anime.score }}</span></p>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "AnimeCard",
  props: ["anime"],
};
</script>

<style>
</style>