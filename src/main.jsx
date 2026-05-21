import React from "react";

import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
} from "react-router-dom";

import App from "./App";

import "./index.css";

import {
  AppProvider,
} from "./context/AppContext";

import {
  AuthProvider,
} from "./context/AuthContext.jsx";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>

    {/* Global Background */}
    <div className="relative overflow-hidden min-h-screen bg-[#050505]">

      {/* Glow Top */}
      <div className="fixed top-[-250px] right-[-250px] w-[500px] h-[500px] bg-yellow-400/10 blur-[180px] rounded-full pointer-events-none z-0"></div>

      {/* Glow Bottom */}
      <div className="fixed bottom-[-250px] left-[-250px] w-[500px] h-[500px] bg-amber-500/10 blur-[180px] rounded-full pointer-events-none z-0"></div>

      {/* Router */}
      <BrowserRouter>

        {/* Authentication */}
        <AuthProvider>

          {/* Application */}
          <AppProvider>

            <App />

          </AppProvider>

        </AuthProvider>

      </BrowserRouter>

    </div>

  </React.StrictMode>
);