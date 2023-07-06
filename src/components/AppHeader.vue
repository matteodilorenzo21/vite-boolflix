<script>
import axios from 'axios';
import {api} from '../data';
import { store } from '../data/store';
import AppSearchTerm from './AppSearchTerm.vue';
export default {
    components: { AppSearchTerm },
    data() {
        return {
            titleFilter: ''
        }
    },
    methods: {
        setTitleFilter(term){
            this.titleFilter = term;
        },
        
        searchMovie(){
            if(!this.titleFilter){
                store.movies = [];
                return;
            };

            const {baseUri, key, language} = api;

            const axiosConfig = {
                params: {
                    api_key: key,
                    language: language,
                    query: this.titleFilter,
                }
            }

            axios.get(`${baseUri}/search/movie`, axiosConfig)
            .then(res => {
                store.movies = res.data.results
            })
        },
    },
};
</script>

<template>

<header class="pt-2 ps-3">
    <div class="container-fluid h-100 d-flex align-items-center justify-content-between pe-5">
        <h1>boolflix</h1>
        <AppSearchTerm @term-change="setTitleFilter" @form-submit="searchMovie" class="mt-2"/>
    </div>
</header>

</template>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';
@import '../assets/scss/_vars.scss';
header {
    height: 100px;
    background-color: $bg-header-primary;

    h1 {
        font-size: 60px;
        font-family: $font-primary;
        color: $text-color-primary;
    }
}
</style>