<template>
  <div>
    <b-sidebar
      id="sidebar-footer"
      aria-label="Sidebar with Footer"
      no-header
      backdrop
      right
    >
      <template #footer="{ hide }">
        <div class="d-flex bg-dark text-light align-items-right px-3 py-2">
          <b-button size="sm" @click="hide">Close</b-button>
        </div>
      </template>
      <div class="p-3 py-2">
        <h4>Octacool</h4>
        <nav class="mb-3">
          <b-nav vertical>
            <b-nav-item href="" @click="hide"
              ><router-link to="/">Home</router-link></b-nav-item
            >
            <b-nav-item href="" @click="hide"
              ><router-link to="/login">Login</router-link></b-nav-item
            >
          </b-nav>
        </nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style>
</style>