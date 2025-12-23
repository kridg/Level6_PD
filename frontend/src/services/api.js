import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:8000/api";

const authHeader = (token) =>
  token ? { Authorization: `Token ${token}` } : {};

export const submitInquiry = async (values) => {
  const response = await axios.post(`${API_BASE}/inquiries/`, values);
  return response.data;
};

export const fetchStats = async (token) => {
  const response = await axios.get(`${API_BASE}/inquiries/stats/`, {
    headers: authHeader(token),
  });
  return response.data;
};

export const adminLogin = async (username, password) => {
  const response = await axios.post(`${API_BASE}/auth/token/`, {
    username,
    password,
  });
  return response.data.token;
};

export const fetchInquiries = async (token, filters = {}) => {
  const params = new URLSearchParams(filters).toString();
  const response = await axios.get(
    `${API_BASE}/inquiries/${params ? `?${params}` : ""}`,
    { headers: authHeader(token) }
  );
  return response.data;
};

export const deleteInquiry = async (token, id) => {
  await axios.delete(`${API_BASE}/inquiries/${id}/`, {
    headers: authHeader(token),
  });
};

// Content API endpoints
export const fetchEvents = async () => {
  const response = await axios.get(`${API_BASE}/events/`);
  return response.data;
};

export const fetchFeedback = async () => {
  const response = await axios.get(`${API_BASE}/feedback/`);
  return response.data;
};

export const fetchFAQs = async () => {
  const response = await axios.get(`${API_BASE}/faqs/`);
  return response.data;
};

export const fetchServices = async () => {
  const response = await axios.get(`${API_BASE}/services/`);
  return response.data;
};


