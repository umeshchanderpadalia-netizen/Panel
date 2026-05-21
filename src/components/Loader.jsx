import SkeletonCard from "./SkeletonCard";

function Loader() {

  return (

    <div className="space-y-6 animate-pulse">

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />

      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[40px] h-[340px]">

        {/* Glow */}
        <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[-120px] left-[-120px] w-[240px] h-[240px] bg-amber-500/5 blur-[120px] rounded-full"></div>

        {/* Shimmer */}
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-yellow-400/[0.05] to-transparent"></div>

        </div>

        {/* Fake Content */}
        <div className="relative z-10 h-full p-8 flex flex-col justify-between">

          <div className="space-y-5">

            <div className="w-40 h-4 rounded-full bg-white/[0.06]"></div>

            <div className="w-[320px] h-12 rounded-2xl bg-white/[0.06]"></div>

            <div className="w-[500px] max-w-full h-4 rounded-full bg-white/[0.04]"></div>

            <div className="w-[420px] max-w-full h-4 rounded-full bg-white/[0.04]"></div>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {[1, 2, 3, 4].map(
              (item) => (

                <div
                  key={item}
                  className="h-24 rounded-3xl bg-white/[0.04] border border-white/[0.04]"
                ></div>
              )
            )}

          </div>

        </div>

      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* Left */}
        <div className="xl:col-span-8 space-y-6">

          {/* Chart */}
          <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[36px] h-[480px]">

            <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-yellow-400/[0.05] to-transparent"></div>

          </div>

          {/* Table */}
          <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[36px] h-[420px]">

            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-yellow-400/[0.05] to-transparent"></div>

          </div>

        </div>

        {/* Right */}
        <div className="xl:col-span-4 space-y-6">

          <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] h-[260px]">

            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-yellow-400/[0.05] to-transparent"></div>

          </div>

          <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] h-[320px]">

            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-yellow-400/[0.05] to-transparent"></div>

          </div>

          <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] h-[220px]">

            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-yellow-400/[0.05] to-transparent"></div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Loader;