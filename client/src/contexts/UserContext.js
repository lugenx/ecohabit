import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState("Victor");
  const [token, setToken] = useState(() => {
    const tokenValue = localStorage.getItem("token");
    return tokenValue;
  });

  useEffect(() => {
    console.log("fetching user data");
  }, [token]);

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {props.children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(
      "useUserContext must be used within a userContextProvider. Make sure your component is wrapped in userContextProvider."
    );
  }
  return context;
};

export { UserContextProvider, useUserContext };
