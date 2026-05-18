import { FileSearch } from "lucide-react";

function EmptyState({
  title,
  description,
}) {

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center text-center py-24 px-6 rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-yellow-500/20 transition-all duration-300">

      {/* Glow */}
      <div className="absolute top-[-80px] w-[220px] h-[220px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

      {/* Icon */}
      <div className="relative z-10 w-20 h-20 rounded-3xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.15)]">

        <FileSearch size={34} />

      </div>

      {/* Content */}
      <div className="relative z-10 mt-8">

        <h3 className="text-2xl font-bold text-white tracking-tight">
          {title}
        </h3>

        <p className="text-zinc-400 mt-4 max-w-md leading-relaxed">
          {description}
        </p>

      </div>

    </div>
  );
}

export default EmptyState;