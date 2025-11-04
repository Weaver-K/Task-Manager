import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

// Fetch all tasks
export const getTasks = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Add a new task
export const addTask = async (title) => {
  const res = await axios.post(API_URL, { title, completed: false });
  return res.data;
};

// Toggle a task’s completion status
export const toggleTask = async (id, completed) => {
  const res = await axios.put(`${API_URL}/${id}`, { completed: !completed });
  return res.data;
};

// Delete a task
export const deleteTask = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
