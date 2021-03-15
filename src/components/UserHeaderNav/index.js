import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { ReactComponent as MinhasFotos } from '../../assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../assets/adicionar.svg';
import { ReactComponent as Sair } from '../../assets/sair.svg';
import useMedia from '../../hooks/useMedia';

import './styles.css';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobile = useMedia('(max-width: 40rem)');

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu'
          className={`btn-mobile ${mobileMenu && 'btn-mobile-active'}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? 'nav-mobile' : 'nav-user-header'} ${
          mobileMenu && 'nav-mobile-active'
        }`}
      >
        <NavLink to='/conta' activeClassName='active' end='true'>
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to='/conta/estatisticas' activeClassName='active'>
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to='/conta/postar' activeClassName='active'>
          <AdicionarFoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
