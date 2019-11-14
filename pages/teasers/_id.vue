<template>
<div>
<b-container class="groups">

  <a class="uk-button uk-button uk-margin" @click="$router.go(-1)"><span uk-icon="arrow-left"></span> go back</a>

  <client-only>
    <div uk-grid>
        <b-col md="6">
          <div v-for="(group, id) in teaser.groups" :key="id" class="uk-margin">
              <div class="uk-card uk-card-default">
                  <div class="group-img">
                      <img :src="'https://strapi-pa-heroku.herokuapp.com/' + group.image.url" alt="" />
                  </div>
                  <div class="uk-card-body">
                      <h3 class="uk-card-title">{{ group.name }} </h3>
                      <p>{{ group.description }}</p>
                  </div>
              </div>
          </div>
        </b-col>
    </div>
  </client-only>
</b-container>
</div>
</template>

<script>
import teaserQuery from '~/apollo/queries/teaser/teaser'

export default {
  data() {
    return {
      teaser: Object
    }
  },
  apollo: {
    teaser: {
      prefetch: true,
      query: teaserQuery,
      variables () {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>
