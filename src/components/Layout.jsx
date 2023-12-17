import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import s from './Layout.module.css';
const Layout = () => {
  return (
    <div>
      <header className={s.header}>
        <nav className={s.nav}>
          <Link className={s.Link} to="/">
            Home
          </Link>
          <Link className={s.Link} to="/movies">
            Movies
          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
