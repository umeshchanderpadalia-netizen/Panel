import {
  Activity,
  Car,
  Users,
  IndianRupee,
  TrendingUp,
  Wallet,
} from "lucide-react";

import AnimatedCounter from "./AnimatedCounter";

import useApp from "../hooks/useApp";

function LiveStats() {

  const {
    dashboardStats,
    trips,
  } = useApp();

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

  const pendingPayments =
    trips.filter(
      (trip) =>
        trip.paymentStatus !==
        "Paid"
    ).length;

  const completedTrips =
    trips.filter(
      (trip) =>
        trip.tripStatus ===
        "Completed"
    ).length;

  const stats = [

    {
      title:
        "Active Trips",

      value:
        dashboardStats.ongoingTrips,

      icon:
        Activity,

      subtitle:
        "Trips in progress",

      growth:
        "+8%",

      glow:
        "from-yellow-400/20 to-amber-500/5",

      iconBg:
        "bg-yellow-500/10 text-yellow-400",
    },

    {
      title:
        "Completed Trips",

      value:
        completedTrips,

      icon:
        Car,

      subtitle:
        "Successfully completed",

      growth:
        "+15%",

      glow:
        "from-emerald-500/20 to-green-500/5",

      iconBg:
        "bg-emerald-500/10 text-emerald-400",
    },

    {
      title:
        "Pending Payments",

      value:
        pendingPayments,

      icon:
        Wallet,

      subtitle:
        "Awaiting payment clearance",

      growth:
        "+5%",

      glow:
        "from-blue-500/20 to-cyan-500/5",

      iconBg:
        "bg-blue-500/10 text-blue-400",
    },

    {
      title:
        "Net Profit",

      value:
        `₹${totalProfit}`,

      icon:
        IndianRupee,

      subtitle:
        "Operational business profit",

      growth:
        "+18%",

      glow:
        "from-purple-500/20 to-pink-500/5",

      iconBg:
        "bg-purple-500/10 text-purple-400",
    },
  ];

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map(
        (item, index) => {

          const Icon =
            item.icon;

          return (

            <div
              key={index}
              className="group relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[34px] p-6 backdrop-blur-2xl hover:border-yellow-500/20 hover:-translate-y-1 transition-all duration-500"
            >

              {/* Gradient Glow */}
              <div
                className={`absolute inset-0 opacity-40 bg-gradient-to-br ${item.glow}`}
              ></div>

              {/* Main Glow */}
              <div className="absolute top-[-80px] right-[-80px] w-[200px] h-[200px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

              {/* Content */}
              <div className="relative z-10">

                {/* Top */}
                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-sm text-zinc-500 tracking-wide">

                      {item.title}

                    </p>

                    {/* Live */}
                    <div className="flex items-center gap-2 mt-4">

                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>

                      <span className="text-xs uppercase tracking-[0.2em] text-emerald-400">

                        ERP LIVE

                      </span>

                    </div>

                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.04)] ${item.iconBg}`}
                  >

                    <Icon
                      size={24}
                    />

                  </div>

                </div>

                {/* Value */}
                <h2 className="text-5xl font-bold mt-8 tracking-tight text-white">

                  <AnimatedCounter
                    value={
                      item.value
                    }
                  />

                </h2>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-6">

                  <p className="text-sm text-zinc-500">

                    {
                      item.subtitle
                    }

                  </p>

                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/10 text-emerald-400 text-sm font-medium">

                    <TrendingUp
                      size={14}
                    />

                    {
                      item.growth
                    }

                  </div>

                </div>

              </div>

            </div>
          );
        }
      )}

    </div>
  );
}

export default LiveStats;