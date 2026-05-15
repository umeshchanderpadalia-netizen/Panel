import {
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Drivers from "./pages/Drivers";
import Bookings from "./pages/Bookings";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <Routes>

      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Protected */}
      <Route
        path="/"
        element={
          <ProtectedRoute>

            <Dashboard />

          </ProtectedRoute>
        }
      />

      <Route
        path="/drivers"
        element={
          <ProtectedRoute>

            <Drivers />

          </ProtectedRoute>
        }
      />

      <Route
        path="/bookings"
        element={
          <ProtectedRoute>

            <Bookings />

          </ProtectedRoute>
        }
      />

      <Route
        path="/analytics"
        element={
          <ProtectedRoute>

            <Analytics />

          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;