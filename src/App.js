import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from 'react-router-dom';
import Container from './components/Container/Container.jsx';
import AppBar from './components/AppBar.js';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './components/Route/PrivateRoute.js';
import PublicRoute from './components/Route/PublicRouter.js';

const HomeView = lazy(
  () => import('./views/HomeView') /* webpackChunkHame 'home-view'*/,
);
const RegisterView = lazy(
  () => import('./views/RegisterView') /* webpackChunkHame 'register-view'*/,
);
const LoginView = lazy(
  () => import('./views/LoginView') /* webpackChunkHame 'login-view'*/,
);
const ContactsView = lazy(
  () => import('./views/ContactsView') /* webpackChunkHame 'contacts-view'*/,
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />

          <Suspense
            fallback={
              <Loader type="Circles" color="#00BFFF" height={80} width={80} />
            }
          >
            <Switch>
              <PublicRoute path="/" exact>
                <HomeView />
              </PublicRoute>
              <PublicRoute path="/register" restricted exact>
                <RegisterView />
              </PublicRoute>
              <PublicRoute path="/login" restricted exact>
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts">
                <ContactsView />
              </PrivateRoute>
            </Switch>
          </Suspense>
        </>
      )}
    </Container>
    </>
    
  );
}
