import React from 'react'
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ConsumerRoute = ({ children}) => {
  const { user } = useAuth();
      
  if (user.role === 'student' || user.role === 'staff' || user.role === 'teacher') {
		return children;
  }
    
  return <Navigate to="/consumerLogin" replace />
}

export default ConsumerRoute;