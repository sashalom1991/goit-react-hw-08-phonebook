import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {authSelectors} from '../../redux/auth';

export default function PrivateRoute({
  children,
  redicertTo = '/login',
  ...routerProps
}) {
  const isLog = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route {...routerProps}>
      {isLog ? children : <Redirect to={redicertTo} />}
    </Route>
  );
}
