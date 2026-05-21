import { Navigate } from "react-router-dom";

import {
  ShieldCheck,
  LoaderCircle,
} from "lucide-react";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

function ProtectedRoute({
  children,
}) {

  const [
    isChecking,
    setIsChecking,
  ] = useState(true);

  const [
    isAuthenticated,
    setIsAuthenticated,
  ] = useState(false);

  useEffect(() => {

    const auth =
      localStorage.getItem(
        "admin-auth"
      );

    const timeout =
      setTimeout(() => {

        setIsAuthenticated(
          !!auth
        );

        setIsChecking(
          false
        );

      }, 700);

    return () =>
      clearTimeout(timeout);

  }, []);

  // Loading Screen
  if (isChecking) {

    return (

      <div className="relative overflow-hidden min-h-screen bg-[#050505] flex items-center justify-center px-6">

        {/* Ambient Glow */}
        <div className="absolute top-[-200px] right-[-200px] w-[420px] h-[420px] bg-yellow-400/10 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-[-220px] left-[-220px] w-[460px] h-[460px] bg-amber-500/5 blur-[180px] rounded-full"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:70px_70px]"></div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="relative z-10 w-full max-w-lg rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl p-10 text-center overflow-hidden"
        >

          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.03] via-transparent to-transparent"></div>

          {/* Loader */}
          <div className="relative flex items-center justify-center">

            <div className="absolute w-32 h-32 rounded-full border border-yellow-500/10"></div>

            <div className="absolute w-24 h-24 rounded-full border border-yellow-400/15"></div>

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative w-20 h-20 rounded-[28px] bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-[0_0_45px_rgba(250,204,21,0.2)]"
            >

              <LoaderCircle
                size={34}
                className="text-black"
              />

            </motion.div>

          </div>

          {/* Content */}
          <div className="relative z-10 mt-12">

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/10">

              <div className="relative">

                <div className="absolute inset-0 bg-emerald-400 blur-md rounded-full"></div>

                <div className="relative w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>

              </div>

              <span className="text-xs uppercase tracking-[0.22em] text-emerald-400">

                ERP Security Active

              </span>

            </div>

            <h2 className="text-4xl font-bold text-white mt-8 tracking-tight">

              Verifying Access

            </h2>

            <p className="text-zinc-400 leading-relaxed mt-5 max-w-md mx-auto">

              Initializing protected ERP modules,
              validating authentication credentials
              and securing dashboard access.

            </p>

          </div>

        </motion.div>

      </div>
    );
  }

  // Not Authenticated
  if (!isAuthenticated) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  // Authenticated
  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 16,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="relative"
    >

      {/* Security Badge */}
      <div className="fixed bottom-6 left-6 z-40 hidden 2xl:flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0a0a0a]/90 border border-white/10 backdrop-blur-2xl shadow-[0_0_30px_rgba(0,0,0,0.25)]">

        <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/10 text-emerald-400 flex items-center justify-center">

          <ShieldCheck
            size={20}
          />

        </div>

        <div>

          <p className="text-[10px] uppercase tracking-[0.24em] text-emerald-400">

            Protected Route

          </p>

          <p className="text-xs text-zinc-400 mt-1">

            ERP Security Verified

          </p>

        </div>

      </div>

      {children}

    </motion.div>
  );
}

export default ProtectedRoute;