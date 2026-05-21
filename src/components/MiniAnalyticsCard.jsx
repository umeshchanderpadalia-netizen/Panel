import {
  TrendingUp,
  Activity,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import AnimatedCounter from "./AnimatedCounter";

function MiniAnalyticsCard({
  title,
  value,
  subtitle,
  growth = "+12%",
  positive = true,
}) {

  const isNumber =
    typeof value ===
      "string" &&
    /\d/.test(value);

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.35,
      }}
      className="group relative overflow-hidden bg-[#0a0a0a]/80 border border-white/10 rounded-[32px] p-6 backdrop-blur-2xl hover:border-yellow-500/20 hover:-translate-y-1.5 transition-all duration-500"
    >

      {/* Gradient Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-yellow-400/[0.06] via-transparent to-amber-500/[0.08]"></div>

      {/* Main Glow */}
      <div className="absolute top-[-90px] right-[-90px] w-[220px] h-[220px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-100px] left-[-100px] w-[200px] h-[200px] bg-amber-500/5 blur-[120px] rounded-full"></div>

      {/* Top Overlay */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

      {/* Shine */}
      <div className="absolute top-0 left-[-120%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-12 group-hover:left-[120%] transition-all duration-1000"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-start justify-between gap-5">

          <div>

            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.05]">

              <Sparkles
                size={12}
                className="text-yellow-400"
              />

              <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">

                Analytics
              </span>

            </div>

            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500 mt-5">

              {title}

            </p>

            <div className="mt-6">

              <h3 className="text-5xl font-bold tracking-tight text-white leading-none">

                {isNumber ? (

                  <AnimatedCounter
                    value={value}
                  />

                ) : (

                  value
                )}

              </h3>

            </div>

          </div>

          {/* Growth */}
          <div
            className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.03)] ${
              positive

                ? "bg-emerald-500/10 border-emerald-500/10 text-emerald-400"

                : "bg-red-500/10 border-red-500/10 text-red-400"
            }`}
          >

            <ArrowUpRight
              size={14}
              className={
                positive
                  ? ""
                  : "rotate-90"
              }
            />

            {growth}

          </div>

        </div>

        {/* Divider */}
        <div className="mt-8 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.03] to-transparent"></div>

        {/* Footer */}
        <div className="mt-6 flex items-end justify-between gap-4">

          <p className="text-sm text-zinc-500 leading-relaxed max-w-[220px]">

            {subtitle}

          </p>

          {/* Live Dot */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/10">

            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>

            <span className="text-[11px] uppercase tracking-[0.22em] text-emerald-400 font-medium">

              Live
            </span>

          </div>

        </div>

        {/* Bottom Accent */}
        <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/[0.05]">

          <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-[0.18em]">

            <Activity
              size={12}
            />

            ERP Metrics

          </div>

          <div className="text-xs uppercase tracking-[0.18em] text-zinc-600">

            Updated Now
          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default MiniAnalyticsCard;