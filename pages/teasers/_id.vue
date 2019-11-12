<template>  
<div>

  
  <a class="uk-button uk-button-primary uk-margin" @click="$router.go(-1)"><span uk-icon="arrow-left"></span> go back</a>

  <client-only>
  <div uk-grid>

      
      <div class="uk-width-1-3@m">
        <div v-for="(group, id) in teaser.groups" :key="id" class="uk-margin">
            <div class="uk-card uk-card-default">
                <div class="uk-card-media-top">
                    <img :src="'http://localhost:1337/' + group.image.url" alt="" />
                </div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">{{ group.name }} </h3>
                    <p>{{ group.description }}</p>
                </div>
                <div class="uk-card-footer">
                  // Doing nothing for the moment :)
                  <button class="uk-button uk-button-primary">Add to cart</button>
                </div>
            </div>
        </div>
      </div>
      <div class="uk-width-expand@m">
      </div>

  </div>

  </client-only>
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