<template>
  <div>
    <b-card class="mx-auto mt-5" 
    style="max-width: 40vh;">
      <template #header>
        <h4 class="mb-0">Login Page</h4>
      </template>
      <b-form @submit.prevent="onSubmit">
        <b-form-group
          id="input-group-1"
          label="Username:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.username"
            type="text"
            placeholder="Enter username"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" class="mt-2">Submit</b-button>
      </b-form>

      <template #footer>
        <em>Don't have an account? <router-link to="/register">Register</router-link> here</em>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data: function () {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("loginHandler", {
        username: this.form.username,
        password: this.form.password,
      });
    },
  },
};
</script>

<style>
</style>