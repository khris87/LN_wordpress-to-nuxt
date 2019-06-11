<template>

    <div>
        <v-navigation-drawer
            v-model="drawer"
            app
            dark
            class="accent"
        >
            <v-list>
                <v-list-tile
                        v-for="link in links"
                        :key="link.text"
                        router
                        :to="link.route"
                        v-if="link.text !== 'Blog'"
                >
                    <v-list-tile-action>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>{{link.text}}</v-list-tile-title>
                </v-list-tile>

                <v-list-group
                        v-else
                        prepend-icon="account_circle"
                >
                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-title>{{link.text}}</v-list-tile-title>
                        </v-list-tile>
                    </template>

                    <v-list-tile
                            v-for="(category, i) in $store.state.categories"
                            :key="i"
                            router
                            :to="'/category/' + category.slug"
                            @click=""
                    >
                        <v-list-tile-title>{{ category.name }}</v-list-tile-title>
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>

            </v-list>
        </v-navigation-drawer>
        <v-toolbar
                color="white"
                height="100"
                fixed
                app
        >
            <v-toolbar-side-icon
                    flat
                    color="ln_favs_trois"
                    large
                    @click.stop="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-toolbar-title class="primary--text display-1">Blog</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <img src="../assets/cameleon.png" height="100" width="160"/>
            </v-toolbar-items>
        </v-toolbar>
    </div>

</template>

<script>
    export default {
        name: "Navigation",
        data: () => ({
            drawer: false,
            links: [
                {icon:'home', text:'Home', route:'/'},
                {icon:'receipt', text:'Blog', route:'/post'},
                {icon:'work', text:'Formations', route:'/'},
                {icon:'store', text:'Boutique', route:'/'},
                {icon:'thumb_up', text:'Ligne éditoriale', route:'/'},
                {icon:'fingerprint', text:'Contact', route:'/page/contact'},
                {icon:'group_work', text:'Mentions légales', route:'/page/mentions-legales'},
            ],
        })
    }
</script>

<style scoped>

</style>