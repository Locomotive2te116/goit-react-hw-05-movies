import React, { useEffect, useState } from 'react';
import { fetchMoviesTrend } from 'services/api';
import s from './Home.module.css';
import { Link, useLocation } from 'react-router-dom';
const Home = () => {
  const [days, setDays] = useState([]);
  useEffect(() => {
    fetchMoviesTrend().then(res => setDays(res.results));
  }, []);
  const location = useLocation();
  return (
    <div>
      {/* <h2>Home</h2>
      <hr /> */}
      <ul className={s.ul}>
        {days.map(day => (
          <li className={s.card} key={day.id}>
            <Link
              state={{ from: location }}
              to={`/movies/${day.id.toString()}`}
            >
              <img
                className={s.poster}
                src={`https://image.tmdb.org/t/p/w500${day.poster_path}`}
                width="120"
                alt={day.media_type}
              />
              <p className={s.title}>{day.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
