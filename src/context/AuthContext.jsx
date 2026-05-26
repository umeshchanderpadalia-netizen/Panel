import {
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const AuthContext =
  createContext({
    user: null,
    login: () => {},
    logout: () => {},   
    loading: false,
  });

export function AuthProvider({
  children,
}) {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // LOAD SESSION
  useEffect(() => {

    const savedUser =
      localStorage.getItem(
        "cab-user"
      );

    const savedToken =
      localStorage.getItem(
        "cab-token"
      );

    if (
      savedUser &&
      savedToken
    ) {

      setUser(
        JSON.parse(savedUser)
      );
    }

    setLoading(false);

  }, []);

  // REAL LOGIN
  const login = async (
    email,
    password
  ) => {

    try {

      const response =
        await fetch(
          "http://localhost:5000/api/auth/login",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              email,
              password,
            }),
          }
        );

      const data =
        await response.json();

      if (!response.ok) {

        return {
          success: false,
          message:
            data.message,
        };
      }

      // SAVE USER
      localStorage.setItem(
        "cab-user",
        JSON.stringify(
          data.user
        )
      );

      // SAVE TOKEN
      localStorage.setItem(
        "cab-token",
        data.token
      );

      setUser(
        data.user
      );

      return {
        success: true,
      };

    } catch (error) {

      console.log(error);

      return {
        success: false,
        message:
          "Server error",
      };
    }
  };

  // LOGOUT
  const logout = () => {

    localStorage.removeItem(
      "cab-user"
    );

    localStorage.removeItem(
      "cab-token"
    );

    setUser(null);
  };

  const value =
    useMemo(
      () => ({
        user,
        login,
        logout,
        loading,
      }),
      [user, loading]
    );

  if (loading) {

    return (

      <div className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center justify-center">

        <div className="relative z-10 flex flex-col items-center">

          <div className="relative">

            <div className="w-20 h-20 rounded-full border-[5px] border-yellow-400/10"></div>

            <div className="absolute inset-0 w-20 h-20 rounded-full border-[5px] border-transparent border-t-yellow-400 animate-spin"></div>

          </div>

          <p className="mt-8 text-zinc-400 tracking-[0.3em] uppercase text-sm">

            Initializing Dashboard

          </p>

        </div>

      </div>
    );
  }

  return (

    <AuthContext.Provider
      value={value}
    >

      {children}

    </AuthContext.Provider>
  );
}