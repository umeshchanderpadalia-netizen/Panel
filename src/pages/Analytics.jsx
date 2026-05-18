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
} from "recharts";

import MainLayout from "../layout/MainLayout";

import SectionHeader from "../components/SectionHeader";
import StatsCard from "../components/StatsCard";
import InsightsCard from "../components/InsightsCard";
import ActivityTimeline from "../components/ActivityTimeline";
import PageTransition from "../components/PageTransition";

function Analytics() {

  // Weekly Analytics
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
    { name: "Completed", value: 68 },
    { name: "Ongoing", value: 22 },
    { name: "Cancelled", value: 10 },
  ];

  const COLORS = [
    "#facc15",
    "#f59e0b",
    "#ef4444",
  ];

  // Top Stats
  const stats = [
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

  return (
    <MainLayout>

      <PageTransition>

        {/* Header */}
        <div className="mb-12">

          <SectionHeader
            label="Analytics"
            title="Operational Insights"
            description="Monitor ride analytics, operational metrics and booking performance across the platform."
          />

        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

          {stats.map((item, index) => (

            <StatsCard
              key={index}
              title={item.title}
              value={item.value}
              growth={item.growth}
            />

          ))}

        </div>

        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

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

        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

          {/* Left */}
          <div className="xl:col-span-8 space-y-6">

            {/* Weekly Analytics */}
            <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[36px] p-7 lg:p-9 backdrop-blur-xl">

              {/* Glow */}
              <div className="absolute top-[-100px] right-[-100px] w-[240px] h-[240px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

              <div className="relative z-10">

                {/* Heading */}
                <div className="mb-10">

                  <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 font-medium">
                    Overview
                  </p>

                  <h2 className="text-4xl font-bold mt-3 tracking-tight text-white">
                    Weekly Ride Activity
                  </h2>

                  <p className="text-zinc-400 mt-3">
                    Operational ride trends across the week.
                  </p>

                </div>

                {/* Chart */}
                <div className="h-[420px]">

                  <ResponsiveContainer width="100%" height="100%">

                    <AreaChart data={weeklyData}>

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

                {/* Pie Chart */}
                <div className="h-[300px]">

                  <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                      <Pie
                        data={distributionData}
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={110}
                        paddingAngle={5}
                      >

                        {distributionData.map(
                          (entry, index) => (

                            <Cell
                              key={index}
                              fill={COLORS[index]}
                            />

                          )
                        )}

                      </Pie>

                      <Tooltip />

                    </PieChart>

                  </ResponsiveContainer>

                </div>

              </div>

            </div>

          </div>

        </div>

      </PageTransition>

    </MainLayout>
  );
}

export default Analytics;