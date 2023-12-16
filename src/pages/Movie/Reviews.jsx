import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'services/api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [rew, setRew] = useState([]);

  useEffect(() => {
    fetchMoviesReviews(movieId).then(res => setRew(res.results));
  }, [movieId]);
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {rew.map(item => (
          <li key={item.id}>
            <p>{item.author}</p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
