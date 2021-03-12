import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Dogs } from '../../assets/dogs.svg';
import { UserContext } from '../../context/UserContext';

import './styles.css';

const Header = () => {
  const { data } = useContext(UserContext);
  return (
    <header className='header'>
      <nav className='container nav-header'>
        <Link className='logo-header' to='/' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        {data ? (
          <Link className='login-header' to='/conta'>
            {data.name}
          </Link>
        ) : (
          <Link className='login-header' to='/login'>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
