import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import NavElem from './NavElem';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';

import s from '../styles/App.module.css';

export default function AppBar() {
  const isLog = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.HeaderContainer}>
      <NavElem />
      {isLog ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
