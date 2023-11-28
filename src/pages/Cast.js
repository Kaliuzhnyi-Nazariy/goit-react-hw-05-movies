import { CastMovie } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const params = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getMovie() {
      try {
        const result = await CastMovie(params.movieId);
        setCast(result);
      } catch (error) {}
    }
    getMovie();
  }, [params.movieId]);

  console.log(params.movieId);
  console.log(cast);
  //   console.log(cast.cast.map(cast => cast.original_name));
  const photo = 'https://image.tmdb.org/t/p/original/';

  //   return (
  //     <div>
  //       {cast.cast !== null &&
  //         cast.cast.map(cast => {
  //           return <p>{cast.original_name}</p>;
  //         })}
  //       <p>zahlushka!</p>
  //     </div>
  //   );
  return (
    <ul>
      {cast.length !== 0 &&
        cast.cast.map(cast => {
          return (
            <li key={cast.cast_id}>
              <img
                src={photo + cast.profile_path}
                alt={cast.original_name}
                width={250}
              />
              <p>{cast.original_name}</p>
              <p>Character: {cast.character}</p>
            </li>
          );
        })}
    </ul>
  );
}
