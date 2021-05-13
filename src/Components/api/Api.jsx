//import axios from "axios";

const BASE_URL = "https://api.themoviedb.org";
const API_KEY = "93ac0ae6a73612e6a2ab4e7e2dd58893";

const fetchShowMoviesDetails = (movieId) => {
  return fetch(
    `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
};

const fetchMovieWithQuery = (searchQuery) => {
  return fetch(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`
  ).then((response) => response.json());
};

const fetchTrendingMovie = () => {
  return fetch(`${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
};

const fetchCastMovie = (movieId) => {
  return fetch(
    `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
};

const fetchReviewsMovie = (movieId) => {
  return fetch(
    `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());
};

const Api = {
  fetchShowMoviesDetails,
  fetchMovieWithQuery,
  fetchTrendingMovie,
  fetchCastMovie,
  fetchReviewsMovie,
};

export default Api;