import { ReviewsMovie } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const params = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getMovie() {
      try {
        const result = await ReviewsMovie(params.movieId);
        setReviews(result);
      } catch (error) {}
    }
    getMovie();
  }, [params.movieId]);

  return (
    <div>
      {reviews.length !== 0 && (
        <ul>
          {reviews.results.map(val => {
            return (
              <li key={val.id}>
                <h4>Author: {val.author}</h4>
                <p>{val.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
