import {
  Filter,
  Sparkles,
} from "lucide-react";

function TripFilters({
  activeFilter,
  setActiveFilter,
}) {

  const filters = [

    "All",

    "Pending",

    "Confirmed",

    "Driver Assigned",

    "Ongoing",

    "Completed",

    "Cancelled",
  ];

  return (

    <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[32px] p-5 backdrop-blur-2xl">

      {/* Glow */}
      <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">

          <div className="w-11 h-11 rounded-2xl bg-yellow-500/10 border border-yellow-500/10 text-yellow-400 flex items-center justify-center">

            <Filter
              size={18}
            />

          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-yellow-400 font-semibold">

              Booking Filters

            </p>

            <h3 className="text-lg font-semibold text-white mt-1">

              Filter Operations

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

              const active =
                activeFilter ===
                filter;

              return (

                <button
                  key={index}
                  onClick={() =>
                    setActiveFilter(
                      filter
                    )
                  }
                  className={`group relative overflow-hidden px-5 py-3 rounded-2xl transition-all duration-300 text-sm font-medium border whitespace-nowrap ${
                    active

                      ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.18)]"

                      : "bg-white/[0.03] border-white/10 text-zinc-300 hover:bg-white/[0.06] hover:border-yellow-500/20 hover:text-white"
                  }`}
                >

                  {!active && (

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-yellow-500/[0.03] to-transparent"></div>

                  )}

                  <span className="relative z-10 flex items-center gap-2">

                    {active && (

                      <Sparkles
                        size={14}
                      />

                    )}

                    {filter}

                  </span>

                </button>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
}

export default TripFilters;