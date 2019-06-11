import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            posts: [],
            pages: [],
            categories: [],
        },
        mutations: {
            getPosts: (state, data) => {
                state.posts = data;
            },
            getPages: (state, data) => {
                state.pages = data;
            },
            getCats: (state, data) => {
                state.categories = data;
            },
        },
        getters: {
            getPost: (state) => (slug) => {
                return state.posts.find(post => post.slug === slug);
            },
            postsByToolCategory: (state, ) => (id) => {
                return state.posts.filter(post => post.categories[0] === id);
            },
            getPage: (state) => (slug) => {
                return state.pages.find(p => p.slug === slug);
            },

        }
    })
}

export default createStore