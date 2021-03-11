import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Dogs } from '../../assets/dogs.svg';

import './styles.css';

const Header = () => {
  return (
    <header className='header'>
      <nav className='container nav-header'>
        <Link className='logo-header' to='/' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        <Link className='login-header' to='/login'>
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
