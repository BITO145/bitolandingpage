import { Navigate } from 'react-router-dom';

// Gatekeeps admin routes — redirects to /admin-login when no token is stored.
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  return token ? children : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;
