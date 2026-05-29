import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ProtectedRoute({ children }) {

  const [isChecking, setIsChecking] =
    useState(true);

  const [
    isAuthenticated,
    setIsAuthenticated,
  ] = useState(false);

  useEffect(() => {

    const token =
      localStorage.getItem(
        "cab-token"
      );

    setIsAuthenticated(
      !!token
    );

    setIsChecking(false);

  }, []);

  // Loading
  if (isChecking) {

    return (

      <div className="min-h-screen bg-black flex items-center justify-center text-white">

        Loading...

      </div>

    );
  }

  // Not Logged In
  if (!isAuthenticated) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  // Logged In
  return children;
}

export default ProtectedRoute;