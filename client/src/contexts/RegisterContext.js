import React, { createContext, useState } from "react";

const RegisterContext = createContext();

const RegisterContextProvider = (props) => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [registered, setRegistered] = useState(false);

  return (
    <RegisterContext.Provider
      value={{ registerData, setRegisterData, registered, setRegistered }}
    >
      {props.children}
    </RegisterContext.Provider>
  );
};

export { RegisterContext, RegisterContextProvider };
