<template>
  <div>

      // Search articles
      <form class="">
          <span ></span>
          <input class="" v-model="query" type="search" placeholder="Search...">
      </form>


      <div class="teaser-content" v-for="teasers in filteredList" v-bind:key="teasers">
          <b-col md="6">
              <div class="teaser-img">
                  <img :src="'http://localhost:1337/' + teasers.image.url" alt="">
                  <canvas width="200" height="200"></canvas>
              </div>
                <h3 class="">{{ teasers.headline }}</h3>
                <p>{{ teasers.content }}</p>
                // Link to the restaurant using router-link
                <router-link :to="{ name: 'teasers', params: { id: teasers.id }}" tag="a" class="">See dishes
                </router-link>
          </b-col>
      </div>

      <!-- // If no restaurants have been found
      <div class="" v-if="filteredList.length == 0">
       <img src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png" height="200" width="200">
       <p>No restaurants found</p>
     </div> -->

  </div>
</template>

<style scoped>
  .teaser-content {

  }

  .teaser-img {

  }
</style>

<script>
// Import the restaurants query
import teasersQuery from '~/apollo/queries/teaser/teasers'

export default {
  data() {
    return {
      // Initialize an empty restaurants variabkle
      teasers: [],
      query: ''
    }
  },
  apollo: {
    teasers: {
      prefetch: true,
      query: teasersQuery
    }
  },
  computed: {
    // Search system
    filteredList() {
      return this.teasers.filter(teaser => {
        return teaser.headline.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  }
}
</script>
