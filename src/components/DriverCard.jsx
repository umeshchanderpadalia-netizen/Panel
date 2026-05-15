import {
  Car,
  Wifi,
  Clock3,
} from "lucide-react";

function DriverCard({
  driver,
}) {

  const isOnline =
    driver.status === "Online";

  const isOnTrip =
    driver.status === "On Trip";

  return (
    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] p-6 backdrop-blur-xl hover:border-white/20 hover:-translate-y-1 transition-all duration-300">

      {/* Glow */}
      <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="relative z-10">

        {/* Top */}
        <div className="flex items-start justify-between">

          {/* Avatar */}
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400"></div>

          {/* Status */}
          <div
            className={`px-4 py-2 rounded-xl text-sm font-medium ${
              isOnline
                ? "bg-emerald-500/10 text-emerald-400"
                : isOnTrip
                ? "bg-yellow-500/10 text-yellow-400"
                : "bg-red-500/10 text-red-400"
            }`}
          >

            {driver.status}

          </div>

        </div>

        {/* Info */}
        <div className="mt-6">

          <h3 className="text-2xl font-bold text-white">
            {driver.name}
          </h3>

          <p className="text-slate-400 mt-2">
            {driver.vehicle}
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mt-8">

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">

            <div className="flex items-center gap-3 text-slate-400">

              <Car size={18} />

              <p className="text-sm">
                Rides
              </p>

            </div>

            <h4 className="text-2xl font-bold mt-3">
              {driver.rides}
            </h4>

          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">

            <div className="flex items-center gap-3 text-slate-400">

              {isOnline ? (
                <Wifi size={18} />
              ) : (
                <Clock3 size={18} />
              )}

              <p className="text-sm">
                Status
              </p>

            </div>

            <h4 className="text-lg font-semibold mt-3">
              {driver.status}
            </h4>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DriverCard;