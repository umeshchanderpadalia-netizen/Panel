function TripFilters({
  activeFilter,
  setActiveFilter,
}) {

  const filters = [
    "All",
    "Ongoing",
    "Completed",
    "Cancelled",
  ];

  return (
    <div className="flex flex-wrap gap-3">

      {filters.map((filter, index) => (

        <button
          key={index}
          onClick={() =>
            setActiveFilter(filter)
          }
          className={`px-5 py-3 rounded-2xl transition-all duration-300 text-sm font-medium border ${
            activeFilter === filter
              ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.18)]"
              : "bg-white/[0.03] border-white/10 text-zinc-300 hover:bg-white/[0.06] hover:border-yellow-500/20"
          }`}
        >

          {filter}

        </button>

      ))}

    </div>
  );
}

export default TripFilters;