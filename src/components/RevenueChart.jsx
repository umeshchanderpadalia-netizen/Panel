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
  Wallet,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

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
      name:
        "Revenue",

      value:
        totalRevenue,
    },

    {
      name:
        "Expenses",

      value:
        totalExpenses,
    },

    {
      name:
        "Profit",

      value:
        totalProfit,
    },
  ];

  const summaryCards = [

    {
      label:
        "Completed Trips",

      value:
        completedTrips,

      icon:
        TrendingUp,

      color:
        "bg-emerald-500/10 text-emerald-400 border-emerald-500/10",
    },

    {
      label:
        "Ongoing Trips",

      value:
        ongoingTrips,

      icon:
        Activity,

      color:
        "bg-yellow-500/10 text-yellow-400 border-yellow-500/10",
    },

    {
      label:
        "Cancelled Trips",

      value:
        cancelledTrips,

      icon:
        Wallet,

      color:
        "bg-red-500/10 text-red-400 border-red-500/10",
    },
  ];

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[40px] p-7 lg:p-9 backdrop-blur-3xl hover:border-yellow-500/20 transition-all duration-500">

      {/* Ambient Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-120px] left-[-120px] w-[260px] h-[260px] bg-amber-500/5 blur-[140px] rounded-full"></div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="flex flex-col 2xl:flex-row 2xl:items-start 2xl:justify-between gap-8 mb-12">

          {/* Left */}
          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

              ERP Financial Intelligence

            </p>

            <h3 className="text-4xl lg:text-5xl font-bold mt-5 tracking-tight text-white">

              Revenue Analytics

            </h3>

            <p className="text-zinc-500 mt-5 max-w-2xl leading-relaxed">

              Monitor real-time business revenue,
              operational expenses and transport profitability insights.

            </p>

          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {summaryCards.map(
              (
                item,
                index
              ) => {

                const Icon =
                  item.icon;

                return (

                  <div
                    key={index}
                    className="min-w-[190px] bg-white/[0.03] border border-white/10 rounded-3xl p-5"
                  >

                    <div className="flex items-start justify-between">

                      <div>

                        <p className="text-sm text-zinc-500">

                          {
                            item.label
                          }

                        </p>

                        <h3 className="text-3xl font-bold mt-4 text-white">

                          {
                            item.value
                          }

                        </h3>

                      </div>

                      <div
                        className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${item.color}`}
                      >

                        <Icon
                          size={22}
                        />

                      </div>

                    </div>

                  </div>
                );
              }
            )}

          </div>

        </div>

        {/* Mini Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">

          <MiniAnalyticsCard
            title="Revenue"
            value={`₹${totalRevenue.toLocaleString()}`}
            subtitle="Business revenue"
          />

          <MiniAnalyticsCard
            title="Expenses"
            value={`₹${totalExpenses.toLocaleString()}`}
            subtitle="Operational expenses"
          />

          <MiniAnalyticsCard
            title="Profit"
            value={`₹${totalProfit.toLocaleString()}`}
            subtitle="Net business profit"
          />

        </div>

        {/* Chart */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
          }}
          viewport={{
            once: true,
          }}
          className="relative overflow-hidden h-[440px] rounded-[34px] bg-black/20 border border-white/5 p-5"
        >

          {/* Chart Glow */}
          <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

          {/* Top */}
          <div className="flex items-center justify-between mb-6">

            <div>

              <p className="text-sm text-zinc-500">

                Financial Performance

              </p>

              <h4 className="text-2xl font-bold mt-2 text-white">

                Revenue Overview

              </h4>

            </div>

            <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/10">

              <ArrowUpRight
                size={16}
                className="text-emerald-400"
              />

              <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold">

                +18% Growth

              </span>

            </div>

          </div>

          <ResponsiveContainer
            width="100%"
            height="82%"
          >

            <AreaChart
              data={chartData}
            >

              <defs>

                <linearGradient
                  id="erpRevenue"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="5%"
                    stopColor="#facc15"
                    stopOpacity={
                      0.5
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
                  fill:
                    "#71717a",
                  fontSize: 13,
                }}
              />

              <Tooltip
                cursor={{
                  stroke:
                    "rgba(250,204,21,0.2)",
                }}
                contentStyle={{
                  background:
                    "#090909",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  borderRadius:
                    "20px",
                  color:
                    "#fff",
                  backdropFilter:
                    "blur(16px)",
                }}
              />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#facc15"
                fillOpacity={1}
                fill="url(#erpRevenue)"
                strokeWidth={4}
                activeDot={{
                  r: 7,
                }}
              />

            </AreaChart>

          </ResponsiveContainer>

          {/* Footer */}
          <div className="absolute bottom-5 right-5 flex items-center gap-2 text-zinc-500">

            <Sparkles
              size={14}
              className="text-yellow-400"
            />

            <span className="text-xs uppercase tracking-[0.2em]">

              ERP Analytics

            </span>

          </div>

        </motion.div>

      </div>

    </div>
  );
}

export default RevenueChart;