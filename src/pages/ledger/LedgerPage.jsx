import {
  useState,
} from "react";

import MainLayout from "../../layout/MainLayout";

import CustomerLedger from "../../components/CustomerLedger";

import VendorLedger from "../../components/VendorLedger";

import {
  Wallet,
  Users,
  IndianRupee,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

import useApp from "../../hooks/useApp";

function LedgerPage() {

  // Active Tab
  const [
    activeTab,
    setActiveTab,
  ] = useState("customer");

  // App Data
  const {
    trips,
  } = useApp();

  // Financial Metrics
  const financialMetrics = {

    totalReceivable:
      trips.reduce(
        (
          total,
          trip
        ) =>
          trip.paymentStatus !==
          "Paid"
            ? total +
              Number(
                trip.total || 0
              )
            : total,
        0
      ),

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

    activeAccounts:
      trips.length,
  };

  // Stats Cards
  const stats = [

    {
      title:
        "Receivables",

      value:
        `₹${financialMetrics.totalReceivable.toLocaleString()}`,

      icon:
        Wallet,

      glow:
        "from-yellow-500/20 to-amber-500/5",

      iconBg:
        "bg-yellow-500/10 text-yellow-400",
    },

    {
      title:
        "Revenue",

      value:
        `₹${financialMetrics.totalRevenue.toLocaleString()}`,

      icon:
        IndianRupee,

      glow:
        "from-emerald-500/20 to-green-500/5",

      iconBg:
        "bg-emerald-500/10 text-emerald-400",
    },

    {
      title:
        "Profit",

      value:
        `₹${financialMetrics.totalProfit.toLocaleString()}`,

      icon:
        TrendingUp,

      glow:
        "from-cyan-500/20 to-blue-500/5",

      iconBg:
        "bg-cyan-500/10 text-cyan-400",
    },

    {
      title:
        "Active Accounts",

      value:
        financialMetrics.activeAccounts,

      icon:
        Users,

      glow:
        "from-purple-500/20 to-pink-500/5",

      iconBg:
        "bg-purple-500/10 text-purple-400",
    },
  ];

  return (

    <MainLayout>

      <div className="space-y-8">

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 lg:p-10">

          {/* Glow Effects */}
          <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-[-120px] left-[-120px] w-[260px] h-[260px] bg-amber-500/5 blur-[120px] rounded-full"></div>

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10">

            {/* Left Content */}
            <div className="max-w-3xl">

              <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 font-semibold">

                ERP Financial Management

              </p>

              <h1 className="text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white mt-5">

                Ledger
                <br />

                <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">

                  Management System

                </span>

              </h1>

              <p className="text-zinc-500 mt-6 max-w-2xl leading-relaxed text-lg">

                Monitor customer receivables, vendor settlements,
                operational accounts, financial reconciliation and ERP ledger activity.

              </p>

            </div>

            {/* Financial Status */}
            <div className="px-7 py-5 rounded-3xl bg-white/[0.03] border border-white/10">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">

                  <CheckCircle2
                    size={22}
                    className="text-emerald-400"
                  />

                </div>

                <div>

                  <p className="text-sm text-zinc-500">

                    ERP Financial Status

                  </p>

                  <h3 className="text-2xl font-bold text-white mt-1">

                    Active

                  </h3>

                </div>

              </div>

              <p className="text-sm text-emerald-400 mt-4">

                Ledger systems synchronized successfully

              </p>

            </div>

          </div>

        </section>

        {/* Financial Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {stats.map(
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

                  {/* Gradient Glow */}
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

        {/* Ledger Tabs */}
        <section className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-2xl p-2 w-fit">

          {/* Customer Tab */}
          <button
            onClick={() =>
              setActiveTab(
                "customer"
              )
            }
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeTab ===
              "customer"
                ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-[0_0_24px_rgba(250,204,21,0.18)]"
                : "text-zinc-400 hover:text-white"
            }`}
          >

            Customer Ledger

          </button>

          {/* Vendor Tab */}
          <button
            onClick={() =>
              setActiveTab(
                "vendor"
              )
            }
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeTab ===
              "vendor"
                ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-[0_0_24px_rgba(250,204,21,0.18)]"
                : "text-zinc-400 hover:text-white"
            }`}
          >

            Vendor Ledger

          </button>

        </section>

        {/* Ledger Content */}
        <section>

          {activeTab ===
          "customer" ? (

            <CustomerLedger />

          ) : (

            <VendorLedger />

          )}

        </section>

      </div>

    </MainLayout>
  );
}

export default LedgerPage;