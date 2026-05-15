function SkeletonCard() {

  return (
    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] p-6 animate-pulse">

      {/* Top */}
      <div className="flex items-center justify-between">

        <div className="w-28 h-4 rounded-lg bg-white/10"></div>

        <div className="w-12 h-12 rounded-2xl bg-white/10"></div>

      </div>

      {/* Value */}
      <div className="w-32 h-10 rounded-xl bg-white/10 mt-8"></div>

      {/* Subtitle */}
      <div className="w-40 h-4 rounded-lg bg-white/10 mt-6"></div>

    </div>
  );
}

export default SkeletonCard;