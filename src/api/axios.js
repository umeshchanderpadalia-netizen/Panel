import axios from "axios";

const api = axios.create({
  baseURL:
    "https://mock-api.getmecab.com/api",

  timeout: 10000,

  headers: {
    "Content-Type":
      "application/json",
    Accept:
      "application/json",
  },
});

/* =========================
   Request Interceptor
========================= */

api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem(
        "admin-auth"
      );

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  (error) =>
    Promise.reject(error)
);

/* =========================
   Response Interceptor
========================= */

api.interceptors.response.use(
  (response) => response,

  (error) => {
    const status =
      error.response?.status;

    if (status === 401) {
      localStorage.removeItem(
        "admin-auth"
      );

      localStorage.removeItem(
        "cab-user"
      );
    }

    return Promise.reject({
      success: false,
      status,
      message:
        error.response?.data
          ?.message ||
        error.message ||
        "Something went wrong",
    });
  }
);

export default api;