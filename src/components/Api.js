import axios from 'axios';

axios.defaults.baseURL = `
https://api.themoviedb.org/3`;

// const API_KEY = 'e2bfca12223d05953cbff2e41b27af3d';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmJmY2ExMjIyM2QwNTk1M2NiZmYyZTQxYjI3YWYzZCIsInN1YiI6IjY1NjFmY2Q1YjIzNGI5MDExYzg1YjhkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zu0-b85m0dnJh9r99a_VCm3ZWSjjLbZ18-NCkMC6Qjo',
  },
};

export const ListOfMovies = async () => {
  const result = await axios.get(`/trending/movie/day`, options);
  return result.data;
};

export const SearchMovies = async query => {
  const result = await axios.get(`/search/movie?query=${query}`, options);
  return result.data;
};

export const InfoAboutMovie = async movieId => {
  const result = await axios.get(`/movie/${movieId}`, options);
  return result.data;
};

export const CastMovie = async movieId => {
  const result = await axios.get(`/movie/${movieId}/credits`, options);
  return result.data;
};

export const ReviewsMovie = async movieId => {
  const result = await axios.get(`/movie/${movieId}/reviews`, options);
  return result.data;
};
