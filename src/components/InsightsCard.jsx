import {
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

import AnimatedCounter from "./AnimatedCounter";

function InsightsCard({
  title,
  value,
  growth,
  positive = true,
  subtitle = "Compared to last month",
}) {

  const isCurrency =
    typeof value ===
      "string" &&
    value.includes("₹");

  const isNumber =
    typeof value ===
      "string" &&
    /\d/.test(value);

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.4,
      }}
      className="group relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[34px] p-6 lg:p-7 backdrop-blur-2xl hover:border-yellow-500/20 hover:-translate-y-1.5 transition-all duration-500"
    >

      {/* Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-yellow-400/10 blur-[120px] rounded-full opacity-70"></div>

      <div className="absolute bottom-[-120px] left-[-120px] w-[220px] h-[220px] bg-amber-500/5 blur-[120px] rounded-full"></div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-yellow-500/[0.03] via-transparent to-transparent"></div>

      {/* Shine */}
      <div className="absolute top-0 left-[-120%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-12 group-hover:left-[120%] transition-all duration-1000"></div>

      <div className="relative z-10">

        {/* Top */}
        <div className="flex items-start justify-between gap-5">

          <div>

            <p className="text-zinc-500 text-sm uppercase tracking-[0.22em]">

              {title}

            </p>

            <div className="mt-6">

              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-none">

                {isNumber ? (

                  <AnimatedCounter
                    value={value}
                  />

                ) : (

                  value
                )}

              </h2>

            </div>

          </div>

          {/* Trend Icon */}
          <div
            className={`relative overflow-hidden w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 ${
              positive

                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_25px_rgba(16,185,129,0.12)]"

                : "bg-red-500/10 text-red-400 border-red-500/20 shadow-[0_0_25px_rgba(239,68,68,0.12)]"
            }`}
          >

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/[0.03]"></div>

            {positive ? (

              <TrendingUp
                size={24}
                className="relative z-10"
              />

            ) : (

              <TrendingDown
                size={24}
                className="relative z-10"
              />

            )}

          </div>

        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between gap-4 mt-8">

          <div>

            <div
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl border ${
                positive

                  ? "bg-emerald-500/10 border-emerald-500/10"

                  : "bg-red-500/10 border-red-500/10"
              }`}
            >

              <ArrowUpRight
                size={14}
                className={
                  positive
                    ? "text-emerald-400"
                    : "text-red-400 rotate-90"
                }
              />

              <span
                className={`text-sm font-semibold ${
                  positive
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}
              >

                {growth}

              </span>

            </div>

            <p className="text-zinc-500 text-sm mt-3">

              {subtitle}

            </p>

          </div>

          {/* Live Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/5">

            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>

            <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">

              Live
            </span>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default InsightsCard;