<template>
  <div id="app">

    <!-- Navbar -->
    <b-navbar toggleable="md" type="dark" variant="danger">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand :to="{ name: 'home' }">NavBar</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav>
            <b-nav-item :to="{ name: 'home' }">Home</b-nav-item>
            <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
            <b-nav-item :to="{ name: 'grid' }">Grid</b-nav-item>
            <b-nav-item :to="{ name: 'cards' }">Cards</b-nav-item>
            <b-nav-item :to="{ name: 'form' }">Form</b-nav-item>
            <b-nav-item :to="{ name: 'vuelidate' }">Vuelidate</b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-container>
    </b-navbar>

    <!-- Container -->
    <b-container>
      <router-view/>
    </b-container>

  </div>
</template>