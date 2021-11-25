import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth'

import s from '../styles/App.module.css'

const NavElem = () => {
  const isLog = useSelector(authSelectors.getIsLoggedIn);
  return(
    <nav>
    <NavLink to="/" exact className={s.NavLink} activeClassName={s.NavLinkAct}>
      Home
    </NavLink>

    {isLog && <NavLink to="/contacts" exact className={s.NavLink} activeClassName={s.NavLinkAct}>
      Contacts
    </NavLink>}
  </nav>
  )
  
  };

export default NavElem;