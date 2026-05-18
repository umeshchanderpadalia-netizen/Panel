import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

function InsightsCard({
  title,
  value,
  growth,
  positive = true,
}) {

  return (
    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] p-6 backdrop-blur-xl hover:border-yellow-500/20 hover:-translate-y-1 transition-all duration-300">

      {/* Glow */}
      <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

      <div className="relative z-10">

        {/* Top */}
        <div className="flex items-center justify-between">

          <p className="text-zinc-400 text-sm tracking-wide">
            {title}
          </p>

          <div
            className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${
              positive
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                : "bg-red-500/10 text-red-400 border-red-500/20"
            }`}
          >

            {positive ? (
              <TrendingUp size={20} />
            ) : (
              <TrendingDown size={20} />
            )}

          </div>

        </div>

        {/* Value */}
        <h2 className="text-4xl font-bold mt-7 text-white tracking-tight">
          {value}
        </h2>

        {/* Growth */}
        <p
          className={`mt-4 text-sm font-medium ${
            positive
              ? "text-emerald-400"
              : "text-red-400"
          }`}
        >

          {growth}

        </p>

      </div>

    </div>
  );
}

export default InsightsCard;