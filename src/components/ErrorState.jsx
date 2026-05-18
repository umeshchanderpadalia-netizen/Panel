import {
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

function ErrorState({
  message,
  retry,
}) {

  return (
    <div className="relative overflow-hidden bg-red-500/[0.04] border border-red-500/20 rounded-[36px] p-10 backdrop-blur-xl text-center">

      {/* Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-red-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 flex flex-col items-center">

        {/* Icon */}
        <div className="w-16 h-16 rounded-3xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center shadow-[0_0_25px_rgba(239,68,68,0.15)]">

          <AlertTriangle
            size={30}
          />

        </div>

        {/* Text */}
        <h2 className="text-3xl font-bold mt-6 text-white tracking-tight">
          Something went wrong
        </h2>

        <p className="text-zinc-400 mt-4 max-w-md leading-relaxed">
          {message}
        </p>

        {/* Retry */}
        <button
          onClick={retry}
          className="mt-8 inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:scale-[1.02] transition-all duration-300 font-semibold text-black shadow-[0_0_30px_rgba(250,204,21,0.18)]"
        >

          <RefreshCw
            size={18}
          />

          Retry Request

        </button>

      </div>

    </div>
  );
}

export default ErrorState;