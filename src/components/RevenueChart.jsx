import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import MiniAnalyticsCard from "./MiniAnalyticsCard";

function RevenueChart({ trips }) {

  const completedTrips = trips.filter(
    (trip) => trip.status === "Completed"
  ).length;

  const ongoingTrips = trips.filter(
    (trip) => trip.status === "Ongoing"
  ).length;

  const cancelledTrips = trips.filter(
    (trip) => trip.status === "Cancelled"
  ).length;

  // Analytics Data
  const chartData = [
    {
      name: "Mon",
      trips: completedTrips + 2,
    },

    {
      name: "Tue",
      trips: ongoingTrips + 4,
    },

    {
      name: "Wed",
      trips: completedTrips + ongoingTrips,
    },

    {
      name: "Thu",
      trips: cancelledTrips + 3,
    },

    {
      name: "Fri",
      trips: completedTrips + 6,
    },

    {
      name: "Sat",
      trips: ongoingTrips + 8,
    },

    {
      name: "Sun",
      trips: completedTrips + ongoingTrips + 2,
    },
  ];

  return (
    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[36px] p-7 lg:p-9 backdrop-blur-xl hover:border-yellow-500/20 transition-all duration-300">

      {/* Glow */}
      <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400 font-medium">
              Analytics
            </p>

            <h3 className="text-4xl font-bold mt-3 tracking-tight text-white">
              Ride Insights
            </h3>

            <p className="text-zinc-400 mt-3 text-base">
              Live operational ride analytics overview
            </p>

          </div>

        </div>

        {/* Mini Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">

          <MiniAnalyticsCard
            title="Completed"
            value={completedTrips}
            subtitle="Successful rides"
          />

          <MiniAnalyticsCard
            title="Ongoing"
            value={ongoingTrips}
            subtitle="Trips in progress"
          />

          <MiniAnalyticsCard
            title="Cancelled"
            value={cancelledTrips}
            subtitle="Ride cancellations"
          />

        </div>

        {/* Chart */}
        <div className="h-[360px]">

          <ResponsiveContainer width="100%" height="100%">

            <AreaChart data={chartData}>

              <defs>

                <linearGradient
                  id="colorTrips"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="5%"
                    stopColor="#facc15"
                    stopOpacity={0.5}
                  />

                  <stop
                    offset="95%"
                    stopColor="#facc15"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.05)"
              />

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#a1a1aa" }}
              />

              <Tooltip
                contentStyle={{
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                  color: "#fff",
                  backdropFilter: "blur(12px)",
                }}
              />

              <Area
                type="monotone"
                dataKey="trips"
                stroke="#facc15"
                fillOpacity={1}
                fill="url(#colorTrips)"
                strokeWidth={4}
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default RevenueChart;