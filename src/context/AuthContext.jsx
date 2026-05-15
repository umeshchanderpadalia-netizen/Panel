import {
  useEffect,
  useState,
} from "react";

import {
  AuthContext,
} from "./authContext";

export function AuthProvider({
  children,
}) {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // Load Session
  useEffect(() => {

    const savedUser =
      localStorage.getItem(
        "cab-user"
      );

    if (savedUser) {

      setUser(
        JSON.parse(savedUser)
      );
    }

    setLoading(false);

  }, []);

  // Login
  const login = (
    email,
    password
  ) => {

    if (
      email ===
        "admin@getmecab.com" &&
      password === "admin123"
    ) {

      const userData = {
        name: "Deepanshu",
        role: "Administrator",
        email,
      };

      localStorage.setItem(
        "cab-user",
        JSON.stringify(userData)
      );

      setUser(userData);

      return {
        success: true,
      };
    }

    return {
      success: false,
      message:
        "Invalid email or password",
    };
  };

  // Logout
  const logout = () => {

    localStorage.removeItem(
      "cab-user"
    );

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >

      {children}

    </AuthContext.Provider>
  );
}