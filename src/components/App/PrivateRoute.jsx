import React, { useContext } from 'react';
import { useLocation, Redirect, Route } from 'react-router-dom';

import { UserContext } from '../../contexts';

const PrivateRoute = (props) => {
  const location = useLocation();
  const { user, isLoaded } = useContext(UserContext);

  if (!isLoaded) {
    return null;
  }

  if (!user) {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: { from: location },
        }}
      />
    );
  }

  return <Route {...props} />;
};

export default PrivateRoute;
