import axiosInstance from "./axiosInstance";

// Add Report
export const addReport = async (payload) => {
  try {
    const response = await axiosInstance.post("/reports/add-report", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Get All Reports
export const getAllReports = async (filters) => {
  try {
    const response = await axiosInstance.post("/reports/get-all-reports", filters);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Get All Reports by User
export const getAllReportsByUser = async () => {
  try {
    const response = await axiosInstance.post("/reports/get-all-reports-by-user");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
