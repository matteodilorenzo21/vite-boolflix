<script>
      import { store } from '../data/store';
      
      export default {
      data() {
        return {
          store: store,
          hoveredMovieId: null,
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
        <div
          class="col-10 col-md-3 col-lg-2 shadow-lg"
          v-for="movie in mappedMovies"
          :key="movie.id"
          @mouseenter="hoveredMovieId = movie.id"
          @mouseleave="hoveredMovieId = null">
          <ul class="list-unstyled">
            <li>
              <div class="image-container">
                <img :src="movie.poster_path" :alt="movie.title" />
                <div class="card-spec" :class="{ 'card-spec-show': hoveredMovieId === movie.id }">
                  <p><span>Title: </span>{{ movie.title }}</p>
                  <p><span>Original title: </span>{{ movie.original_title }}</p>
                  <p><span>Overview: </span>{{ movie.overview }}</p>
                  <p><span>Language: </span>{{ movie.original_language }}</p>
                  <div class="rating">
                    <span
                      v-for="i in 5"
                      :key="i"
                      :class="getStarClass(i, movie.vote_average)"
                    ></span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  
    <section class="mb-5 me-5">
    <h2>Serie TV</h2>
    <div class="row g-5">
      <div
        class="col-10 col-md-3 col-lg-2 shadow-lg"
        v-for="serie in mappedSeries"
        :key="serie.id"
        @mouseenter="hoveredSerieId = serie.id"
        @mouseleave="hoveredSerieId = null"
      >
        <ul class="list-unstyled">
          <li>
            <div class="image-container">
              <img :src="serie.poster_path" :alt="serie.title" />
              <div class="card-spec" :class="{ 'card-spec-show': hoveredSerieId === serie.id }">
                <p><span>Title: </span>{{ serie.name }}</p>
                <p><span>Original title: </span>{{ serie.original_name }}</p>
                <p><span>Overview: </span>{{ serie.overview }}</p>
                <p><span>Language: </span>{{ serie.original_language }}</p>
                <div class="rating">
                  <span v-for="i in 5" :key="i" :class="getStarClass(i, serie.vote_average)"></span>
                </div>
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
  
  h2,
  li {
    color: #fff;
  }
  
  .image-container {
    position: relative;
    cursor: pointer;
  }
  
  .card-spec {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  overflow: auto;
  padding: 10px;
  
  scrollbar-width: thin;
}


.card-spec::-webkit-scrollbar {
  width: 0.2rem;
}

.card-spec::-webkit-scrollbar-thumb {
  background-color: $text-color-primary;
  border-radius: 0.1rem;
}

.card-spec::-webkit-scrollbar-track {
  background-color: transparent;
}

  .col-10:hover .card-spec {
    opacity: 1;
    visibility: visible;
  }
  
  .card-spec p {
    color: #fff;
    margin: 0;
    padding: 5px 0;
  }

  span {
    font-weight: 700;
  }
</style>
  
