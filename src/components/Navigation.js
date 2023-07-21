import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';
import './Navigation.css';

const Navbar = () => (
  <header className="header">
    <nav className="navbar">
      <h1 className="title">BOOKSTORE CMS </h1>
      <ul className="nav-menu">
        <li id="books">
          <Link to="/">BOOKS</Link>
        </li>
        <li id="categories">
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
    <button type="button" aria-label="User Profile" className="profile">
      <IoIosPerson className="icon-color" />
    </button>
  </header>

);

export default Navbar;
