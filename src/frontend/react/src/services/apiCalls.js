const apiBaseUrl = "http://127.0.0.1:8000/";

export const createUser = async (userData) => {
  const options = {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };
  try {
    await fetch(apiBaseUrl + "api-auth/create/", options);
  } catch (error) {
    console.log(error.message);
  }
};

export const loginUser = async (userData) => {
  const options = {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };
  try {
    const response = await fetch(apiBaseUrl + "api-auth/token/", options);
    return response.json();
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
