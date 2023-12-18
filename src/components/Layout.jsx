import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.css';
import { Suspense } from 'react';
const Layout = () => {
  return (
    <div>
      <header className={s.header}>
        <nav className={s.nav}>
          <NavLink className={s.NavLink} to="/">
            Home
          </NavLink>
          <NavLink className={s.NavLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
