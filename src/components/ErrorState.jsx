import {
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

function ErrorState({
  title = "Something Went Wrong",
  message = "The system was unable to process your request at this time.",
  retry,
}) {

  return (

    <div className="relative overflow-hidden rounded-[36px] border border-red-500/20 bg-red-500/[0.04] backdrop-blur-2xl p-10 lg:p-14 text-center">

      {/* Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-red-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-120px] left-[-120px] w-[240px] h-[240px] bg-orange-500/10 blur-[120px] rounded-full"></div>

      {/* Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center">

        {/* Icon */}
        <div className="w-24 h-24 rounded-[30px] bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center shadow-[0_0_35px_rgba(239,68,68,0.15)]">

          <AlertTriangle
            size={42}
          />

        </div>

        {/* Content */}
        <div className="mt-10 max-w-2xl">

          <p className="text-xs uppercase tracking-[0.35em] text-red-400 font-semibold">

            System Error

          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-5 text-white tracking-tight leading-tight">

            {title}

          </h2>

          <p className="text-zinc-400 mt-5 leading-relaxed text-base lg:text-lg max-w-xl mx-auto">

            {message}

          </p>

        </div>

        {/* Retry */}
        {retry && (

          <button
            onClick={retry}
            className="group relative overflow-hidden mt-10 inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:scale-[1.02] transition-all duration-300 font-semibold text-black shadow-[0_0_35px_rgba(250,204,21,0.18)]"
          >

            {/* Shine */}
            <div className="absolute top-0 left-[-120%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[120%] transition-all duration-1000"></div>

            <RefreshCw
              size={18}
              className="relative z-10"
            />

            <span className="relative z-10">

              Retry Request

            </span>

          </button>

        )}

      </div>

    </div>
  );
}

export default ErrorState;