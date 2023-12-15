import React, { useEffect, useState } from 'react';
import { fetchMoviesTrend } from 'services/api';
import s from './Home.module.css';
import { Link } from 'react-router-dom';
const Home = () => {
  const [days, setDays] = useState([]);
  useEffect(() => {
    fetchMoviesTrend().then(res => setDays(res.results));
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <hr />
      <ul className={s.ul}>
        {days.map(day => (
          <li className={s.card} key={day.id}>
            <Link to={day.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${day.poster_path}`}
                width="120"
                alt={day.media_type}
              />
              <p>{day.title}</p>
              {/* <p>Release_date:{day.release_date}</p> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
