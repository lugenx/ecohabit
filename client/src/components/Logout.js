import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth";
import { useUserContext } from "../contexts/UserContext";

const Logout = () => {
  const { setUser } = useUserContext()
  const navigate = useNavigate();

  const handleLogout = () => {
    const isSuccesful = logout();
    if (isSuccesful) {
      setUser(null) // clear user from state because user is checked to determine private route access
      navigate("/login");
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return null;
};

export default Logout;
