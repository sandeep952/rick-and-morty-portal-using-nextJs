import React, { useState } from 'react';
import Link from 'next/link';
const Navbar = () => {
  const [active, toggleActive] = useState(false);

  const toggleNav = () => {
    toggleActive(!active);
  };
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link href="/">
            <a className="title is-3">Rick and Morty</a>
          </Link>
        </div>

        <div
          role="button"
          className={`navbar-burger burger ${active ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
          onClick={toggleNav}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div
        id="navbarMenu"
        className={`navbar-menu ${active ? 'is-active' : ''}`}
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <Link href="/">
              <a className="button">Home</a>
            </Link>
          </div>
          <div className="navbar-item">
            <Link href="/About">
              <a className="button">About</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
