import React from 'react';
import './Navbar.css';
import { FaBell } from 'react-icons/fa';

function Navbar() {
  return (
    <div className='navbar'>
      <img
        className='logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
        alt='Netflix Logo'
      />
      <div className='nav-items'>
        <a className='nav-link' href='/home'>Home</a>
        <a className='nav-link' href='/series'>Series</a>
        <a className='nav-link' href='/movies'>Movies</a>
        <a className='nav-link' href='/list'>My List</a>
      </div>
      <div className='nav-right'>
        <input type='text' className='search-bar' placeholder='Search' />
        <img
          className='avatar'
          src='/—Pngtree—cartoon color simple male avatar_5230557.png'
          alt='User Avatar'
        />
        <FaBell  className='notification-icon'/>
      </div>
    </div>
  );
}

export default Navbar;
