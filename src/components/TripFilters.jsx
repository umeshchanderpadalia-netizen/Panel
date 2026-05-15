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
          onClick={() => setActiveFilter(filter)}
          className={`px-5 py-2 rounded-2xl transition text-sm font-medium ${
            activeFilter === filter
              ? "bg-blue-500 text-white"
              : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
          }`}
        >

          {filter}

        </button>

      ))}

    </div>
  );
}

export default TripFilters;