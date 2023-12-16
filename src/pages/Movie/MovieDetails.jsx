import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [mdets, setMdets] = useState([null]);

  useEffect(() => {
    fetchMoviesById(movieId).then(res => setMdets(res));
  }, [movieId]);
  console.log(movieId);
  return (
    <div>
      <img
        src={
          mdets.poster_path
            ? `https://image.tmdb.org/t/p/w500${mdets.poster_path}`
            : ''
        }
        // width="120"
        alt={mdets.media_type}
      />
      <p>{mdets.title}</p>
      <hr />
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
