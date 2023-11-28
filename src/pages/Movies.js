import { SearchMovies } from 'components/Api';
import { SearchBarMovies } from 'components/SearchBar';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // const searchMovies = async nameOfMovie => {
  //   try {
  //     const result = await SearchMovies(nameOfMovie);
  //     setSearchedMovie(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;

    const searchMovies = async () => {
      try {
        const result = await SearchMovies(currentQuery);
        setSearchedMovie(result);
      } catch (error) {
        console.log(error);
      }
    };
    searchMovies();
  }, [searchParams]);

  const location = useLocation();

  console.log(location);

  return (
    <div>
      <SearchBarMovies onSearchMovies={setSearchParams} />
      <ul>
        {searchedMovie.length !== 0 &&
          searchedMovie.results.map(SearchMov => {
            return (
              <li key={SearchMov.id}>
                <Link to={`${SearchMov.id}`} state={{ from: location }}>
                  {SearchMov.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
