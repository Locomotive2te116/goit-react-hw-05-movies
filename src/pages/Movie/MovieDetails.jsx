import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [mdets, setMdets] = useState([null]);

  useEffect(() => {
    fetchMoviesById(movieId).then(res => setMdets(res));
  }, [movieId]);

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
    </div>
  );
};

export default MovieDetails;
