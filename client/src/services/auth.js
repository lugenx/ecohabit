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
    return Promise.reject(error);
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
    const { token, user } = json;
    localStorage.setItem("token", token);

    return { responseStatus: response.status, user };
  } catch (error) {
    return Promise.reject(error);
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
