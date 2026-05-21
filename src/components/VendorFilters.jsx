import {
  Filter,
  Sparkles,
} from "lucide-react";

function VendorFilters({
  activeFilter,
  setActiveFilter,
}) {

  const filters = [

    {
      label: "All",

      color:
        "from-white to-zinc-300",
    },

    {
      label:
        "Active",

      color:
        "from-emerald-400 to-green-500",
    },

    {
      label:
        "Busy",

      color:
        "from-yellow-400 to-amber-500",
    },

    {
      label:
        "Inactive",

      color:
        "from-zinc-400 to-zinc-600",
    },

    {
      label:
        "Blacklisted",

      color:
        "from-red-400 to-rose-500",
    },
  ];

  return (

    <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[32px] p-5 backdrop-blur-2xl">

      {/* Glow */}
      <div className="absolute top-[-90px] right-[-90px] w-[200px] h-[200px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">

          <div className="w-11 h-11 rounded-2xl bg-yellow-500/10 border border-yellow-500/10 text-yellow-400 flex items-center justify-center">

            <Filter
              size={18}
            />

          </div>

          <div>

            <div className="flex items-center gap-2">

              <Sparkles
                size={13}
                className="text-yellow-400"
              />

              <p className="text-xs uppercase tracking-[0.25em] text-yellow-400 font-semibold">

                Vendor Filters

              </p>

            </div>

            <h3 className="text-lg font-semibold text-white mt-1">

              Operational Categories

            </h3>

          </div>

        </div>

        {/* Buttons */}
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
                  className={`group relative overflow-hidden px-5 py-3 rounded-2xl transition-all duration-300 text-sm font-medium border whitespace-nowrap ${
                    isActive

                      ? "border-yellow-400 text-black shadow-[0_0_25px_rgba(250,204,21,0.18)]"

                      : "bg-white/[0.03] border-white/10 text-zinc-300 hover:bg-white/[0.06] hover:border-yellow-500/20 hover:text-white"
                  }`}
                >

                  {/* Active */}
                  {isActive && (

                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${filter.color}`}
                    ></div>

                  )}

                  {/* Hover */}
                  {!isActive && (

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-yellow-500/[0.03] to-transparent"></div>

                  )}

                  {/* Text */}
                  <span className="relative z-10 flex items-center gap-2">

                    {isActive && (

                      <Sparkles
                        size={13}
                      />

                    )}

                    {
                      filter.label
                    }

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

export default VendorFilters;