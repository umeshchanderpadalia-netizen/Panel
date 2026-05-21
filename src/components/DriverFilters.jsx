import {
  Filter,
  CircleDot,
} from "lucide-react";

function DriverFilters({
  activeFilter,
  setActiveFilter,
}) {

  const filters = [

    {
      label: "All",

      color:
        "from-white to-zinc-300",

      glow:
        "shadow-[0_0_30px_rgba(255,255,255,0.12)]",
    },

    {
      label:
        "Available",

      color:
        "from-emerald-400 to-green-500",

      glow:
        "shadow-[0_0_30px_rgba(16,185,129,0.22)]",
    },

    {
      label:
        "On Trip",

      color:
        "from-yellow-400 to-amber-500",

      glow:
        "shadow-[0_0_30px_rgba(250,204,21,0.22)]",
    },

    {
      label:
        "Offline",

      color:
        "from-red-400 to-rose-500",

      glow:
        "shadow-[0_0_30px_rgba(248,113,113,0.2)]",
    },

    {
      label:
        "Inactive",

      color:
        "from-zinc-400 to-zinc-600",

      glow:
        "shadow-[0_0_30px_rgba(113,113,122,0.2)]",
    },
  ];

  return (

    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl">

      {/* Glow */}
      <div className="absolute right-[-80px] top-[-80px] h-[180px] w-[180px] rounded-full bg-yellow-500/[0.06] blur-[100px]"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="mb-5 flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-500/10 border border-yellow-500/10">

            <Filter
              size={18}
              className="text-yellow-400"
            />

          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.28em] text-yellow-400 font-semibold">

              Driver Filters

            </p>

            <h3 className="mt-1 text-lg font-semibold text-white">

              Filter Driver Status

            </h3>

          </div>

        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">

          {filters.map(
            (
              filter,
              index
            ) => {

              const isActive =
                activeFilter ===
                filter.label;

              return (

                <button
                  key={index}
                  onClick={() =>
                    setActiveFilter(
                      filter.label
                    )
                  }
                  className={`group relative overflow-hidden rounded-2xl border px-5 py-3 transition-all duration-300 whitespace-nowrap ${
                    isActive

                      ? `border-transparent text-black ${filter.glow}`

                      : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-yellow-500/20 hover:bg-white/[0.06]"
                  }`}
                >

                  {/* Active Background */}
                  {isActive && (

                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${filter.color}`}
                    ></div>

                  )}

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100">

                    <div className="absolute inset-0 bg-white/[0.03]"></div>

                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex items-center gap-2">

                    <CircleDot
                      size={14}
                      className={
                        isActive
                          ? "text-black"
                          : "text-yellow-400"
                      }
                    />

                    <span className="text-sm font-semibold tracking-[0.02em]">

                      {
                        filter.label
                      }

                    </span>

                  </div>

                </button>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
}

export default DriverFilters;