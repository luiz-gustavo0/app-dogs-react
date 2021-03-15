import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import UserHeaderNav from '../UserHeaderNav';

import './styles.css';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case '/conta/postar':
        setTitle('Post Sua Foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatisticas');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [location]);

  return (
    <header className='user-header'>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
