import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import {
  TrendingUp,
  Activity,
  IndianRupee,
} from "lucide-react";

import MiniAnalyticsCard from "./MiniAnalyticsCard";

function RevenueChart({
  trips,
}) {

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

  const totalExpenses =
    trips.reduce(
      (
        total,
        trip
      ) =>
        total +
        Number(
          trip.totalExpenses ||
            0
        ),
      0
    );

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

  const chartData = [

    {
      name: "Revenue",
      value:
        totalRevenue,
    },

    {
      name: "Expenses",
      value:
        totalExpenses,
    },

    {
      name: "Profit",
      value:
        totalProfit,
    },
  ];

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[38px] p-7 lg:p-9 backdrop-blur-2xl hover:border-yellow-500/20 transition-all duration-500">

      {/* Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[260px] h-[260px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] left-[-120px] w-[260px] h-[260px] bg-amber-500/5 blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Top */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8 mb-12">

          {/* Left */}
          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 font-medium">

              ERP Financial Intelligence

            </p>

            <h3 className="text-5xl font-bold mt-4 tracking-tight text-white">

              ERP Financial Analytics

            </h3>

            <p className="text-zinc-500 mt-4 max-w-2xl leading-relaxed">

              Real-time ERP financial monitoring including revenue,
              operational expenses and business profitability analytics.

            </p>

          </div>

          {/* Right */}
          <div className="flex flex-wrap gap-4">

            {/* Revenue */}
            <div className="min-w-[180px] bg-white/[0.03] border border-white/10 rounded-3xl p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-zinc-500 text-sm">

                    Revenue

                  </p>

                  <h3 className="text-3xl font-bold mt-3 text-white">

                    ₹
                    {totalRevenue.toLocaleString()}

                  </h3>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">

                  <IndianRupee
                    size={24}
                  />

                </div>

              </div>

            </div>

            {/* Profit */}
            <div className="min-w-[180px] bg-white/[0.03] border border-white/10 rounded-3xl p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-zinc-500 text-sm">

                    Profit

                  </p>

                  <h3 className="text-3xl font-bold mt-3 text-white">

                    ₹
                    {totalProfit.toLocaleString()}

                  </h3>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">

                  <TrendingUp
                    size={24}
                  />

                </div>

              </div>

            </div>

            {/* Activity */}
            <div className="min-w-[180px] bg-white/[0.03] border border-white/10 rounded-3xl p-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-zinc-500 text-sm">

                    Activity

                  </p>

                  <h3 className="text-3xl font-bold mt-3 text-white">

                    High

                  </h3>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center">

                  <Activity
                    size={24}
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Mini Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">

          <MiniAnalyticsCard
            title="Revenue"
            value={`₹${totalRevenue}`}
            subtitle="Business revenue"
          />

          <MiniAnalyticsCard
            title="Expenses"
            value={`₹${totalExpenses}`}
            subtitle="Operational expenses"
          />

          <MiniAnalyticsCard
            title="Profit"
            value={`₹${totalProfit}`}
            subtitle="Net business profit"
          />

        </div>

        {/* Chart */}
        <div className="h-[420px] rounded-[30px] bg-black/20 border border-white/5 p-4">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <AreaChart
              data={chartData}
            >

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
                    stopOpacity={
                      0.45
                    }
                  />

                  <stop
                    offset="95%"
                    stopColor="#facc15"
                    stopOpacity={
                      0
                    }
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.04)"
              />

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#71717a",
                }}
              />

              <Tooltip
                contentStyle={{
                  background:
                    "#090909",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  borderRadius:
                    "20px",
                  color: "#fff",
                  backdropFilter:
                    "blur(14px)",
                }}
              />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#facc15"
                fillOpacity={1}
                fill="url(#colorTrips)"
                strokeWidth={4}
                activeDot={{
                  r: 7,
                }}
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default RevenueChart;