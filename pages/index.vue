<template>
  <v-container fluid class="pa-0">
    <v-layout row wrap>
      <v-flex xs12 md3></v-flex>
      <v-flex
              xs11
              md8
              column
              justify-center
              align-center
      >
        <v-expansion-panel focusable>
          <v-expansion-panel-content
                  v-for="post in posts"
                  :key="post.id"
          >

            <template v-slot:actions>
              <v-avatar size="64">
                <img src="https://i.pinimg.com/280x280_RS/40/15/5c/40155c4f5dd91d0707710ebe71e1e101.jpg">
              </v-avatar>
            </template>
            <template v-slot:header>
              <div>
                <div class="headline">{{post.title.rendered}}</div>
                <span class="grey&#45;&#45;text">{{post.modified}}</span>
                <v-card-actions>
                  <v-icon>share</v-icon>
                  <nuxt-link :to="'/post/' + post.slug" class="ml-3 accent--text title font-weight-bold">Explore</nuxt-link>
                  <v-spacer></v-spacer>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                </v-card-actions>
              </div>
            </template>

            <v-card>
              <v-card-text v-html="post.excerpt.rendered"></v-card-text>
            </v-card>

          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-flex>
      <v-flex xs1 class="timeline"></v-flex>
    </v-layout>
    <v-img
            :src="require('@/assets/bandeau.png')"
            height="150"

    >
      <v-layout pa-2 column fill-height class="white--text">
        <v-flex shrink>
          <span class="display-2">Ma chaîne Youtube</span>
        </v-flex>
      </v-layout>
    </v-img>
    <v-layout row wrap>
        <v-flex class="my-5">
          <outils></outils>
        </v-flex>
    </v-layout>
    <v-img
            :src="require('@/assets/bandeau_bas.png')"
            height="150"
    >
      <v-layout pa-2 column fill-height class="white--text">
        <v-flex shrink>
          <span class="display-2">Mes Formations</span>
        </v-flex>
      </v-layout>
    </v-img>

    <v-layout class="justify-center" row column>
{{categories}}

    </v-layout>



  </v-container>


</template>

<script>
  import {mapState} from 'vuex'
  import Outils from "../components/Outils";

export default {
  components: {Outils},
  computed: mapState({
      posts: state => state.posts,
      categories: state => state.categories
    })
}
</script>

<style scoped>

  div.v-avatar {
    position: absolute;
    top: 0;
    right: -66px;
    margin: 28px;
  }
  div.v-avatar img {
    border: 8px solid #d0e3cc;
  }
  a {
    text-decoration: none;
    color: #000;
    margin: 0 20px;
  }
  .timeline {
    border-left: 8px solid #d0e3cc;
  }
</style>