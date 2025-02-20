import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

const token = localStorage.getItem("token");
if (token) {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const registerUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/users/register", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const loginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/users/login", payload);
    localStorage.setItem("token", response.data.token);
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`;
    return { success: true, data: response.data }; // Return an object with success status and data
  } catch (error) {
    throw error;
  }
};

export const getUserInfo = async () => {
  try {
    const response = await axiosInstance.post("/users/get-user-info");
    return response.data;
  } catch (error) {
    throw error;
  }
};
