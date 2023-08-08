import { Navigate,useLocation } from "react-router-dom";

import { useUserContext } from "../contexts/UserContext";

function PrivateRoute({ children }) {
  const location = useLocation();
  const userInLocation = location.state;  
  const { user } = useUserContext();

  if (!user && !userInLocation) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;