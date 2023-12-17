import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movie/Movies';
import NotFound from 'pages/NotFound';
import Layout from './Layout';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'pages/Movie/Cast';
import Reviews from 'pages/Movie/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
