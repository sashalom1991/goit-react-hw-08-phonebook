import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import s from '../styles/App.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const emailUser = useSelector(authSelectors.getUseremail);

  return (
    <div className={s.UserMenu}>
      <p className={s.UserMenuText}>
        Welcome, <b>{emailUser}</b>
      </p>
      <Button
        size="small"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        <LogoutIcon />
        Log out
      </Button>
    </div>
  );
}
