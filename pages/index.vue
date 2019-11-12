<template>
  <section>


  <b-container class="bv-example-row">

    <h1>Headline 1</h1>
      <b-row>
        <b-col>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et </b-col>
        <b-col>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et </b-col>
        <b-col>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et </b-col>
      </b-row>
      <b-row>
        <b-col class="margin">
           <nuxt-link to="/teasers">Hier</nuxt-link> gibt es einge Artikel.
        </b-col>
      </b-row>
  </b-container>
  <!-- <ImgFluid /> -->
  </section>
</template>

<script>
// import ImgFluid from '~/components/ImgFluid.vue'
//
// export default {
//   components: {
//     ImgFluid
//   }
// }
</script>

<style>


.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
