import { ListOfMovies } from 'components/Api';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Home() {
  const [moviesName, SetMoviesName] = useState([]);

  useEffect(() => {
    async function getList() {
      try {
        const nameOfMovies = await ListOfMovies();
        SetMoviesName(nameOfMovies);
      } catch (error) {
        console.log(error);
      }
    }

    getList();
  }, []);

  const location = useLocation();

  return (
    <ul>
      {moviesName.length !== 0 &&
        moviesName.results.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
