import {
  TrendingUp,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

function StatsCard({
  title,
  value,
  growth,
  icon: Icon = TrendingUp,
}) {

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.4,
      }}
      className="group relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[34px] p-7 backdrop-blur-2xl hover:border-yellow-500/20 transition-all duration-500"
    >

      {/* Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-yellow-400/[0.04] via-transparent to-amber-500/[0.06]"></div>

      {/* Top Overlay */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-start justify-between">

          <div>

            <p className="text-sm text-zinc-500 tracking-wide">

              {title}

            </p>

            <div className="flex items-center gap-2 mt-4">

              <Sparkles
                size={14}
                className="text-yellow-400"
              />

              <span className="text-xs uppercase tracking-[0.2em] text-yellow-400">

                ERP Insight

              </span>

            </div>

          </div>

          {/* Icon */}
          <div className="w-14 h-14 rounded-3xl bg-yellow-500/10 border border-yellow-500/10 flex items-center justify-center text-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.08)]">

            <Icon
              size={24}
            />

          </div>

        </div>

        {/* Value */}
        <h3 className="text-5xl font-bold mt-10 tracking-tight text-white">

          {value}

        </h3>

        {/* Footer */}
        <div className="flex items-center justify-between mt-8">

          <p className="text-sm font-medium text-emerald-400">

            {growth}

          </p>

          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/10">

            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>

            <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-400">

              Live

            </span>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default StatsCard;