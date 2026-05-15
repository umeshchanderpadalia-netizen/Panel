import { TrendingUp } from "lucide-react";

function PerformancePanel({ trips }) {

  const totalTrips = trips.length;

  const completedTrips = trips.filter(
    (trip) => trip.status === "Completed"
  ).length;

  const ongoingTrips = trips.filter(
    (trip) => trip.status === "Ongoing"
  ).length;

  const cancelledTrips = trips.filter(
    (trip) => trip.status === "Cancelled"
  ).length;

  const completionRate =
    totalTrips > 0
      ? Math.round((completedTrips / totalTrips) * 100)
      : 0;

  const ongoingRate =
    totalTrips > 0
      ? Math.round((ongoingTrips / totalTrips) * 100)
      : 0;

  const cancelledRate =
    totalTrips > 0
      ? Math.round((cancelledTrips / totalTrips) * 100)
      : 0;

  const metrics = [
    {
      label: "Ride Completion",
      value: completionRate,
      color: "bg-emerald-500",
    },

    {
      label: "Ongoing Trips",
      value: ongoingRate,
      color: "bg-yellow-500",
    },

    {
      label: "Cancelled Trips",
      value: cancelledRate,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] p-7 backdrop-blur-xl hover:border-white/20 transition-all duration-300">

      {/* Glow */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[220px] h-[220px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      {/* Top Glow */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

      <div className="relative z-10">

        {/* Heading */}
        <div className="flex items-center justify-between mb-10">

          <div>

            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Metrics
            </p>

            <h3 className="text-2xl font-bold mt-3">
              Performance
            </h3>

          </div>

          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/10">

            <TrendingUp size={22} />

          </div>

        </div>

        {/* Metrics */}
        <div className="space-y-8">

          {metrics.map((metric, index) => (

            <div key={index}>

              <div className="flex items-center justify-between mb-3">

                <p className="text-sm text-slate-400">
                  {metric.label}
                </p>

                <p className="text-sm font-semibold text-white">
                  {metric.value}%
                </p>

              </div>

              <div className="w-full h-2.5 rounded-full bg-white/5 overflow-hidden">

                <div
                  className={`h-full rounded-full ${metric.color}`}
                  style={{
                    width: `${metric.value}%`,
                  }}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default PerformancePanel;