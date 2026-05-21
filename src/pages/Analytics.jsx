import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

import {
  Activity,
  TrendingUp,
  Car,
  Clock3,
  IndianRupee,
  AlertTriangle,
} from "lucide-react";

import MainLayout from "../layout/MainLayout";

import SectionHeader from "../components/SectionHeader";
import StatsCard from "../components/StatsCard";
import InsightsCard from "../components/InsightsCard";
import ActivityTimeline from "../components/ActivityTimeline";
import PageTransition from "../components/PageTransition";

function Analytics() {

  // Weekly Analytics Data
  const weeklyData = [
    { name: "Mon", trips: 12 },
    { name: "Tue", trips: 18 },
    { name: "Wed", trips: 24 },
    { name: "Thu", trips: 16 },
    { name: "Fri", trips: 28 },
    { name: "Sat", trips: 35 },
    { name: "Sun", trips: 22 },
  ];

  // Ride Distribution
  const distributionData = [
    {
      name: "Completed",
      value: 68,
    },

    {
      name: "Ongoing",
      value: 22,
    },

    {
      name: "Cancelled",
      value: 10,
    },
  ];

  // Revenue Breakdown
  const revenueData = [
    {
      name: "Corporate",
      value: 48,
    },

    {
      name: "Airport",
      value: 32,
    },

    {
      name: "Local",
      value: 20,
    },
  ];

  // Chart Colors
  const COLORS = [
    "#facc15",
    "#f59e0b",
    "#ef4444",
  ];

  // Analytics Metrics
  const analyticsStats = [
    {
      title: "Weekly Trips",
      value: "155",
      growth: "+18% this week",
    },

    {
      title: "Revenue Growth",
      value: "₹82K",
      growth: "+12% increase",
    },

    {
      title: "Active Drivers",
      value: "48",
      growth: "8 drivers online",
    },
  ];

  // Performance Alerts
  const alerts = [
    {
      title: "High Demand Zone",
      description:
        "Airport routes showing 28% booking increase.",
      icon: TrendingUp,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },

    {
      title: "Driver Downtime",
      description:
        "12 drivers inactive for more than 4 hours.",
      icon: Clock3,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },

    {
      title: "System Alert",
      description:
        "3 failed payment attempts detected.",
      icon: AlertTriangle,
      color: "text-red-400",
      bg: "bg-red-500/10",
    },
  ];

  return (

    <MainLayout>

      <PageTransition>

        <div className="space-y-8">

          {/* Hero Section */}
          <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 lg:p-10">

            {/* Glow */}
            <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-[-120px] left-[-120px] w-[260px] h-[260px] bg-amber-500/5 blur-[120px] rounded-full"></div>

            <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10">

              {/* Left */}
              <div className="max-w-3xl">

                <SectionHeader
                  label="Analytics"
                  title="Operational Intelligence Center"
                  description="Track business growth, operational analytics, ride distribution, financial insights and live transport performance metrics."
                />

              </div>

              {/* Right */}
              <div className="grid grid-cols-2 gap-4 w-full xl:w-auto">

                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-5 min-w-[180px]">

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">

                      <Activity size={22} />

                    </div>

                    <div>

                      <p className="text-sm text-zinc-400">

                        Ride Activity

                      </p>

                      <h3 className="text-2xl font-bold text-white mt-1">

                        94%

                      </h3>

                    </div>

                  </div>

                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-5 min-w-[180px]">

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">

                      <IndianRupee size={22} />

                    </div>

                    <div>

                      <p className="text-sm text-zinc-400">

                        Profit Margin

                      </p>

                      <h3 className="text-2xl font-bold text-white mt-1">

                        38%

                      </h3>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* Analytics Stats */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {analyticsStats.map(
              (
                item,
                index
              ) => (

                <StatsCard
                  key={index}
                  title={item.title}
                  value={item.value}
                  growth={item.growth}
                />

              )
            )}

          </section>

          {/* Insights */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <InsightsCard
              title="Ride Efficiency"
              value="92%"
              growth="+8% operational growth"
              positive={true}
            />

            <InsightsCard
              title="Cancelled Requests"
              value="4%"
              growth="-2% compared to last week"
              positive={true}
            />

            <InsightsCard
              title="Driver Downtime"
              value="12%"
              growth="+3% idle time detected"
              positive={false}
            />

          </section>

          {/* Main Analytics Grid */}
          <section className="grid grid-cols-1 xl:grid-cols-12 gap-6">

            {/* Left */}
            <div className="xl:col-span-8 space-y-6">

              {/* Weekly Activity */}
              <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[36px] p-7 lg:p-9 backdrop-blur-xl">

                {/* Glow */}
                <div className="absolute top-[-100px] right-[-100px] w-[240px] h-[240px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

                <div className="relative z-10">

                  {/* Heading */}
                  <div className="mb-10">

                    <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 font-medium">

                      Performance Overview

                    </p>

                    <h2 className="text-4xl font-bold mt-3 tracking-tight text-white">

                      Weekly Ride Activity

                    </h2>

                    <p className="text-zinc-400 mt-3">

                      Monitor ride operations and weekly booking performance trends.

                    </p>

                  </div>

                  {/* Chart */}
                  <div className="h-[420px]">

                    <ResponsiveContainer
                      width="100%"
                      height="100%"
                    >

                      <AreaChart
                        data={weeklyData}
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
                          tick={{
                            fill: "#a1a1aa",
                          }}
                        />

                        <Tooltip
                          contentStyle={{
                            background: "#0a0a0a",
                            border:
                              "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "18px",
                            color: "#fff",
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

              {/* Revenue Breakdown */}
              <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[36px] p-7 lg:p-9 backdrop-blur-xl">

                <div className="absolute top-[-100px] left-[-100px] w-[240px] h-[240px] bg-emerald-500/10 blur-[120px] rounded-full"></div>

                <div className="relative z-10">

                  <div className="mb-10">

                    <p className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-medium">

                      Revenue Streams

                    </p>

                    <h2 className="text-4xl font-bold mt-3 tracking-tight text-white">

                      Booking Revenue Sources

                    </h2>

                  </div>

                  <div className="h-[340px]">

                    <ResponsiveContainer
                      width="100%"
                      height="100%"
                    >

                      <BarChart
                        data={revenueData}
                      >

                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="rgba(255,255,255,0.05)"
                        />

                        <XAxis
                          dataKey="name"
                          axisLine={false}
                          tickLine={false}
                          tick={{
                            fill: "#a1a1aa",
                          }}
                        />

                        <Tooltip
                          contentStyle={{
                            background: "#0a0a0a",
                            border:
                              "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "18px",
                          }}
                        />

                        <Bar
                          dataKey="value"
                          radius={[14, 14, 0, 0]}
                          fill="#10b981"
                        />

                      </BarChart>

                    </ResponsiveContainer>

                  </div>

                </div>

              </div>

              {/* Timeline */}
              <ActivityTimeline />

            </div>

            {/* Right */}
            <div className="xl:col-span-4 space-y-6">

              {/* Ride Distribution */}
              <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[36px] p-7 backdrop-blur-xl">

                {/* Glow */}
                <div className="absolute bottom-[-100px] left-[-100px] w-[220px] h-[220px] bg-amber-400/10 blur-[120px] rounded-full"></div>

                <div className="relative z-10">

                  {/* Heading */}
                  <div className="mb-10">

                    <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 font-medium">

                      Distribution

                    </p>

                    <h2 className="text-3xl font-bold mt-3 tracking-tight text-white">

                      Ride Status

                    </h2>

                  </div>

                  {/* Chart */}
                  <div className="h-[300px]">

                    <ResponsiveContainer
                      width="100%"
                      height="100%"
                    >

                      <PieChart>

                        <Pie
                          data={distributionData}
                          dataKey="value"
                          innerRadius={70}
                          outerRadius={110}
                          paddingAngle={5}
                        >

                          {distributionData.map(
                            (
                              entry,
                              index
                            ) => (

                              <Cell
                                key={index}
                                fill={
                                  COLORS[index]
                                }
                              />

                            )
                          )}

                        </Pie>

                        <Tooltip />

                      </PieChart>

                    </ResponsiveContainer>

                  </div>

                  {/* Stats */}
                  <div className="space-y-4 mt-8">

                    {distributionData.map(
                      (
                        item,
                        index
                      ) => (

                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >

                          <div className="flex items-center gap-3">

                            <div
                              className="w-3 h-3 rounded-full"
                              style={{
                                background:
                                  COLORS[index],
                              }}
                            ></div>

                            <p className="text-sm text-zinc-300">

                              {item.name}

                            </p>

                          </div>

                          <p className="text-sm text-white font-semibold">

                            {item.value}%

                          </p>

                        </div>

                      )
                    )}

                  </div>

                </div>

              </div>

              {/* Operations Health */}
              <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[36px] p-7 backdrop-blur-xl">

                <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

                <div className="relative z-10">

                  <div className="flex items-center justify-between mb-8">

                    <div>

                      <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 font-medium">

                        Fleet Status

                      </p>

                      <h2 className="text-3xl font-bold text-white mt-3">

                        Operations Health

                      </h2>

                    </div>

                    <div className="w-14 h-14 rounded-3xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">

                      <Car size={24} />

                    </div>

                  </div>

                  <div className="space-y-5">

                    {alerts.map(
                      (
                        item,
                        index
                      ) => {

                        const Icon =
                          item.icon;

                        return (

                          <div
                            key={index}
                            className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5"
                          >

                            <div
                              className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.bg}`}
                            >

                              <Icon
                                size={20}
                                className={item.color}
                              />

                            </div>

                            <div>

                              <h3 className="text-white font-semibold">

                                {item.title}

                              </h3>

                              <p className="text-sm text-zinc-500 mt-2 leading-relaxed">

                                {
                                  item.description
                                }

                              </p>

                            </div>

                          </div>
                        );
                      }
                    )}

                  </div>

                </div>

              </div>

            </div>

          </section>

        </div>

      </PageTransition>

    </MainLayout>
  );
}

export default Analytics;