import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchBarMovies = ({ onSearchMovies }) => {
  const [query, setQuery] = useState('');
  const [params, setParams] = useSearchParams();
  const queryPar = params.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();

    onSearchMovies({ query });

    setParams(params);
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
    params.set('query', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name movie"
        autoFocus
        value={queryPar}
        onChange={handleSearchParams}
      />
      <button type="submit">Search</button>
    </form>
  );
};
