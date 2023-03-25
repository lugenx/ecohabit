import React, { createContext, useState } from "react";

const RegisterContext = createContext();

const RegisterContextProvider = (props) => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [registerSuccessMessageVisible, setRegisterSuccessMessageVisible] =
    useState(false);
  const [registerFailMessage, setRegisterFailMessage] = useState(null);
  return (
    <RegisterContext.Provider
      value={{
        registerData,
        setRegisterData,
        registerSuccessMessageVisible,
        setRegisterSuccessMessageVisible,
        registerFailMessage,
        setRegisterFailMessage,
      }}
    >
      {props.children}
    </RegisterContext.Provider>
  );
};

export { RegisterContext, RegisterContextProvider };
