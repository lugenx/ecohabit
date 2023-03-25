const register = async (userData) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/user/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );

    return response;
  } catch (error) {
    return error;
  }
};

const login = async (userData) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/user/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );

    const json = await response.json();
    const token = await json.token;
    localStorage.setItem("token", token);

    return response.status;
  } catch (error) {
    return error;
  }
};

const logout = () => {
  localStorage.removeItem("token");
  const tokenExists = localStorage.getItem("token");
  if (!tokenExists) {
    return true;
  } else {
    return false;
  }
};

export { register, login, logout };
