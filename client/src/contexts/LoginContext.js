import React, { createContext, useState } from "react";

const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginFailMessage, setLoginFailMessage] = useState(null);

  return (
    <LoginContext.Provider
      value={{
        loginData,
        setLoginData,
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

export { LoginContext, LoginContextProvider };