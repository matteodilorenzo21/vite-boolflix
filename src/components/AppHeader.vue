<script>
import axios from 'axios';
import { api } from '../data';
import { store } from '../data/store';
import AppSearchTerm from './AppSearchTerm.vue';

export default {
  components: {
    AppSearchTerm
  },
  data() {
    return {
      titleFilter: ''
    };
  },
  methods: {
    setTitleFilter(term) {
      this.titleFilter = term;
    },
    searchProduction() {
      if (!this.titleFilter) {
        store.movies = [];
        store.series = [];
        return;
      }

      const { baseUri, key, language } = api;

      const axiosConfig = {
        params: {
          api_key: key,
          language: language,
          query: this.titleFilter,
        },
      };

      axios.get(`${baseUri}/search/movie`, axiosConfig)
        .then(res => {
          const moviesWithPosters = res.data.results.map(movie => ({
            ...movie,
            poster_path: this.getPosterUrl(movie.poster_path),
          }));
          store.movies = moviesWithPosters;
        })
        .catch(error => {
          console.error(error);
        });

      axios.get(`${baseUri}/search/tv`, axiosConfig)
        .then(res => {
          const seriesWithPosters = res.data.results.map(serie => ({
            ...serie,
            poster_path: this.getPosterUrl(serie.poster_path),
          }));
          store.series = seriesWithPosters;
        })
        .catch(error => {
          console.error(error);
        });
    },
    getPosterUrl(posterPath) {
      if (posterPath) {
        return `${api.imageBaseUri}/w342/${posterPath}`;
      }
      return null;
    },
  },
};
</script>

<template>

<header class="pt-2 ps-3">
    <div class="container-fluid h-100 d-flex align-items-center justify-content-between pe-5">
        <div class="d-flex">
            <h1>boolflix</h1>
            <ul class="d-flex list-unstyled align-items-center text-white ms-5 pt-4">
                <li class="me-3"><a href="#">Home</a></li>
                <li class="me-3"><a href="#">Film</a></li>
                <li class="me-3"><a href="#">Serie TV</a></li>
                <li class="me-3"><a href="#">Originali</a></li>
                <li class="me-3"><a href="#">Aggiunti di recente</a></li>
                <li class="me-3"><a href="#">La mia lista</a></li>
            </ul>
        </div>
        <AppSearchTerm @term-change="setTitleFilter" @form-submit="searchProduction" class="mt-2"/>
    </div>
</header>

</template>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';
@import '../assets/scss/_vars.scss';
header {
    height: 100px;
    background-color: $bg-header-primary;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 2;

    h1 {
        font-size: 60px;
        font-family: $font-primary;
        color: $text-color-primary;
        cursor: pointer;
    }

    a {
        color: #fff;
        padding-bottom: 5px;

        &:hover {
            border-bottom: 2px solid $text-color-primary;
        }
    }
}
</style>