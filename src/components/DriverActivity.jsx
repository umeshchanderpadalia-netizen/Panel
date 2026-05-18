import {
  Wifi,
  Clock3,
  Car,
} from "lucide-react";

import driversData from "../data/drivers";

function DriverActivity() {

  return (
    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[36px] p-7 backdrop-blur-xl hover:border-yellow-500/20 transition-all duration-300">

      {/* Glow */}
      <div className="absolute bottom-[-100px] left-[-100px] w-[220px] h-[220px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="mb-10">

          <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 font-medium">
            Drivers
          </p>

          <h2 className="text-3xl font-bold mt-3 tracking-tight text-white">
            Live Activity
          </h2>

        </div>

        {/* Drivers */}
        <div className="space-y-5">

          {driversData.map(
            (driver) => {

              const isOnline =
                driver.status ===
                "Online";

              return (
                <div
                  key={driver.id}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-yellow-500/10 transition-all duration-300"
                >

                  {/* Left */}
                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-[0_0_25px_rgba(250,204,21,0.18)]"></div>

                    <div>

                      <h3 className="font-semibold text-white">
                        {
                          driver.name
                        }
                      </h3>

                      <p className="text-sm text-zinc-500 mt-1">
                        {
                          driver.vehicle
                        }
                      </p>

                    </div>

                  </div>

                  {/* Status */}
                  <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm ${
                      isOnline
                        ? "bg-emerald-500/10 text-emerald-400"
                        : driver.status ===
                          "On Trip"
                        ? "bg-yellow-500/10 text-yellow-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >

                    {isOnline ? (
                      <Wifi size={16} />
                    ) : driver.status ===
                      "On Trip" ? (
                      <Car size={16} />
                    ) : (
                      <Clock3 size={16} />
                    )}

                    {driver.status}

                  </div>

                </div>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
}

export default DriverActivity;