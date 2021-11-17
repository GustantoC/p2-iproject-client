<template>
  <div>
    <b-card class="mx-auto mt-5">
      <h4>Left and Right (or Start and End)</h4>
      <b-card
        img-src="https://placekitten.com/300/300"
        img-alt="Card image"
        img-left
        class="mb-3"
      >
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of
          the card's content.
        </b-card-text>
      </b-card>
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
};
</script>

<style>
</style>