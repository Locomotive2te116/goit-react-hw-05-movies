import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './Layout';
import NotFound from 'pages/NotFound';
import { lazy } from 'react';
// const Home = lazy(() => import('pages/Home/Home'));
// import Movies from 'pages/Movie/Movies';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Cast from 'pages/Movie/Cast';
// import Reviews from 'pages/Movie/Reviews';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movie/Movies'));
const Cast = lazy(() => import('pages/Movie/Cast'));
const Reviews = lazy(() => import('pages/Movie/Reviews'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

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
