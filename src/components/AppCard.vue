<script>
      import { store } from '../data/store';
      
      export default {
      data() {
        return {
          store: store,
          flags: ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'pt', 'cn', 'ru', 'tr', 'da']
        };
      },
      computed: {
        mappedMovies() {
          return this.store.movies.map(movie => ({
            ...movie,
            vote_average: Math.round(movie.vote_average / 2)
          }));
        },
        mappedSeries() {
          return this.store.series.map(serie => ({
            ...serie,
            vote_average: Math.round(serie.vote_average / 2)
          }));
        }
      },
      methods: {
      getStarClass(index, voteAverage) {
        if (index <= voteAverage) {
          return 'fas fa-sharp fa-star';
        } else {
          return 'far fa-light fa-star';
        }
      }
     }
    };
</script>
    
<template>
    
    <section class="mb-5 me-5">
        <h2>Film</h2>
        <div class="row g-5">
            <div class="col-10 col-md-3 col-lg-2 shadow-lg" v-for="movie in mappedMovies" :key="movie.id">
            <ul class="list-unstyled">
                <li>
                <img :src="movie.poster_path" :alt="movie.title">
                <div class="card-spec">
                    <p>Title: {{ movie.title }}</p>
                    <p>Original title: {{ movie.original_title }}</p>
                    <p>Language: {{ movie.original_language }}</p>
                    <div class="rating">
                        <span v-for="i in 5" :key="i" :class="getStarClass(i, movie.vote_average)"></span>
                    </div>
                </div>
                </li>
            </ul>
            </div>
        </div>
    </section>
    
    
    <section class="mb-5 me-5">
        <h2>Serie Tv</h2>
        <div class="row g-5">
          <div class="col-10 col-md-3 col-lg-2 shadow-lg" v-for="serie in mappedSeries" :key="serie.id">
            <ul class="list-unstyled">
              <li>
                <img :src="serie.poster_path" :alt="serie.title">
                <div class="card-spec">
                    <p>Title: {{ serie.name }}</p>
                    <p>Original title: {{ serie.original_name }}</p>
                    <p>Language: {{ serie.original_language }}</p>
                    <div class="rating">
                        <span v-for="i in 5" :key="i" :class="getStarClass(i, serie.vote_average)"></span>
                    </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </section>
    
</template>
    
    
<style lang="scss" scoped>

    @import '../assets/scss/style.scss';
    @import '../assets/scss/_vars.scss';
    
    h2, li {
    color: #fff;
    }
    
</style>
