import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  AnimatePresence,
} from "framer-motion";

import Dashboard from "./pages/Dashboard";
import Drivers from "./pages/Drivers";
import Vendors from "./pages/Vendors";
import Bookings from "./pages/Bookings";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

import LedgerPage from "./pages/ledger/LedgerPage";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>

        {/* Authentication */}
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

        {/* Bookings */}
        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <Bookings />
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

        {/* Vendors */}
        <Route
          path="/vendors"
          element={
            <ProtectedRoute>
              <Vendors />
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

        {/* Ledger */}
        <Route
          path="/ledger"
          element={
            <ProtectedRoute>
              <LedgerPage />
            </ProtectedRoute>
          }
        />

        {/* Reports */}
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>
    </AnimatePresence>
  );
}

export default App;