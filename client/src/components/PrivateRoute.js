import { Navigate } from "react-router-dom";

import { useUserContext } from "../contexts/UserContext";

function PrivateRoute({ children }) {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;
