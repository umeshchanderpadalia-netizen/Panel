import {
  Routes,
  Route,
} from "react-router-dom";

import {
  AnimatePresence,
} from "framer-motion";

import Dashboard from "./pages/Dashboard";
import Drivers from "./pages/Drivers";
import Bookings from "./pages/Bookings";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <AnimatePresence mode="wait">

      <Routes>

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Dashboard */}
        <Route
          path="/"
          element={
            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }
        />

        {/* Drivers */}
        <Route
          path="/drivers"
          element={
            <ProtectedRoute>

              <Drivers />

            </ProtectedRoute>
          }
        />

        {/* Bookings */}
        <Route
          path="/bookings"
          element={
            <ProtectedRoute>

              <Bookings />

            </ProtectedRoute>
          }
        />

        {/* Analytics */}
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>

              <Analytics />

            </ProtectedRoute>
          }
        />

      </Routes>

    </AnimatePresence>
  );
}

export default App;