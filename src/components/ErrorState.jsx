import {
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

function ErrorState({
  message,
  retry,
}) {

  return (
    <div className="relative overflow-hidden bg-red-500/5 border border-red-500/20 rounded-[36px] p-10 backdrop-blur-xl text-center">

      {/* Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-red-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 flex flex-col items-center">

        {/* Icon */}
        <div className="w-16 h-16 rounded-3xl bg-red-500/10 text-red-400 flex items-center justify-center">

          <AlertTriangle
            size={30}
          />

        </div>

        {/* Text */}
        <h2 className="text-3xl font-bold mt-6 text-white">
          Something went wrong
        </h2>

        <p className="text-slate-400 mt-4 max-w-md leading-relaxed">
          {message}
        </p>

        {/* Retry */}
        <button
          onClick={retry}
          className="mt-8 inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-red-500 hover:bg-red-600 transition-all duration-300 font-semibold"
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