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

  return (
    <RegisterContext.Provider
      value={{
        registerData,
        setRegisterData,
        registerSuccessMessageVisible,
        setRegisterSuccessMessageVisible,
      }}
    >
      {props.children}
    </RegisterContext.Provider>
  );
};

export { RegisterContext, RegisterContextProvider };
