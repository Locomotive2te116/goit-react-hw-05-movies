import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SerchBar = ({ setQuery }) => {
  const [inputValue, setInputValue] = useState('');
  // const [searchParams, setSearchParams] = useSearchParams();
  // const name = searchParams.get('name') || '';

  const onSubmit = event => {
    event.preventDefault();
    setQuery(inputValue);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search movie"
        name="inputValue"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        required
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};
