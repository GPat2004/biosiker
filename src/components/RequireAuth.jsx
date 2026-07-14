import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Bejelentkezést igénylő oldalak köré csomagolva. Amíg a session állapota
// betöltődik, nem döntünk semmiről (elkerülve a felvillanó átirányítást).
const RequireAuth = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) return null;

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default RequireAuth;
