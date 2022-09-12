import React from 'react'
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children}) => {
  const { user } = useAuth();
      
  if (user.role === 'admin' ) {
		return children;
  }
    
  return <Navigate to="/" />
}

export default AdminRoute;