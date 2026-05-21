function SkeletonCard() {

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[34px] p-6 backdrop-blur-2xl animate-pulse">

      {/* Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

      {/* Shimmer */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.2s_infinite] bg-gradient-to-r from-transparent via-yellow-400/[0.05] to-transparent"></div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

      <div className="relative z-10">

        {/* Top */}
        <div className="flex items-start justify-between">

          <div className="space-y-4">

            <div className="w-32 h-4 rounded-full bg-white/10"></div>

            <div className="w-20 h-3 rounded-full bg-white/5"></div>

          </div>

          <div className="w-14 h-14 rounded-3xl bg-yellow-400/10"></div>

        </div>

        {/* Value */}
        <div className="mt-10">

          <div className="w-40 h-12 rounded-2xl bg-white/10"></div>

        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-8">

          <div className="w-36 h-4 rounded-full bg-white/10"></div>

          <div className="w-20 h-8 rounded-xl bg-emerald-500/10"></div>

        </div>

      </div>

    </div>
  );
}

export default SkeletonCard;