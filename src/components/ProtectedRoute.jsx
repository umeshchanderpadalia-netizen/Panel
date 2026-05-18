import { Navigate } from "react-router-dom";

function ProtectedRoute({
  children,
}) {

  const isAuthenticated =
    localStorage.getItem(
      "admin-auth"
    );

  if (!isAuthenticated) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return (
    <div className="animate-[fadeIn_0.4s_ease]">

      {children}

    </div>
  );
}

export default ProtectedRoute;