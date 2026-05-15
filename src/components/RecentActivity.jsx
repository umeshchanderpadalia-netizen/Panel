import {
  CheckCircle2,
  XCircle,
  Clock3,
} from "lucide-react";

function RecentActivity({ trips }) {

  const latestTrips = [...trips].slice(0, 5);

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/[0.04] transition">

      {/* Heading */}
      <div className="mb-6">

        <h3 className="text-xl font-semibold">
          Recent Activity
        </h3>

        <p className="text-slate-400 mt-1">
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
              className="flex items-start gap-4"
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

                <p className="text-sm text-slate-400 mt-1">

                  Ride to {trip.destination}

                </p>

                <p
                  className={`text-sm mt-1 ${
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
  );
}

export default RecentActivity;