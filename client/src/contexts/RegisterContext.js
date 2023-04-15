import React, { createContext, useContext, useState } from "react";

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

const useRegisterContext = () => {
  const context = useContext(RegisterContext);
  if (context === undefined) {
    throw new Error(
      "useRegisterContext must be used within a RegisterContextProvider. Make sure your component is wrapped in a RegisterContextProvider."
    );
  }
  return context;
};

export { useRegisterContext, RegisterContextProvider };
