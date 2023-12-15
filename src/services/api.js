import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '7b2ac305a76388b1525771ad00b10673';

//const API_KEY = 'fde4dd89a2c817f4c4efb19732e7d4a1';

export const fetchMoviesTrend = async () => {
  const { data } = await axios.get('trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchMoviesById = async id => {
  const { data } = await axios.get(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchMoviesBySerch = async inputValue => {
  const { data } = await axios.get(`search/movie`, {
    params: {
      api_key: API_KEY,
      query: inputValue,
    },
  });
  console.log(data);
  return data.results;
};
