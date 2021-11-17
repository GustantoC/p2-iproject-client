<template>
  <div>
    <b-card class="mx-auto mt-5" style="max-width: 40vh">
      <template #header>
        <h4 class="mb-0">Register Page</h4>
      </template>
      <b-form @submit.prevent="onSubmit">
        <b-form-group id="input-group-1" label="Username:" label-for="input-1">
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

        <b-form-group
          id="input-group-2"
          label="Confirm password:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.confirmPassword"
            type="password"
            placeholder="Password again"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" class="mt-2">Submit</b-button>
      </b-form>

      <template #footer>
        <em
          >Have an account?
          <router-link to="/login">Login</router-link> here</em
        >
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data: function () {
    return {
      form: {
        username: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("registerHandler", {
        username: this.form.username,
        password: this.form.password,
        confirmPassword: this.form.confirmPassword,
      });
    },
  },
};
</script>

<style>
</style>