import { FileSearch } from "lucide-react";

function EmptyState({
  title,
  description,
}) {

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center text-center py-24 px-6 rounded-[32px] border border-white/10 bg-white/[0.03]">

      {/* Glow */}
      <div className="absolute top-[-80px] w-[220px] h-[220px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      {/* Icon */}
      <div className="relative z-10 w-20 h-20 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/10">

        <FileSearch size={34} />

      </div>

      {/* Content */}
      <div className="relative z-10 mt-8">

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="text-slate-400 mt-4 max-w-md leading-relaxed">
          {description}
        </p>

      </div>

    </div>
  );
}

export default EmptyState;