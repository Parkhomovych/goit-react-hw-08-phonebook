import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors'


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const IsRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !IsRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}