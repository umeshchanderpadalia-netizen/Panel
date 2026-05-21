import MainLayout from "../layout/MainLayout";

import {
  FileText,
  TrendingUp,
  Wallet,
  Receipt,
  Download,
  CalendarDays,
  IndianRupee,
  BarChart3,
} from "lucide-react";

import useApp from "../hooks/useApp";

function Reports() {

  // App Data
  const {
    trips,
  } = useApp();

  // Report Metrics
  const reportMetrics = {

    totalRevenue:
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
      ),

    totalExpenses:
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
      ),

    totalProfit:
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
      ),

    completedTrips:
      trips.filter(
        (trip) =>
          trip.tripStatus ===
          "Completed"
      ).length,

    pendingPayments:
      trips.filter(
        (trip) =>
          trip.paymentStatus !==
          "Paid"
      ).length,
  };

  // Report Cards
  const reportCards = [

    {
      title:
        "Revenue Report",

      value:
        `₹${reportMetrics.totalRevenue.toLocaleString()}`,

      icon:
        IndianRupee,

      glow:
        "from-emerald-500/20 to-green-500/5",

      iconBg:
        "bg-emerald-500/10 text-emerald-400",
    },

    {
      title:
        "Expense Report",

      value:
        `₹${reportMetrics.totalExpenses.toLocaleString()}`,

      icon:
        Wallet,

      glow:
        "from-red-500/20 to-rose-500/5",

      iconBg:
        "bg-red-500/10 text-red-400",
    },

    {
      title:
        "Profit Report",

      value:
        `₹${reportMetrics.totalProfit.toLocaleString()}`,

      icon:
        TrendingUp,

      glow:
        "from-yellow-500/20 to-amber-500/5",

      iconBg:
        "bg-yellow-500/10 text-yellow-400",
    },

    {
      title:
        "Completed Trips",

      value:
        reportMetrics.completedTrips,

      icon:
        BarChart3,

      glow:
        "from-cyan-500/20 to-blue-500/5",

      iconBg:
        "bg-cyan-500/10 text-cyan-400",
    },
  ];

  // Reports List
  const reports = [

    {
      title:
        "Customer Payment Report",

      description:
        "Track all customer invoices, payment history and pending receivables.",

      icon:
        Receipt,
    },

    {
      title:
        "Vendor Settlement Report",

      description:
        "Monitor vendor payouts, settlements and payable balances.",

      icon:
        Wallet,
    },

    {
      title:
        "Trip Profitability Report",

      description:
        "Analyze booking-wise profitability and operational expenses.",

      icon:
        TrendingUp,
    },

    {
      title:
        "Business Revenue Report",

      description:
        "Comprehensive ERP financial and transport revenue overview.",

      icon:
        IndianRupee,
    },
  ];

  return (

    <MainLayout>

      <div className="space-y-8">

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 lg:p-10">

          {/* Glow */}
          <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-[-120px] left-[-120px] w-[260px] h-[260px] bg-amber-500/5 blur-[120px] rounded-full"></div>

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10">

            {/* Left Content */}
            <div className="max-w-3xl">

              <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 font-semibold">

                ERP Reporting System

              </p>

              <h1 className="text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white mt-5">

                Business
                <br />

                <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">

                  Reports Center

                </span>

              </h1>

              <p className="text-zinc-500 mt-6 max-w-2xl leading-relaxed text-lg">

                Generate ERP financial reports, profitability analytics,
                vendor settlements, operational summaries and business insights.

              </p>

            </div>

            {/* Right Actions */}
            <div className="flex flex-col gap-4">

              {/* Export Button */}
              <button className="flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold shadow-[0_0_30px_rgba(250,204,21,0.18)] hover:scale-[1.02] transition-all duration-300">

                <Download
                  size={18}
                />

                Export ERP Reports

              </button>

              {/* Period */}
              <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10">

                <CalendarDays
                  size={18}
                  className="text-yellow-400"
                />

                <div>

                  <p className="text-sm text-white">

                    Financial Period

                  </p>

                  <p className="text-xs text-zinc-500 mt-1">

                    Current ERP operational cycle

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Report Metrics */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {reportCards.map(
            (
              item,
              index
            ) => {

              const Icon =
                item.icon;

              return (

                <div
                  key={index}
                  className="group relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] p-6 backdrop-blur-2xl hover:border-yellow-500/20 hover:-translate-y-1 transition-all duration-500"
                >

                  {/* Glow */}
                  <div
                    className={`absolute inset-0 opacity-40 bg-gradient-to-br ${item.glow}`}
                  ></div>

                  <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

                  <div className="relative z-10">

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-sm text-zinc-500">

                          {item.title}

                        </p>

                        <h2 className="text-4xl font-bold text-white mt-5">

                          {item.value}

                        </h2>

                      </div>

                      <div
                        className={`w-14 h-14 rounded-3xl flex items-center justify-center ${item.iconBg}`}
                      >

                        <Icon
                          size={24}
                        />

                      </div>

                    </div>

                  </div>

                </div>
              );
            }
          )}

        </section>

        {/* Reports Grid */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          {reports.map(
            (
              item,
              index
            ) => {

              const Icon =
                item.icon;

              return (

                <div
                  key={index}
                  className="group relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[34px] p-7 backdrop-blur-2xl hover:border-yellow-500/20 transition-all duration-500"
                >

                  <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

                  <div className="relative z-10">

                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">

                      <div>

                        <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 font-medium">

                          ERP REPORT

                        </p>

                        <h3 className="text-3xl font-bold text-white mt-4">

                          {item.title}

                        </h3>

                      </div>

                      <div className="w-16 h-16 rounded-3xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">

                        <Icon
                          size={28}
                        />

                      </div>

                    </div>

                    {/* Description */}
                    <p className="text-zinc-500 leading-relaxed">

                      {
                        item.description
                      }

                    </p>

                    {/* Action */}
                    <button className="mt-8 flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-yellow-500/20 hover:bg-yellow-500/10 transition-all duration-300 text-white">

                      <FileText
                        size={18}
                      />

                      Open Report

                    </button>

                  </div>

                </div>
              );
            }
          )}

        </section>

        {/* Financial Alerts */}
        <section className="relative overflow-hidden bg-red-500/[0.04] border border-red-500/20 rounded-[34px] p-7 backdrop-blur-2xl">

          <div className="absolute top-[-100px] right-[-100px] w-[240px] h-[240px] bg-red-500/10 blur-[120px] rounded-full"></div>

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

            {/* Left Content */}
            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-red-400 font-medium">

                ERP Financial Alerts

              </p>

              <h3 className="text-3xl font-bold text-white mt-4">

                Pending Payment Monitoring

              </h3>

              <p className="text-zinc-400 mt-4 leading-relaxed max-w-2xl">

                {
                  reportMetrics.pendingPayments
                } bookings currently require payment reconciliation,
                invoice follow-up or settlement verification.

              </p>

            </div>

            {/* Right Stats */}
            <div className="px-7 py-5 rounded-3xl bg-red-500/10 border border-red-500/20">

              <h2 className="text-5xl font-bold text-red-400">

                {
                  reportMetrics.pendingPayments
                }

              </h2>

              <p className="text-sm text-zinc-400 mt-2">

                Pending Payments

              </p>

            </div>

          </div>

        </section>

      </div>

    </MainLayout>
  );
}

export default Reports;