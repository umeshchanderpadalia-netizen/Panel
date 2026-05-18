import {
  CheckCircle2,
} from "lucide-react";

function Toast({
  message,
}) {

  return (
    <div className="fixed top-6 right-6 z-[100] animate-[fadeIn_0.35s_ease]">

      <div className="relative overflow-hidden flex items-center gap-4 bg-[#0a0a0a]/95 border border-white/10 backdrop-blur-2xl px-6 py-5 rounded-3xl shadow-2xl min-w-[320px]">

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-amber-500/5"></div>

        {/* Icon */}
        <div className="relative z-10 w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">

          <CheckCircle2
            size={22}
          />

        </div>

        {/* Text */}
        <div className="relative z-10">

          <p className="font-semibold text-white">
            Success
          </p>

          <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
            {message}
          </p>

        </div>

      </div>

    </div>
  );
}

export default Toast;