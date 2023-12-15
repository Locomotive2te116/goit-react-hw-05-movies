import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMoviesBySerch } from 'services/api';
import { SerchBar } from './SerchBar';

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
    console.log(inputValue);
    setInputValue(inputValue);
  };
  return (
    <div>
      <h2>Movies</h2>
      <hr />
      <SerchBar onSubmit={onSubmit} />
      <ul>
        {serchs.map(serch => (
          <li key={serch.id}>
            <Link to={`/movies/${serch.id.toString()}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${serch.poster_path}`}
                width="120"
                alt={serch.media_type}
              />
              <p>{serch.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
