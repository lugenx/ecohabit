import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginPending, setLoginPending] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginFailMessage, setLoginFailMessage] = useState(null);

  return (
    <LoginContext.Provider
      value={{
        loginData,
        setLoginData,
        loginPending,
        setLoginPending,
        loggedIn,
        setLoggedIn,
        loginFailMessage,
        setLoginFailMessage,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (context === undefined) {
    throw new Error(
      "useLoginContext must be used within a LoginContextProvider. Make sure your component is wrapped in a LoginContextProvider."
    );
  }
  return context;
};

export { useLoginContext, LoginContextProvider };
