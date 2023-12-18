import React, { useEffect, useRef, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { fetchMoviesById } from 'services/api';
import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [mdets, setMdets] = useState([null]);
  const location = useLocation();
  const goBackRef = useRef(location.state?.from ?? '/');
  const navigate = useNavigate();

  useEffect(() => {
    fetchMoviesById(movieId).then(res => setMdets(res));
  }, [movieId]);

  const handleGoBack = () => {
    navigate(goBackRef.current);
  };

  return (
    <div className={s.position}>
      <div className={s.butonpos}>
        <button onClick={handleGoBack}>Go back</button>

        <div className={s.pos}>
          <img
            className={s.poster}
            src={
              mdets.poster_path
                ? `https://image.tmdb.org/t/p/w500${mdets.poster_path}`
                : ''
            }
            // width="120"
            alt={mdets.media_type}
          />
          <div className={s.description}>
            <p className={s.title}>{mdets.title}</p>
            <p>{mdets.overview}</p>
            <p>Release_date:{mdets.release_date}</p>
            <hr />
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
