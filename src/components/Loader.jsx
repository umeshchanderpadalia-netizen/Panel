import SkeletonCard from "./SkeletonCard";

function Loader() {

  return (
    <div className="space-y-6">

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />

      </div>

      {/* Main Loading Blocks */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* Left */}
        <div className="xl:col-span-8">

          <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[36px] h-[500px]">

            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"></div>

          </div>

        </div>

        {/* Right */}
        <div className="xl:col-span-4 space-y-6">

          <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] h-[240px]">

            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"></div>

          </div>

          <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] h-[240px]">

            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"></div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Loader;