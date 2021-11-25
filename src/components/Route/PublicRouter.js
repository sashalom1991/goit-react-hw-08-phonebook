import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function PublicRoute({
  children,
  redicertTo = '/',
  restricted = false,
  ...routerProps
}) {
  const isLog = useSelector(authSelectors.getIsLoggedIn);

  const redirectShould = isLog && restricted;

  return (
    <Route {...routerProps}>
      {redirectShould ? <Redirect to={redicertTo} /> : children}
    </Route>
  );
}
