import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const SerchBar = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') || '';
  return (
    <form onSubmit={onSubmit}>
      <input
        value={name}
        onChange={e =>
          setSearchParams(e.target.value ? { name: e.target.value } : {})
        }
        type="text"
        placeholder="Search movies"
        name="inputValue"
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};
