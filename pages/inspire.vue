<template>
<!--
    <v-expansion-panel popout="true" focusable="true">
        <v-expansion-panel-content
        v-for="posts in $store.state.data"
        :key="posts.id"
        >
            <template v-slot:actions>
                <v-avatar size="64">
                  <img src="https://i.pinimg.com/280x280_RS/40/15/5c/40155c4f5dd91d0707710ebe71e1e101.jpg">
                </v-avatar>
            </template>
            <template v-slot:header>
                <div>
                    <div class="headline">{{posts.title.rendered}}</div>
                    <span class="grey&#45;&#45;text">{{posts.modified}}</span>
                    <v-card-actions>
                        <v-icon>share</v-icon>
                        <nuxt-link to="`post/` + posts.slug">Explore</nuxt-link>
                        <v-spacer></v-spacer>
                        <v-icon>star_border</v-icon>
                        <v-icon>star_border</v-icon>
                        <v-icon>star_border</v-icon>
                        <v-icon>star_border</v-icon>
                        <v-icon>star_border</v-icon>
                    </v-card-actions>
                </div>
            </template>

            <v-card>
                <v-card-text v-html="posts.excerpt.rendered"></v-card-text>
            </v-card>
      </v-expansion-panel-content>
  </v-expansion-panel>
-->

</template>

<script>


  export default {
  }
</script>