import {
  TrendingUp,
  Activity,
  ShieldCheck,
  AlertTriangle,
  IndianRupee,
} from "lucide-react";

function PerformancePanel({
  trips,
}) {

  const totalTrips =
    trips.length;

  const completedTrips =
    trips.filter(
      (trip) =>
        trip.tripStatus ===
        "Completed"
    ).length;

  const ongoingTrips =
    trips.filter(
      (trip) =>
        trip.tripStatus ===
        "Ongoing"
    ).length;

  const cancelledTrips =
    trips.filter(
      (trip) =>
        trip.tripStatus ===
        "Cancelled"
    ).length;

  const paidTrips =
    trips.filter(
      (trip) =>
        trip.paymentStatus ===
        "Paid"
    ).length;

  const totalProfit =
    trips.reduce(
      (
        total,
        trip
      ) =>
        total +
        Number(
          trip.profit || 0
        ),
      0
    );

  const totalRevenue =
    trips.reduce(
      (
        total,
        trip
      ) =>
        total +
        Number(
          trip.total || 0
        ),
      0
    );

  const profitMargin =
    totalRevenue > 0
      ? Math.round(
          (totalProfit /
            totalRevenue) *
            100
        )
      : 0;

  const completionRate =
    totalTrips > 0
      ? Math.round(
          (completedTrips /
            totalTrips) *
            100
        )
      : 0;

  const paymentRate =
    totalTrips > 0
      ? Math.round(
          (paidTrips /
            totalTrips) *
            100
        )
      : 0;

  const ongoingRate =
    totalTrips > 0
      ? Math.round(
          (ongoingTrips /
            totalTrips) *
            100
        )
      : 0;

  const metrics = [

    {
      label:
        "Trip Completion",

      value:
        completionRate,

      icon:
        ShieldCheck,

      color:
        "from-yellow-400 to-amber-500",

      bg:
        "bg-yellow-500/10 text-yellow-400",
    },

    {
      label:
        "Payment Success",

      value:
        paymentRate,

      icon:
        IndianRupee,

      color:
        "from-emerald-400 to-green-500",

      bg:
        "bg-emerald-500/10 text-emerald-400",
    },

    {
      label:
        "Profit Margin",

      value:
        profitMargin,

      icon:
        TrendingUp,

      color:
        "from-cyan-400 to-blue-500",

      bg:
        "bg-cyan-500/10 text-cyan-400",
    },

    {
      label:
        "Ongoing Trips",

      value:
        ongoingRate,

      icon:
        Activity,

      color:
        "from-blue-400 to-indigo-500",

      bg:
        "bg-blue-500/10 text-blue-400",
    },

    {
      label:
        "Cancelled Trips",

      value:
        cancelledTrips,

      icon:
        AlertTriangle,

      color:
        "from-red-400 to-rose-500",

      bg:
        "bg-red-500/10 text-red-400",

      isCount:
        true,
    },
  ];

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[36px] p-7 backdrop-blur-2xl hover:border-yellow-500/20 transition-all duration-500">

      {/* Glow */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[240px] h-[240px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

      <div className="absolute top-[-100px] left-[-100px] w-[240px] h-[240px] bg-amber-500/5 blur-[120px] rounded-full"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">

          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 font-medium">

              ERP Intelligence

            </p>

            <h3 className="text-3xl font-bold mt-4 tracking-tight text-white">

              Performance Analytics

            </h3>

            <p className="text-zinc-500 mt-4 leading-relaxed">

              Financial performance, operational success
              and ERP workflow monitoring.

            </p>

          </div>

          <div className="w-16 h-16 rounded-3xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 shadow-[0_0_35px_rgba(250,204,21,0.12)]">

            <TrendingUp
              size={28}
            />

          </div>

        </div>

        {/* Metrics */}
        <div className="space-y-8">

          {metrics.map(
            (
              metric,
              index
            ) => {

              const Icon =
                metric.icon;

              return (

                <div
                  key={index}
                  className="relative overflow-hidden bg-white/[0.03] border border-white/5 rounded-[28px] p-5 hover:border-yellow-500/10 transition-all duration-300"
                >

                  <div className="flex items-start justify-between mb-5">

                    <div className="flex items-center gap-4">

                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${metric.bg}`}
                      >

                        <Icon
                          size={24}
                        />

                      </div>

                      <div>

                        <p className="text-sm text-zinc-500">

                          {metric.label}

                        </p>

                        <h4 className="text-3xl font-bold mt-2 text-white">

                          {metric.value}

                          {!metric.isCount &&
                            "%"}

                        </h4>

                      </div>

                    </div>

                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/10">

                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>

                      <span className="text-xs uppercase tracking-[0.2em] text-emerald-400">

                        Live

                      </span>

                    </div>

                  </div>

                  {!metric.isCount && (

                    <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">

                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${metric.color}`}
                        style={{
                          width: `${metric.value}%`,
                        }}
                      ></div>

                    </div>

                  )}

                </div>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
}

export default PerformancePanel;