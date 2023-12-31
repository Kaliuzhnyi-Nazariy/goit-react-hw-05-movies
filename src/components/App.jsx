import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AppHeader } from "./AppHeader";

const Home = lazy(() => import('pages/Home'))
const Movies = lazy(() => import('pages/Movies'))
const MovieDetails = lazy(() => import('pages/MovieDetails'))
const NotFound = lazy(() => import('pages/NotFound'))
const Cast = lazy(() => import('pages/Cast'))
const Reviews = lazy(() => import('pages/Reviews'))

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
                    <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </div>
  );
};
