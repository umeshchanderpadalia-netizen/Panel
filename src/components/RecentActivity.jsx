import {
  CheckCircle2,
  XCircle,
  Clock3,
} from "lucide-react";

function RecentActivity({ trips }) {

  const latestTrips = [...trips].slice(0, 5);

  return (
    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] p-6 hover:border-yellow-500/20 transition-all duration-300 backdrop-blur-xl">

      {/* Glow */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[220px] h-[220px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

      <div className="relative z-10">

        {/* Heading */}
        <div className="mb-6">

          <p className="text-sm uppercase tracking-[0.2em] text-yellow-400 font-medium">
            Activity
          </p>

          <h3 className="text-2xl font-bold mt-3 text-white">
            Recent Activity
          </h3>

          <p className="text-zinc-400 mt-2">
            Latest ride updates
          </p>

        </div>

        {/* Activities */}
        <div className="space-y-5">

          {latestTrips.map((trip, index) => {

            const isCompleted =
              trip.status === "Completed";

            const isCancelled =
              trip.status === "Cancelled";

            return (
              <div
                key={index}
                className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/[0.03] transition-all duration-300"
              >

                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                    isCompleted
                      ? "bg-green-500/20 text-green-400"
                      : isCancelled
                      ? "bg-red-500/20 text-red-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >

                  {isCompleted ? (
                    <CheckCircle2 size={20} />
                  ) : isCancelled ? (
                    <XCircle size={20} />
                  ) : (
                    <Clock3 size={20} />
                  )}

                </div>

                {/* Content */}
                <div>

                  <p className="font-medium text-white">

                    {trip.customer}

                  </p>

                  <p className="text-sm text-zinc-400 mt-1">

                    Ride to {trip.destination}

                  </p>

                  <p
                    className={`text-sm mt-1 font-medium ${
                      isCompleted
                        ? "text-green-400"
                        : isCancelled
                        ? "text-red-400"
                        : "text-yellow-400"
                    }`}
                  >

                    {trip.status}

                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}

export default RecentActivity;