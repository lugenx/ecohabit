import React, { createContext, useState } from "react";

const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider
      value={{ loginData, setLoginData, loggedIn, setLoggedIn }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginContextProvider };
