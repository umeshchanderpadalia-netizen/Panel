import {
  TrendingUp,
  Sparkles,
  Activity,
  AlertTriangle,
  IndianRupee,
  Receipt,
  ArrowUpRight,
  CircleDollarSign,
  WalletCards,
  BadgeCheck,
} from "lucide-react";

import { motion } from "framer-motion";

import useApp from "../hooks/useApp";

import AnimatedCounter from "./AnimatedCounter";

function InsightPanel() {

  const {
    trips,
  } = useApp();

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

  const topVendor =
    trips[0]?.vendor ||
    "No Vendor";

  const profitPercentage =
    totalRevenue
      ? Math.round(
          (
            totalProfit /
            totalRevenue
          ) * 100
        )
      : 0;

  const insights = [

    {
      title:
        "Revenue Operations",

      value: `₹${totalRevenue}`,

      description:
        "Operational revenue generated through ERP transport workflow.",

      icon:
        IndianRupee,

      badge:
        "+18%",

      color:
        "from-emerald-400 to-green-500",

      bg:
        "bg-emerald-500/10",

      text:
        "text-emerald-400",
    },

    {
      title:
        "Profit Margin",

      value: `${profitPercentage}%`,

      description:
        "Business profitability based on completed booking operations.",

      icon:
        TrendingUp,

      badge:
        "Healthy",

      color:
        "from-yellow-400 to-amber-500",

      bg:
        "bg-yellow-500/10",

      text:
        "text-yellow-400",
    },

    {
      title:
        "Pending Payments",

      value: `${pendingPayments}`,

      description:
        "Bookings requiring payment clearance and financial follow-up.",

      icon:
        WalletCards,

      badge:
        "Attention",

      color:
        "from-blue-400 to-cyan-500",

      bg:
        "bg-blue-500/10",

      text:
        "text-blue-400",
    },

    {
      title:
        "Completed Trips",

      value: `${completedTrips}`,

      description:
        "Trips successfully completed through ERP transport workflow.",

      icon:
        BadgeCheck,

      badge:
        "Operational",

      color:
        "from-purple-400 to-fuchsia-500",

      bg:
        "bg-purple-500/10",

      text:
        "text-purple-400",
    },

    {
      title:
        "Vendor Intelligence",

      value: topVendor,

      description:
        "Most active vendor currently managing operational dispatch flow.",

      icon:
        Activity,

      badge:
        "Live",

      color:
        "from-orange-400 to-amber-500",

      bg:
        "bg-orange-500/10",

      text:
        "text-orange-400",
    },

    {
      title:
        "ERP Monitoring",

      value:
        "System Active",

      description:
        "Financial systems and operational analytics are synchronized live.",

      icon:
        AlertTriangle,

      badge:
        "Stable",

      color:
        "from-red-400 to-rose-500",

      bg:
        "bg-red-500/10",

      text:
        "text-red-400",
    },
  ];

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[40px] backdrop-blur-2xl">

      {/* Glow */}
      <div className="absolute top-[-140px] right-[-140px] w-[300px] h-[300px] bg-yellow-400/10 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-[-120px] left-[-120px] w-[260px] h-[260px] bg-amber-500/5 blur-[140px] rounded-full"></div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

      <div className="relative z-10 p-7 lg:p-8">

        {/* Header */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8 mb-10">

          <div>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-yellow-500/10 border border-yellow-500/10">

              <Sparkles
                size={16}
                className="text-yellow-400"
              />

              <span className="text-xs uppercase tracking-[0.25em] text-yellow-400 font-semibold">

                ERP Intelligence
              </span>

            </div>

            <h2 className="text-4xl font-bold mt-5 tracking-tight text-white">

              Business Insights

            </h2>

            <p className="text-zinc-500 mt-5 leading-relaxed max-w-3xl">

              Intelligent operational analytics generated from booking activity,
              revenue flow, vendor performance and transport management systems.

            </p>

          </div>

          {/* Revenue Card */}
          <div className="relative overflow-hidden min-w-[320px] rounded-[32px] border border-white/10 bg-gradient-to-br from-yellow-400/10 to-amber-500/5 p-6">

            <div className="absolute top-[-50px] right-[-50px] w-[120px] h-[120px] bg-yellow-400/10 blur-[80px] rounded-full"></div>

            <div className="relative z-10">

              <div className="flex items-center justify-between">

                <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400">

                  <CircleDollarSign
                    size={28}
                  />

                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/10">

                  <ArrowUpRight
                    size={14}
                    className="text-emerald-400"
                  />

                  <span className="text-xs font-semibold text-emerald-400">

                    +24%
                  </span>

                </div>

              </div>

              <p className="text-zinc-500 text-sm mt-6">

                Total Revenue

              </p>

              <h2 className="text-5xl font-bold text-white mt-3 tracking-tight">

                <AnimatedCounter
                  value={`₹${totalRevenue}`}
                />

              </h2>

              <p className="text-zinc-500 mt-4 text-sm">

                Live ERP financial operations monitoring.

              </p>

            </div>

          </div>

        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

          {insights.map(
            (
              item,
              index
            ) => {

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
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] hover:border-yellow-500/10 transition-all duration-500"
                >

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-yellow-500/[0.03] to-transparent"></div>

                  <div className="relative z-10 p-6">

                    {/* Top */}
                    <div className="flex items-start justify-between gap-4">

                      <div
                        className={`w-16 h-16 rounded-3xl flex items-center justify-center ${item.bg}`}
                      >

                        <Icon
                          size={28}
                          className={
                            item.text
                          }
                        />

                      </div>

                      <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/5">

                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>

                        <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">

                          {item.badge}

                        </span>

                      </div>

                    </div>

                    {/* Content */}
                    <div className="mt-7">

                      <p className="text-zinc-500 text-sm uppercase tracking-[0.2em]">

                        {item.title}

                      </p>

                      <h3 className="text-3xl font-bold text-white mt-4 tracking-tight break-words">

                        {typeof item.value ===
                        "string" &&
                        item.value.includes(
                          "₹"
                        ) ? (

                          <AnimatedCounter
                            value={
                              item.value
                            }
                          />

                        ) : (

                          item.value
                        )}

                      </h3>

                      <p className="text-zinc-400 leading-relaxed mt-5">

                        {
                          item.description
                        }

                      </p>

                    </div>

                  </div>

                </motion.div>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
}

export default InsightPanel;