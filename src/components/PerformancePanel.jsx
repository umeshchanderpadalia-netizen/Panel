import {
  TrendingUp,
  Activity,
  ShieldCheck,
  AlertTriangle,
  IndianRupee,
  Sparkles,
  BarChart3,
} from "lucide-react";

import { motion } from "framer-motion";

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
        "bg-yellow-500/10 text-yellow-400 border-yellow-500/10",

      description:
        "Completed transport workflow",
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
        "bg-emerald-500/10 text-emerald-400 border-emerald-500/10",

      description:
        "Successful payment collection",
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
        "bg-cyan-500/10 text-cyan-400 border-cyan-500/10",

      description:
        "Operational profitability",
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
        "bg-blue-500/10 text-blue-400 border-blue-500/10",

      description:
        "Trips currently active",
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
        "bg-red-500/10 text-red-400 border-red-500/10",

      description:
        "Cancelled ride requests",

      isCount:
        true,
    },
  ];

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[38px] p-7 backdrop-blur-3xl hover:border-yellow-500/20 transition-all duration-500">

      {/* Ambient Glow */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[280px] h-[280px] bg-yellow-400/10 blur-[140px] rounded-full"></div>

      <div className="absolute top-[-120px] left-[-120px] w-[280px] h-[280px] bg-amber-500/5 blur-[140px] rounded-full"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8 mb-10">

          <div>

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-2xl bg-yellow-500/10 border border-yellow-500/10 text-yellow-400 flex items-center justify-center">

                <BarChart3
                  size={20}
                />

              </div>

              <div>

                <p className="text-sm uppercase tracking-[0.28em] text-yellow-400 font-medium">

                  ERP Intelligence

                </p>

                <h3 className="text-3xl font-bold mt-2 tracking-tight text-white">

                  Performance Analytics

                </h3>

              </div>

            </div>

            <p className="text-zinc-500 mt-6 leading-relaxed max-w-2xl">

              Financial performance, operational efficiency,
              ride completion metrics and ERP workflow analytics.

            </p>

          </div>

          {/* Live Badge */}
          <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/10 shadow-[0_0_25px_rgba(16,185,129,0.08)]">

            <div className="relative">

              <div className="absolute inset-0 bg-emerald-400 blur-md rounded-full"></div>

              <div className="relative w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>

            </div>

            <div>

              <p className="text-[10px] uppercase tracking-[0.25em] text-emerald-400">

                ERP LIVE

              </p>

              <p className="text-xs text-zinc-300 mt-1">

                Analytics Updated

              </p>

            </div>

          </div>

        </div>

        {/* Metrics */}
        <div className="space-y-6">

          {metrics.map(
            (
              metric,
              index
            ) => {

              const Icon =
                metric.icon;

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
                  transition={{
                    duration: 0.35,
                    delay:
                      index * 0.06,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="group relative overflow-hidden bg-white/[0.03] border border-white/5 rounded-[30px] p-6 hover:border-yellow-500/10 hover:bg-white/[0.04] transition-all duration-300"
                >

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-yellow-500/[0.03] to-transparent"></div>

                  <div className="relative z-10">

                    {/* Top */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">

                      <div className="flex items-center gap-5">

                        {/* Icon */}
                        <div
                          className={`w-16 h-16 rounded-3xl border flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.03)] ${metric.bg}`}
                        >

                          <Icon
                            size={26}
                          />

                        </div>

                        {/* Text */}
                        <div>

                          <p className="text-sm text-zinc-500">

                            {
                              metric.label
                            }

                          </p>

                          <h4 className="text-4xl font-bold mt-3 text-white tracking-tight">

                            {
                              metric.value
                            }

                            {!metric.isCount &&
                              "%"}

                          </h4>

                          <p className="text-sm text-zinc-500 mt-3">

                            {
                              metric.description
                            }

                          </p>

                        </div>

                      </div>

                      {/* Live */}
                      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/5 h-fit">

                        <Sparkles
                          size={15}
                          className="text-yellow-400"
                        />

                        <span className="text-xs uppercase tracking-[0.22em] text-zinc-400">

                          Live Metrics

                        </span>

                      </div>

                    </div>

                    {/* Progress */}
                    {!metric.isCount && (

                      <div>

                        <div className="flex items-center justify-between mb-3">

                          <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">

                            Performance

                          </span>

                          <span className="text-sm text-white font-medium">

                            {
                              metric.value
                            }
                            %

                          </span>

                        </div>

                        <div className="relative w-full h-3 rounded-full bg-white/[0.04] overflow-hidden">

                          {/* Glow */}
                          <div
                            className={`absolute inset-y-0 left-0 blur-xl opacity-50 bg-gradient-to-r ${metric.color}`}
                            style={{
                              width: `${metric.value}%`,
                            }}
                          ></div>

                          {/* Bar */}
                          <motion.div
                            initial={{
                              width: 0,
                            }}
                            whileInView={{
                              width: `${metric.value}%`,
                            }}
                            transition={{
                              duration: 0.8,
                              ease: "easeOut",
                            }}
                            viewport={{
                              once: true,
                            }}
                            className={`relative h-full rounded-full bg-gradient-to-r ${metric.color}`}
                          ></motion.div>

                        </div>

                      </div>

                    )}

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

export default PerformancePanel;