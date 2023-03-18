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

    return response;
  } catch (error) {
    console.error(error);
  }
};

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

    return response;
  } catch (error) {
    console.error(error);
  }
};

export { login, register };
