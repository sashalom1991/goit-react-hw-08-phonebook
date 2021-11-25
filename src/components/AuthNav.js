import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../styles/App.module.css'

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" exact className={s.AuthNav} activeClassName={s.NavLinkAct}>
        Sign up
      </NavLink>
      <NavLink to="/login" exact className={s.AuthNav} activeClassName={s.NavLinkAct}>
        Log in
      </NavLink>
    </div>
  );
}
