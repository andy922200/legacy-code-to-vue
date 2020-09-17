import axios from "axios";

const corsAnywhereURL = "https://cors-anywhere.herokuapp.com/";
const onlineDbURL = "https://hw-web-api.herokuapp.com/api";

const onlineDbRequest = axios.create({
  baseURL: `${corsAnywhereURL}${onlineDbURL}`
});

export const moviesAPIs = {
  getMovies: () => {
    return onlineDbRequest.get(`/movie/list.php`);
  }
};
