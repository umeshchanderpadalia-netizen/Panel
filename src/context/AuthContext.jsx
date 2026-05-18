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

    // Smooth Loading Delay
    const timer =
      setTimeout(() => {

        setLoading(false);

      }, 650);

    return () =>
      clearTimeout(timer);

  }, []);

  // Login
  const login = (
    email,
    password
  ) => {

    if (
      email ===
        "admin@getmecab.com" &&
      password ===
        "admin123"
    ) {

      const userData = {
        name: "Deepanshu",
        role:
          "System Administrator",
        email,
      };

      localStorage.setItem(
        "cab-user",
        JSON.stringify(userData)
      );

      localStorage.setItem(
        "admin-auth",
        "true"
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

    localStorage.removeItem(
      "admin-auth"
    );

    setUser(null);
  };

  // Loading Screen
  if (loading) {

    return (
      <div className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center justify-center">

        {/* Background Glow */}
        <div className="absolute top-[-180px] right-[-180px] w-[420px] h-[420px] bg-yellow-400/10 blur-[160px] rounded-full"></div>

        <div className="absolute bottom-[-180px] left-[-180px] w-[420px] h-[420px] bg-amber-500/10 blur-[160px] rounded-full"></div>

        {/* Loader */}
        <div className="relative z-10 flex flex-col items-center">

          {/* Spinner */}
          <div className="relative">

            <div className="w-20 h-20 rounded-full border-[5px] border-yellow-400/10"></div>

            <div className="absolute inset-0 w-20 h-20 rounded-full border-[5px] border-transparent border-t-yellow-400 animate-spin"></div>

          </div>

          {/* Text */}
          <p className="mt-8 text-zinc-400 tracking-[0.3em] uppercase text-sm">
            Initializing Dashboard
          </p>

        </div>

      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >

      <div className="animate-[fadeIn_0.45s_ease]">

        {children}

      </div>

    </AuthContext.Provider>
  );
}