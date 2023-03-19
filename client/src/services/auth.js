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

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
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

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }

    const json = await response.json();
    const token = await json.token;
    localStorage.setItem("token", token);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const logout = () => {
  localStorage.removeItem("token");
  return true;
};

export { register, login, logout };
