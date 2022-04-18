import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from './firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

function RequireAuth({ children }) {
    // let auth = useAuth();
    let location = useLocation();
    // const [user, loading, error] = useAuthState(auth);

    if (!auth.user) {
      return <Navigate to="/register" state={{ from: location }} replace />;
    }
  
    return children;
  }

export default RequireAuth;