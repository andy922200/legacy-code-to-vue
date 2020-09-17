<template>
  <div class="moviesContainer">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#">My Movie List</a>
    </nav>
    <div class="container container--fix">
      <MovieInputForm />

      <hr />

      <Spinner v-if="isLoading" />

      <p class="text-center" v-if="!isLoading && movies.length === 0">
        No Result. Please try again.
      </p>

      <ul v-if="movies.length !== 0" class="list-group">
        <li
          v-for="movie in movies"
          :key="movie.movie_id"
          class="list-group-item"
        >
          <h3>{{ movie.ch_name }}</h3>
          <h4>{{ movie.eng_name }}</h4>
          <div class="movie-intro">
            {{ movie.intro }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Spinner from "./../components/Spinner";
import MovieInputForm from "./../components/MovieInputForm";

export default {
  name: "Movies",
  components: { Spinner, MovieInputForm },
  created() {
    this.getMovies();
  },
  computed: {
    ...mapGetters("movies", ["movies", "isLoading"])
  },
  methods: {
    ...mapActions("movies", ["getMovies"])
  }
};
</script>

<style lang="scss" src="./../styles/Movies.scss"></style>
