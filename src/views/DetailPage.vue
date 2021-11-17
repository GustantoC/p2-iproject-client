<template>
  <div>
    <b-card class="mx-auto mt-5">
      <h4>{{ detailPage.title }}</h4>
      <h6>{{ detailPage.type }}</h6>
      <b-list-group horizontal class="mx-auto">
        <b-list-group-item v-for="genre in detailPage.genreList" :key="genre">{{
          genre
        }}</b-list-group-item>
      </b-list-group>
      <b-card
        :img-src="detailPage.imageUrl"
        img-width="200px"
        img-alt="Card image"
        img-left
        class="mb-3 mt-2"
      >
        Synopsis:
        <p class="left">{{ detailPage.synopsis }}</p>
      </b-card>
      <a
        href=""
        class="btn btn-primary"
        v-if="isLoggedIn"
        @click.prevent="addToMyList"
        >Add to my list</a
      >
    </b-card>
    <Disqus shortname="octacool" />
  </div>
</template>

<script>
import { Disqus } from "vue-disqus";
export default {
  name: "DetailPage",
  components: {
    Disqus,
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    detailPage() {
      return this.$store.state.detailPage;
    },
  },
  methods: {
    addToMyList() {
      this.$store.dispatch("addToMyList", {
        id: this.detailPage.id,
        type: this.detailPage.type,
      });
    },
  },
  created() {
    let { type, id } = this.$route.params;
    this.$store.dispatch("getDetail", { type, id });
  },
};
</script>

<style>
</style>