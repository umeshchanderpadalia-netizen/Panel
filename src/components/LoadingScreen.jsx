import {
  LoaderCircle,
} from "lucide-react";

function LoadingScreen({
  title = "Loading Dashboard",
  description = "Preparing operational data and initializing platform services...",
}) {

  return (

    <div className="relative overflow-hidden min-h-[500px] flex items-center justify-center rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl">

      {/* Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] left-[-120px] w-[260px] h-[260px] bg-amber-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Loader */}
        <div className="relative flex items-center justify-center">

          <div className="absolute w-28 h-28 rounded-full border border-yellow-500/10"></div>

          <div className="absolute w-20 h-20 rounded-full border border-yellow-400/20"></div>

          <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-[0_0_35px_rgba(250,204,21,0.18)] animate-pulse">

            <LoaderCircle
              size={28}
              className="text-black animate-spin"
            />

          </div>

        </div>

        {/* Content */}
        <div className="mt-10 max-w-xl">

          <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

            System Initialization

          </p>

          <h2 className="text-4xl font-bold text-white mt-5 leading-tight">

            {title}

          </h2>

          <p className="text-zinc-400 mt-5 leading-relaxed text-base">

            {description}

          </p>

        </div>

      </div>

    </div>
  );
}

export default LoadingScreen;