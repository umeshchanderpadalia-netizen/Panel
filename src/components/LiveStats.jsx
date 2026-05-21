import {
  Activity,
  Car,
  IndianRupee,
  TrendingUp,
  Wallet,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

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
        "Trips currently in progress",

      growth:
        "+8%",

      glow:
        "from-yellow-400/20 to-amber-500/5",

      iconBg:
        "bg-yellow-500/10 text-yellow-400",

      border:
        "hover:border-yellow-500/20",
    },

    {
      title:
        "Completed Trips",

      value:
        completedTrips,

      icon:
        Car,

      subtitle:
        "Successfully completed rides",

      growth:
        "+15%",

      glow:
        "from-emerald-500/20 to-green-500/5",

      iconBg:
        "bg-emerald-500/10 text-emerald-400",

      border:
        "hover:border-emerald-500/20",
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

      border:
        "hover:border-blue-500/20",
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
        "from-purple-500/20 to-fuchsia-500/5",

      iconBg:
        "bg-purple-500/10 text-purple-400",

      border:
        "hover:border-purple-500/20",
    },
  ];

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map(
        (item, index) => {

          const Icon =
            item.icon;

          return (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay:
                  index * 0.06,
              }}
              className={`group relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[34px] p-6 backdrop-blur-2xl hover:-translate-y-1.5 transition-all duration-500 ${item.border}`}
            >

              {/* Gradient Glow */}
              <div
                className={`absolute inset-0 opacity-40 bg-gradient-to-br ${item.glow}`}
              ></div>

              {/* Main Glow */}
              <div className="absolute top-[-90px] right-[-90px] w-[220px] h-[220px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

              {/* Shine */}
              <div className="absolute top-0 left-[-120%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-12 group-hover:left-[120%] transition-all duration-1000"></div>

              {/* Content */}
              <div className="relative z-10">

                {/* Top */}
                <div className="flex items-start justify-between gap-4">

                  <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">

                      {item.title}

                    </p>

                    {/* Live */}
                    <div className="flex items-center gap-2 mt-5">

                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>

                      <span className="text-[11px] uppercase tracking-[0.25em] text-emerald-400 font-medium">

                        ERP LIVE

                      </span>

                    </div>

                  </div>

                  {/* Icon */}
                  <div
                    className={`relative overflow-hidden w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.04)] ${item.iconBg}`}
                  >

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/[0.03]"></div>

                    <Icon
                      size={26}
                      className="relative z-10"
                    />

                  </div>

                </div>

                {/* Value */}
                <div className="mt-8">

                  <h2 className="text-5xl font-bold tracking-tight text-white leading-none">

                    <AnimatedCounter
                      value={
                        item.value
                      }
                    />

                  </h2>

                </div>

                {/* Bottom */}
                <div className="flex items-end justify-between gap-4 mt-8">

                  <div>

                    <p className="text-sm text-zinc-500 leading-relaxed max-w-[180px]">

                      {
                        item.subtitle
                      }

                    </p>

                  </div>

                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/10 text-emerald-400 text-sm font-semibold shadow-[0_0_20px_rgba(16,185,129,0.08)]">

                    <ArrowUpRight
                      size={14}
                    />

                    {
                      item.growth
                    }

                  </div>

                </div>

                {/* Footer Accent */}
                <div className="flex items-center justify-between mt-7 pt-5 border-t border-white/[0.06]">

                  <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-[0.18em]">

                    <Sparkles
                      size={12}
                    />

                    Analytics

                  </div>

                  <div className="flex items-center gap-2 text-emerald-400 text-xs uppercase tracking-[0.18em]">

                    <TrendingUp
                      size={12}
                    />

                    Stable
                  </div>

                </div>

              </div>

            </motion.div>
          );
        }
      )}

    </div>
  );
}

export default LiveStats;