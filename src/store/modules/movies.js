import { moviesAPIs } from "./../../utils/apis.js";

const data = {
  namespaced: true,

  state: {
    movies: [],
    isLoading: false
  },

  getters: {
    movies: state => state.movies,
    isLoading: state => state.isLoading
  },

  mutations: {
    setMovies(state, data) {
      state.movies = data;
    },
    isLoading(state, status) {
      state.isLoading = status;
    }
  },

  actions: {
    async getMovies({ commit }) {
      try {
        commit("isLoading", true);

        let { data: moviesRawData } = await moviesAPIs.getMovies();

        commit("setMovies", moviesRawData);
        commit("isLoading", false);
      } catch (err) {
        console.log(err);
        commit("isLoading", true);
      }
    }
  }
};

export default data;
