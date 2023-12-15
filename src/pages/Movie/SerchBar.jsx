import React from 'react';

export const SerchBar = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search images and photos"
        name="inputValue"
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};
