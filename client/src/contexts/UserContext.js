import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState(() => {
    const tokenValue = localStorage.getItem("token");
    return tokenValue;
  });
  const [error, setError] = useState(null);
  useEffect(() => {
    if (token) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_URL}/user/me`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const userData = await response.json();
          setUser(userData);
        } catch (error) {
          console.log("Error while fetching user data", error);
          setError(error.message);
        }
      };
      fetchUserData();
      // console.log("fetching user data");
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken, error }}>
      {props.children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(
      "useUserContext must be used within a UserContextProvider. Make sure your component is wrapped in UserContextProvider."
    );
  }
  return context;
};

export { UserContextProvider, useUserContext };
