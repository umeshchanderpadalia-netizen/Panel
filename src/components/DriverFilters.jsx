function DriverFilters({
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
        "Available",

      color:
        "from-emerald-400 to-green-500",
    },

    {
      label:
        "On Trip",

      color:
        "from-yellow-400 to-amber-500",
    },

    {
      label:
        "Offline",

      color:
        "from-red-400 to-rose-500",
    },

    {
      label:
        "Inactive",

      color:
        "from-zinc-400 to-zinc-600",
    },
  ];

  return (

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

                  : "bg-white/[0.03] border-white/10 text-zinc-300 hover:bg-white/[0.06] hover:border-yellow-500/20"
              }`}
            >

              {/* Active Background */}
              {isActive && (

                <div
                  className={`absolute inset-0 bg-gradient-to-r ${filter.color}`}
                ></div>

              )}

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/[0.03]"></div>

              {/* Text */}
              <span className="relative z-10">

                {filter.label}

              </span>

            </button>
          );
        }
      )}

    </div>
  );
}

export default DriverFilters;