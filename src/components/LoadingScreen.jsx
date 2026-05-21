import {
  LoaderCircle,
  Activity,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

function LoadingScreen({
  title = "Loading Dashboard",
  description = "Preparing operational data and initializing platform services...",
}) {

  return (

    <div className="relative overflow-hidden min-h-[560px] flex items-center justify-center rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl">

      {/* Background Glow */}
      <div className="absolute top-[-140px] right-[-140px] w-[320px] h-[320px] bg-yellow-400/10 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-[-120px] left-[-120px] w-[300px] h-[300px] bg-amber-500/10 blur-[150px] rounded-full"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_60%)]"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:42px_42px]"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Loader */}
        <div className="relative flex items-center justify-center">

          {/* Rings */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-40 h-40 rounded-full border border-yellow-500/10"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-28 h-28 rounded-full border border-yellow-400/20"
          />

          {/* Glow Pulse */}
          <div className="absolute w-24 h-24 bg-yellow-400/20 blur-[50px] rounded-full animate-pulse"></div>

          {/* Center Icon */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="relative w-20 h-20 rounded-[28px] bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-[0_0_45px_rgba(250,204,21,0.28)]"
          >

            <LoaderCircle
              size={34}
              className="text-black animate-spin"
            />

          </motion.div>

        </div>

        {/* Live Badge */}
        <div className="mt-10 flex items-center gap-3 px-5 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.08)]">

          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>

          <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-semibold">

            ERP SYSTEM ACTIVE

          </span>

        </div>

        {/* Content */}
        <div className="mt-10 max-w-2xl">

          <p className="text-xs uppercase tracking-[0.4em] text-yellow-400 font-semibold">

            System Initialization

          </p>

          <h2 className="text-5xl lg:text-6xl font-bold text-white mt-6 tracking-tight leading-tight">

            {title}

          </h2>

          <p className="text-zinc-400 mt-6 leading-relaxed text-lg max-w-2xl">

            {description}

          </p>

        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 w-full max-w-5xl">

          {/* Card */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">

            <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-yellow-400/10 blur-[90px] rounded-full"></div>

            <div className="relative z-10">

              <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400">

                <Sparkles size={24} />

              </div>

              <h3 className="text-white font-semibold mt-5">

                Loading Analytics

              </h3>

              <p className="text-sm text-zinc-500 mt-3 leading-relaxed">

                Preparing operational insights and financial intelligence.

              </p>

            </div>

          </div>

          {/* Card */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">

            <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-emerald-500/10 blur-[90px] rounded-full"></div>

            <div className="relative z-10">

              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">

                <Activity size={24} />

              </div>

              <h3 className="text-white font-semibold mt-5">

                Syncing Operations

              </h3>

              <p className="text-sm text-zinc-500 mt-3 leading-relaxed">

                Connecting bookings, drivers and transport workflow.

              </p>

            </div>

          </div>

          {/* Card */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">

            <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-blue-500/10 blur-[90px] rounded-full"></div>

            <div className="relative z-10">

              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">

                <LoaderCircle
                  size={24}
                  className="animate-spin"
                />

              </div>

              <h3 className="text-white font-semibold mt-5">

                Initializing Platform

              </h3>

              <p className="text-sm text-zinc-500 mt-3 leading-relaxed">

                Activating ERP services and preparing live dashboard data.

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LoadingScreen;