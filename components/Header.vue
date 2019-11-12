<template>
  <!-- <b-nav align="center">
    <b-nav-item to="/" exact exact-active-class="active">About us</b-nav-item>
    <b-nav-item to="/" exact exact-active-class="active">Team</b-nav-item>
    <b-nav-item to="/teasers" exact exact-active-class="active">Test</b-nav-item>
    <b-nav-item to="/" exact exact-active-class="active">Contact</b-nav-item>
  </b-nav> -->

  <b-navbar toggleable="sm" type="light" variant="light">
    <b-container>
      <b-col md="2" class="home-link">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <nuxt-link to="/">
          <b-navbar-brand class="home-logo">HOME</b-navbar-brand>
        </nuxt-link>
      </b-col>
      <b-col md="10">
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav >
            <b-nav-item to="/" exact exact-active-class="active">About us</b-nav-item>
            <b-nav-item to="/infos" exact exact-active-class="active">News</b-nav-item>
            <b-nav-item to="/teasers" exact exact-active-class="active">Test</b-nav-item>
            <b-nav-item to="/" exact exact-active-class="active">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-col>
    </b-container>

  </b-navbar>

</template>
