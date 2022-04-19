import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

function RequireAuth({ children }) {
    let location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    if(loading){
      return <h1 className='text-secondary'>loading......</h1>
    }
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }

export default RequireAuth;