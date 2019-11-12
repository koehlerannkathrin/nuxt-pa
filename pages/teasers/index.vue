<template>
  <div>
    <b-col md="8">
        // Search articles
        <form class="search-field">
            <span ></span>
            <input class="" v-model="query" type="search" placeholder="Search...">
        </form>

        <!-- <div class="teaser-content" v-for="teaser in filteredList" :key="teaser"> -->
          <div class="teaser-content" v-for="(teaser, id) in filteredList" :key="id">
          <div class="teaser-img">
              <img :src="'http://localhost:1337/' + teaser.image.url" alt="">
              <!-- <canvas width="200" height="200"></canvas> -->
          </div>
            <h3 class="">{{ teaser.headline }}</h3>
            <p>{{ teaser.content }}</p>
            // Link to the teasers using router-link
            <router-link :to="{ name: 'teasers-id', params: { id: teaser.id }}" tag="a" class="">See acrticles </router-link>
        </div>
      </b-col>
      <!-- // If no teasers have been found
      <div class="" v-if="filteredList.length == 0">
       <img src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png" height="200" width="200">
       <p>No teasers found</p>
     </div> -->

  </div>
</template>

<script>
// Import the teasers query
import teasersQuery from '~/apollo/queries/teaser/teasers'

export default {
  data() {
    return {
      // Initialize an empty teasers variabkle
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
