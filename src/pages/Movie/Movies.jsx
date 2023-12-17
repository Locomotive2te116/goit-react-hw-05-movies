import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMoviesBySerch } from 'services/api';
import { SerchBar } from './SerchBar';
import s from './Movie.module.css';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [serchs, setSerch] = useState([]);
  useEffect(() => {
    async function getNewMovie() {
      try {
        const serchs = await fetchMoviesBySerch(inputValue);
        setSerch(serchs);
      } catch (error) {
        console.log(error);
      }
    }
    getNewMovie();
  }, [inputValue]);
  const onSubmit = e => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.inputValue.value;
    setInputValue(inputValue);
  };
  const location = useLocation();

  return (
    <div>
      {/* <h2>Movies</h2> */}
      {/* <hr /> */}
      <SerchBar onSubmit={onSubmit} />
      <ul className={s.ul}>
        {serchs.map(serch => (
          <li className={s.card} key={serch.id}>
            <Link
              state={{ from: location }}
              to={`/movies/${serch.id.toString()}`}
            >
              <img
                className={s.poster}
                src={`https://image.tmdb.org/t/p/w500${serch.poster_path}`}
                width="120"
                alt={serch.media_type}
              />
              <p className={s.title}>{serch.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
