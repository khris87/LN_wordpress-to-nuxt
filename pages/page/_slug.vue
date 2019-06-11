<template>
    <div>

        <h1>{{$store.getters.getPage($route.params.slug).title.rendered}}</h1>

        <div v-html="$store.getters.getPage($route.params.slug).content.rendered"></div>

        <small>
            {{$store.getters.getPage($route.params.slug).modified}}
        </small>
    </div>
</template>

<script>

    export default {
        name: "_slug",
    }

</script>

<style>

</style>