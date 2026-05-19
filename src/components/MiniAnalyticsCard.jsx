import {
  TrendingUp,
} from "lucide-react";

function MiniAnalyticsCard({
  title,
  value,
  subtitle,
}) {

  return (
    <div className="group relative overflow-hidden bg-[#0a0a0a]/80 border border-white/10 rounded-[30px] p-6 backdrop-blur-2xl hover:border-yellow-500/20 hover:-translate-y-1 transition-all duration-500">

      {/* Gradient Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-yellow-400/10 via-transparent to-amber-500/10"></div>

      {/* Main Glow */}
      <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

      {/* Top Overlay */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-start justify-between">

          <div>

            <p className="text-sm uppercase tracking-[0.15em] text-zinc-500">
              {title}
            </p>

            <h3 className="text-5xl font-bold mt-5 tracking-tight text-white">
              {value}
            </h3>

          </div>

          {/* Growth */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/10 text-emerald-400 text-sm font-medium">

            <TrendingUp
              size={14}
            />

            +12%

          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between">

          <p className="text-sm text-zinc-500 leading-relaxed">
            {subtitle}
          </p>

          {/* Live Dot */}
          <div className="flex items-center gap-2">

            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>

            <span className="text-xs uppercase tracking-[0.2em] text-emerald-400">
              Live
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MiniAnalyticsCard;