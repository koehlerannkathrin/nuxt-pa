<template>
  <b-container class="container-content">
    <b-col md="8">
        // Search articles
        <form class="search-field">
            <span ></span>
            <input class="" v-model="query" type="search" placeholder="Search...">
        </form>
          <div class="teaser-content" v-for="(teaser, id) in filteredList" :key="id">
          <div class="teaser-img">
              <img :src="'https://strapi-pa-heroku.herokuapp.com/' + teaser.image.url" alt="">
          </div>
            <h3 class="">{{ teaser.headline }}</h3>
            <p>{{ teaser.content }}</p>
            // Link to the teasers using router-link
            <router-link :to="{ name: 'teasers-id', params: { id: teaser.id }}" tag="a" class="">See acrticles </router-link>
        </div>
      </b-col>
  </b-container>
</template>

<script>
// Import the teasers query
import teasersQuery from '~/apollo/queries/teaser/teasers'

export default {
  data() {
    return {
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
    // Search-function
    filteredList() {
      return this.teasers.filter(teaser => {
        return teaser.headline.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  }
}
</script>
