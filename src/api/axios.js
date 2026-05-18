import axios from "axios";

const api = axios.create({
  baseURL:
    "https://mock-api.getmecab.com/api",

  timeout: 7000,

  headers: {
    "Content-Type":
      "application/json",
  },
});

// Request Interceptor
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

// Response Interceptor
api.interceptors.response.use(
  (response) => response,

  (error) => {

    if (
      error.response?.status ===
      401
    ) {

      localStorage.removeItem(
        "admin-auth"
      );

      localStorage.removeItem(
        "cab-user"
      );
    }

    return Promise.reject(error);
  }
);

export default api;