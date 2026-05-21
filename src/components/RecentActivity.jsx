import {
  CheckCircle2,
  XCircle,
  Clock3,
  Activity,
  IndianRupee,
  Receipt,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

function RecentActivity({
  trips,
}) {

  const latestTrips = [
    ...trips,
  ].slice(0, 5);

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[38px] p-7 lg:p-8 backdrop-blur-3xl hover:border-yellow-500/20 transition-all duration-500">

      {/* Ambient Glow */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[140px] rounded-full"></div>

      <div className="absolute top-[-120px] left-[-120px] w-[240px] h-[240px] bg-amber-500/5 blur-[120px] rounded-full"></div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6 mb-12">

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

              ERP Activity Feed

            </p>

            <h3 className="text-4xl font-bold mt-5 tracking-tight text-white">

              Live Operations

            </h3>

            <p className="text-zinc-500 mt-5 leading-relaxed max-w-2xl">

              Real-time booking workflow, payment tracking,
              invoice monitoring and transport operational activity.

            </p>

          </div>

          {/* Live Badge */}
          <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/10">

            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>

            <div>

              <p className="text-[10px] uppercase tracking-[0.25em] text-emerald-400 font-semibold">

                ERP LIVE

              </p>

              <p className="text-xs text-zinc-500 mt-1">

                Real-time sync active

              </p>

            </div>

          </div>

        </div>

        {/* Activities */}
        <div className="space-y-6">

          {latestTrips.map(
            (
              trip,
              index
            ) => {

              const isCompleted =
                trip.tripStatus ===
                "Completed";

              const isCancelled =
                trip.tripStatus ===
                "Cancelled";

              const isOngoing =
                trip.tripStatus ===
                "Ongoing";

              const getStatusStyle =
                () => {

                  if (
                    isCompleted
                  ) {

                    return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
                  }

                  if (
                    isCancelled
                  ) {

                    return "bg-red-500/10 text-red-400 border-red-500/20";
                  }

                  if (
                    isOngoing
                  ) {

                    return "bg-blue-500/10 text-blue-400 border-blue-500/20";
                  }

                  return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
                };

              return (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 18,
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
                  className="group relative overflow-hidden flex gap-5 p-6 rounded-[30px] bg-white/[0.03] border border-white/5 hover:border-yellow-500/10 hover:bg-white/[0.04] transition-all duration-500"
                >

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-yellow-500/[0.03] to-transparent"></div>

                  {/* Timeline */}
                  {index !==
                    latestTrips.length -
                      1 && (

                    <div className="absolute left-[34px] top-[82px] w-px h-full bg-gradient-to-b from-white/10 to-transparent"></div>

                  )}

                  {/* Icon */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-3xl border flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.04)] ${getStatusStyle()}`}
                  >

                    {isCompleted ? (

                      <CheckCircle2
                        size={26}
                      />

                    ) : isCancelled ? (

                      <XCircle
                        size={26}
                      />

                    ) : (

                      <Clock3
                        size={26}
                      />

                    )}

                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1">

                    {/* Top */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">

                      <div>

                        <div className="flex items-center gap-3 flex-wrap">

                          <h4 className="text-xl font-semibold text-white">

                            {
                              trip.customer
                            }

                          </h4>

                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5">

                            <Sparkles
                              size={13}
                              className="text-yellow-400"
                            />

                            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">

                              Booking
                            </span>

                          </div>

                        </div>

                        <p className="text-zinc-500 mt-3 leading-relaxed">

                          {
                            trip.pickup
                          }

                          {" "}

                          <ArrowUpRight
                            size={14}
                            className="inline mx-1 text-yellow-400"
                          />

                          <span className="text-zinc-300">

                            {
                              trip.drop
                            }

                          </span>

                        </p>

                      </div>

                      {/* Status */}
                      <div
                        className={`px-5 py-3 rounded-2xl text-sm font-semibold border whitespace-nowrap ${getStatusStyle()}`}
                      >

                        {
                          trip.tripStatus
                        }

                      </div>

                    </div>

                    {/* ERP Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

                      {/* Revenue */}
                      <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">

                        <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">

                          <IndianRupee
                            size={18}
                          />

                        </div>

                        <div>

                          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">

                            Revenue

                          </p>

                          <p className="text-lg font-semibold text-white mt-2">

                            ₹
                            {
                              trip.total
                            }

                          </p>

                        </div>

                      </div>

                      {/* Invoice */}
                      <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">

                        <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">

                          <Receipt
                            size={18}
                          />

                        </div>

                        <div>

                          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">

                            Invoice

                          </p>

                          <p className="text-lg font-semibold text-white mt-2">

                            {
                              trip.invoiceStatus
                            }

                          </p>

                        </div>

                      </div>

                      {/* Payment */}
                      <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">

                        <div className="w-11 h-11 rounded-2xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">

                          <Activity
                            size={18}
                          />

                        </div>

                        <div>

                          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">

                            Payment

                          </p>

                          <p className="text-lg font-semibold text-white mt-2">

                            {
                              trip.paymentStatus
                            }

                          </p>

                        </div>

                      </div>

                    </div>

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8">

                      <div className="flex items-center gap-3">

                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>

                        <p className="text-sm text-zinc-500">

                          Vendor:
                          {" "}

                          <span className="text-zinc-300">

                            {
                              trip.vendor
                            }

                          </span>

                        </p>

                      </div>

                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-400">

                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>

                        ERP ACTIVE

                      </div>

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

export default RecentActivity;