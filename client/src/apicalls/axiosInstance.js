import axios from "axios";
import BASE_URL from "./apiConfig";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Attach token if available
const token = localStorage.getItem("token");
if (token) {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default axiosInstance;
