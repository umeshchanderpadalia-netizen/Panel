import {
  FileSearch,
} from "lucide-react";

function EmptyState({
  title = "No Data Available",
  description = "There is currently no operational data available for this section.",
  icon: Icon = FileSearch,
  action,
}) {

  return (

    <div className="relative overflow-hidden flex flex-col items-center justify-center text-center py-24 px-6 rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl hover:border-yellow-500/20 transition-all duration-300">

      {/* Glow */}
      <div className="absolute top-[-100px] w-[240px] h-[240px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] left-[-120px] w-[240px] h-[240px] bg-amber-500/10 blur-[120px] rounded-full"></div>

      {/* Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

      {/* Icon */}
      <div className="relative z-10 w-24 h-24 rounded-[30px] bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 shadow-[0_0_35px_rgba(250,204,21,0.15)]">

        <Icon size={40} />

      </div>

      {/* Content */}
      <div className="relative z-10 mt-10 max-w-2xl">

        <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

          Empty State

        </p>

        <h2 className="text-4xl lg:text-5xl font-bold text-white mt-5 tracking-tight leading-tight">

          {title}

        </h2>

        <p className="text-zinc-400 mt-5 leading-relaxed text-base lg:text-lg max-w-xl mx-auto">

          {description}

        </p>

        {/* Optional Action */}
        {action && (

          <div className="mt-8 flex items-center justify-center">

            {action}

          </div>

        )}

      </div>

      {/* Bottom Blur */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black/10 to-transparent"></div>

    </div>
  );
}

export default EmptyState;