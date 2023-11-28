import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const AppHeader = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Suspense fallback={<div>LOADING PAGE...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
