<template>
    <div>
        <v-layout>
            <v-card
                v-for="category in $store.getters.postsByToolCategory(7)"
                :key="category.id"
            >
                <v-card-title class="title">{{category.title.rendered}}</v-card-title>
                <v-card-text v-html="category.content.rendered"></v-card-text>
            </v-card>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: "Outils"
    }
</script>

<style scoped>

</style>