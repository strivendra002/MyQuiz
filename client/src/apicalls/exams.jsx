import axiosInstance from "./axiosInstance";

// Add Exam
export const addExam = async (payload) => {
  try {
    const response = await axiosInstance.post("/exams/add", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Get All Exams
export const getAllExams = async () => {
  try {
    const response = await axiosInstance.post("/exams/get-all-exams");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Get Exam by ID
export const getExamById = async (payload) => {
  try {
    const response = await axiosInstance.post("/exams/get-exam-by-id", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Edit Exam by ID
export const editExamById = async (payload) => {
  try {
    const response = await axiosInstance.post("/exams/edit-exam-by-id", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Delete Exam by ID
export const deleteExamById = async (payload) => {
  try {
    const response = await axiosInstance.post("/exams/delete-exam-by-id", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Add Question to Exam
export const addQuestionToExam = async (payload) => {
  try {
    const response = await axiosInstance.post("/exams/add-question-to-exam", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Edit Question by ID
export const editQuestionById = async (payload) => {
  try {
    const response = await axiosInstance.post("/exams/edit-question-in-exam", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Delete Question by ID
export const deleteQuestionById = async (payload) => {
  try {
    const response = await axiosInstance.post("/exams/delete-question-in-exam", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
