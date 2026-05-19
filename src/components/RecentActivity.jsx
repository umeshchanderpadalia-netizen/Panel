import {
  CheckCircle2,
  XCircle,
  Clock3,
  Activity,
  IndianRupee,
  Receipt,
} from "lucide-react";

function RecentActivity({
  trips,
}) {

  const latestTrips = [
    ...trips,
  ].slice(0, 5);

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[36px] p-7 backdrop-blur-2xl hover:border-yellow-500/20 transition-all duration-500">

      {/* Glow */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[240px] h-[240px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

      <div className="absolute top-[-120px] left-[-120px] w-[240px] h-[240px] bg-amber-500/5 blur-[120px] rounded-full"></div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-start justify-between mb-10">

          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 font-medium">

              ERP Activity Feed

            </p>

            <h3 className="text-3xl font-bold mt-4 tracking-tight text-white">

              Live Operations

            </h3>

            <p className="text-zinc-500 mt-4 leading-relaxed">

              Real-time booking workflow, financial activity,
              payment operations and transport ERP monitoring.

            </p>

          </div>

          {/* Live */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/10">

            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>

            <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-medium">

              Live

            </span>

          </div>

        </div>

        {/* Activity Timeline */}
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

              return (

                <div
                  key={index}
                  className="group relative flex gap-5 p-5 rounded-[28px] bg-white/[0.03] border border-white/5 hover:border-yellow-500/10 hover:bg-white/[0.04] transition-all duration-300"
                >

                  {/* Timeline */}
                  <div className="absolute left-[31px] top-[70px] w-px h-full bg-white/5"></div>

                  {/* Icon */}
                  <div
                    className={`relative z-10 w-14 h-14 rounded-3xl flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.04)] ${
                      isCompleted
                        ? "bg-emerald-500/10 text-emerald-400"
                        : isCancelled
                        ? "bg-red-500/10 text-red-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >

                    {isCompleted ? (

                      <CheckCircle2
                        size={24}
                      />

                    ) : isCancelled ? (

                      <XCircle
                        size={24}
                      />

                    ) : (

                      <Clock3
                        size={24}
                      />

                    )}

                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    {/* Top */}
                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <h4 className="text-lg font-semibold text-white">

                          {
                            trip.customer
                          }

                        </h4>

                        <p className="text-zinc-500 mt-2">

                          {
                            trip.pickup
                          }

                          {" "}→{" "}

                          <span className="text-zinc-300">

                            {
                              trip.drop
                            }

                          </span>

                        </p>

                      </div>

                      {/* Status */}
                      <div
                        className={`px-4 py-2 rounded-2xl text-sm font-medium border ${
                          isCompleted
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : isCancelled
                            ? "bg-red-500/10 text-red-400 border-red-500/20"
                            : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                        }`}
                      >

                        {
                          trip.tripStatus
                        }

                      </div>

                    </div>

                    {/* ERP Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

                      {/* Revenue */}
                      <div className="flex items-center gap-3">

                        <IndianRupee
                          size={16}
                          className="text-emerald-400"
                        />

                        <div>

                          <p className="text-xs text-zinc-500">

                            Revenue

                          </p>

                          <p className="text-sm text-white font-medium">

                            ₹{
                              trip.total
                            }

                          </p>

                        </div>

                      </div>

                      {/* Invoice */}
                      <div className="flex items-center gap-3">

                        <Receipt
                          size={16}
                          className="text-cyan-400"
                        />

                        <div>

                          <p className="text-xs text-zinc-500">

                            Invoice

                          </p>

                          <p className="text-sm text-white font-medium">

                            {
                              trip.invoiceStatus
                            }

                          </p>

                        </div>

                      </div>

                      {/* Payment */}
                      <div className="flex items-center gap-3">

                        <Activity
                          size={16}
                          className="text-yellow-400"
                        />

                        <div>

                          <p className="text-xs text-zinc-500">

                            Payment

                          </p>

                          <p className="text-sm text-white font-medium">

                            {
                              trip.paymentStatus
                            }

                          </p>

                        </div>

                      </div>

                    </div>

                    {/* Bottom */}
                    <div className="flex items-center justify-between mt-6">

                      <p className="text-sm text-zinc-500">

                        Vendor:
                        {" "}

                        <span className="text-zinc-300">

                          {
                            trip.vendor
                          }

                        </span>

                      </p>

                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">

                        ERP LIVE

                      </p>

                    </div>

                  </div>

                </div>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
}

export default RecentActivity;