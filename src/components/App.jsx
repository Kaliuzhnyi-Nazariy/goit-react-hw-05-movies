import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AppHeader } from "./AppHeader";
import Cast from "pages/Cast";
import Reviews from "pages/Reviews";

const Home = lazy(() => import('pages/Home'))
const Movies = lazy(() => import('pages/Movies'))
const MovieDetails = lazy(() => import('pages/MovieDetails'))

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppHeader />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
