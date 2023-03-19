import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth";
import { LoginContext } from "../../contexts/LoginContext";

const Logout = () => {
  const { setLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const isSuccesful = logout();
    if (isSuccesful) {
      setLoggedIn(false);
      navigate("/login");
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return null;
};

export default Logout;
