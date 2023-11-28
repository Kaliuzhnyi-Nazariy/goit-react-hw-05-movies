import { useState } from 'react';

export const SearchBarMovies = ({ onSearchMovies }) => {
  // const { listOfSearchingMovies, updateNameOfMovie } = useSearchMovies();

  // const handleSubmit = value => {
  //   setSearchParams({ query: value });
  // };
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSearchMovies({ query });
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name movie"
        autoFocus
        value={query}
        onChange={handleSearchParams}
      />
      <button type="submit">Search</button>
    </form>
  );
};
