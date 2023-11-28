import { InfoAboutMovie } from 'components/Api';
import { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

export default function MovieDetails() {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  const params = useParams();
  const [movie, setMovie] = useState([null]);

  useEffect(() => {
    async function getMovie() {
      try {
        const result = await InfoAboutMovie(params.movieId);
        setMovie(result);
      } catch (error) {}
    }
    getMovie();
  }, [params.movieId]);

  console.log(movie);

  console.log();

  const poster = 'https://image.tmdb.org/t/p/original/';

  const { poster_path, title, vote_average, overview, genres } = movie;

  console.log(backLink);

  return (
    <div>
      <Link to={backLink}>
        <button>Go back</button>
      </Link>
      {movie !== null && (
        <div>
          <img src={poster + poster_path} alt={title} width={250}></img>
          <h1>{title}</h1>
          <p>User Score: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres?.map(genre => {
            return <span key={genre.id}>{genre.name}</span>;
          })}

          <p>Additional information</p>
          <Link to="cast" state={location.state}>
            Cast
          </Link>
          <NavLink to="reviews" state={location.state}>
            Reviews
          </NavLink>
        </div>
      )}
      <Outlet />
    </div>
  );
}
