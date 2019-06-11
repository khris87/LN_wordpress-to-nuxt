<template>
    <div id="app">
        <v-app id="inspire">
            <navigation />

            <!-- Contenu-->

            <v-content>
                <nuxt />
            </v-content>

            <!-- Fin de Contenu-->

            <v-footer
                color="light"
                app
                inset=""
            >
                <span>&copy; 2019</span>
            </v-footer>
        </v-app>
    </div>
</template>

<script>
import Navigation from "../components/Navigation";
export default {
    components: {Navigation},

}
</script>

<style>
    .field {
        color: gray;
        font-size: 18px;
        text-transform: lowercase;
    }
    .wpcf7-form-control {
        border: 1px solid lightgray;
    }
    .wpcf7-submit[type="submit"] {
        width: 150px;
        height: 50px;
        font-size: 18px;
        background-color: #2e3f5f;
    }


</style>