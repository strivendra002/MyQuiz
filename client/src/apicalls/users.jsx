import axiosInstance from "./axiosInstance";

// Register User
export const registerUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/users/register", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Login User
export const loginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/users/login", payload);
    localStorage.setItem("token", response.data.token);
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
    return { success: true, data: response.data }; // Return an object with success status and data
  } catch (error) {
    throw error;
  }
};

// Get User Info
export const getUserInfo = async () => {
  try {
    const response = await axiosInstance.post("/users/get-user-info");
    return response.data;
  } catch (error) {
    throw error;
  }
};
