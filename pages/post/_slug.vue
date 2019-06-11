<template>
    <div>
        <v-img
            :src="$store.getters.getPost($route.params.slug).fimg_url"
            aspect-ratio="3"
            gradient="to top right, rgba(208,227,195,0.3), rgba(208,227,204,1)"
            class="align-baseline"
        >
            <v-card-title class="display-4 white--text">{{$store.getters.getPost($route.params.slug).title.rendered}}</v-card-title>
        </v-img>
        <v-container class="mt-5">
            <div v-html="$store.getters.getPost($route.params.slug).content.rendered"></div>

            <small>
                {{$store.getters.getPost($route.params.slug).modified}}
            </small>
        </v-container>


    </div>

</template>

<script>

    export default {
        name: "_slug",
    }
</script>

<style scoped>

</style>