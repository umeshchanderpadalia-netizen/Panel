import {
  TrendingUp,
  Sparkles,
  Activity,
  AlertTriangle,
  IndianRupee,
  Receipt,
} from "lucide-react";

import useApp from "../hooks/useApp";

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

  const topVendor =
    trips[0]?.vendor ||
    "No Vendor";

  const insights = [

    {
      title:
        "Revenue Growth",

      description:
        `ERP revenue operations reached ₹${totalRevenue} with improved financial activity.`,

      icon:
        IndianRupee,

      color:
        "bg-emerald-500/10 text-emerald-400",
    },

    {
      title:
        "Business Profitability",

      description:
        `Net operational profit currently stands at ₹${totalProfit}.`,

      icon:
        TrendingUp,

      color:
        "bg-yellow-500/10 text-yellow-400",
    },

    {
      title:
        "Payment Monitoring",

      description:
        `${pendingPayments} bookings currently require payment clearance or follow-up.`,

      icon:
        Receipt,

      color:
        "bg-blue-500/10 text-blue-400",
    },

    {
      title:
        "Vendor Operations",

      description:
        `${topVendor} is currently the most active vendor in ERP operations.`,

      icon:
        Activity,

      color:
        "bg-purple-500/10 text-purple-400",
    },

    {
      title:
        "ERP Alert",

      description:
        "Operational workflow and financial systems are actively synchronized.",

      icon:
        AlertTriangle,

      color:
        "bg-red-500/10 text-red-400",
    },
  ];

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[36px] p-7 backdrop-blur-2xl hover:border-yellow-500/20 transition-all duration-500">

      {/* Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[240px] h-[240px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] left-[-120px] w-[240px] h-[240px] bg-amber-500/5 blur-[120px] rounded-full"></div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-start justify-between mb-10">

          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 font-medium">

              ERP Intelligence

            </p>

            <h2 className="text-3xl font-bold mt-4 tracking-tight text-white">

              Business Insights

            </h2>

            <p className="text-zinc-500 mt-4 leading-relaxed">

              Intelligent ERP analytics generated from booking activity,
              payments, profitability and transport operations.

            </p>

          </div>

          <div className="w-16 h-16 rounded-3xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.12)]">

            <Sparkles
              size={28}
            />

          </div>

        </div>

        {/* Insights */}
        <div className="space-y-5">

          {insights.map(
            (
              item,
              index
            ) => {

              const Icon =
                item.icon;

              return (

                <div
                  key={index}
                  className="group relative overflow-hidden flex items-start gap-5 p-5 rounded-[28px] bg-white/[0.03] border border-white/5 hover:border-yellow-500/10 hover:bg-white/[0.04] transition-all duration-300"
                >

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${item.color}`}
                  >

                    <Icon
                      size={24}
                    />

                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <div className="flex items-center justify-between gap-4">

                      <div>

                        <h4 className="text-lg font-semibold text-white">

                          {
                            item.title
                          }

                        </h4>

                        <p className="text-zinc-400 leading-relaxed mt-3">

                          {
                            item.description
                          }

                        </p>

                      </div>

                      <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/10">

                        <Activity
                          size={14}
                          className="text-emerald-400"
                        />

                        <span className="text-xs uppercase tracking-[0.2em] text-emerald-400">

                          LIVE

                        </span>

                      </div>

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

export default InsightPanel;