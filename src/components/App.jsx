import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
