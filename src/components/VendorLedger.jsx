import {
  Wallet,
  TrendingUp,
  Clock3,
  Receipt,
  Search,
  Download,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

function VendorLedger() {

  const vendors = [
    {
      id: "#VEND-2041",
      vendor: "Delhi Taxi Service",
      total: "₹22,000",
      paid: "₹15,000",
      due: "₹7,000",
      status: "Pending",
      date: "18 May 2026",
    },

    {
      id: "#VEND-2042",
      vendor: "Royal Cab Partners",
      total: "₹18,500",
      paid: "₹18,500",
      due: "₹0",
      status: "Paid",
      date: "16 May 2026",
    },

    {
      id: "#VEND-2043",
      vendor: "City Ride Travels",
      total: "₹31,000",
      paid: "₹10,000",
      due: "₹21,000",
      status: "Overdue",
      date: "14 May 2026",
    },
  ];

  return (

    <div className="space-y-8">

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* Total */}
        <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] p-6 backdrop-blur-2xl">

          <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

          <div className="relative z-10">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-zinc-500">

                  Total Vendor Payments

                </p>

                <h2 className="text-4xl font-bold mt-5 tracking-tight text-white">

                  ₹7.2L

                </h2>

              </div>

              <div className="w-14 h-14 rounded-3xl bg-yellow-500/10 border border-yellow-500/10 text-yellow-400 flex items-center justify-center">

                <Wallet size={24} />

              </div>

            </div>

          </div>

        </div>

        {/* Pending */}
        <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] p-6 backdrop-blur-2xl">

          <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

          <div className="relative z-10">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-zinc-500">

                  Pending Dues

                </p>

                <h2 className="text-4xl font-bold mt-5 tracking-tight text-yellow-400">

                  ₹1.4L

                </h2>

              </div>

              <div className="w-14 h-14 rounded-3xl bg-yellow-500/10 border border-yellow-500/10 text-yellow-400 flex items-center justify-center">

                <Clock3 size={24} />

              </div>

            </div>

          </div>

        </div>

        {/* Paid */}
        <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] p-6 backdrop-blur-2xl">

          <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-emerald-500/10 blur-[100px] rounded-full"></div>

          <div className="relative z-10">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-zinc-500">

                  Paid Vendors

                </p>

                <h2 className="text-4xl font-bold mt-5 tracking-tight text-emerald-400">

                  42

                </h2>

              </div>

              <div className="w-14 h-14 rounded-3xl bg-emerald-500/10 border border-emerald-500/10 text-emerald-400 flex items-center justify-center">

                <TrendingUp size={24} />

              </div>

            </div>

          </div>

        </div>

        {/* Transactions */}
        <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] p-6 backdrop-blur-2xl">

          <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-blue-500/10 blur-[100px] rounded-full"></div>

          <div className="relative z-10">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-zinc-500">

                  Monthly Transactions

                </p>

                <h2 className="text-4xl font-bold mt-5 tracking-tight text-white">

                  212

                </h2>

              </div>

              <div className="w-14 h-14 rounded-3xl bg-blue-500/10 border border-blue-500/10 text-blue-400 flex items-center justify-center">

                <Receipt size={24} />

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Table */}
      <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[38px] backdrop-blur-2xl">

        {/* Glow */}
        <div className="absolute top-[-120px] right-[-120px] w-[240px] h-[240px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

        {/* Header */}
        <div className="relative z-10 p-6 lg:p-8 border-b border-white/10">

          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

            <div>

              <div className="flex items-center gap-2">

                <Sparkles
                  size={14}
                  className="text-yellow-400"
                />

                <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

                  Vendor Ledger

                </p>

              </div>

              <h2 className="text-3xl font-bold text-white mt-4">

                Vendor Transactions

              </h2>

              <p className="text-zinc-500 mt-3 max-w-2xl leading-relaxed">

                Monitor vendor payouts, payment workflow,
                transaction history and outstanding balances.

              </p>

            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">

              {/* Search */}
              <div className="relative">

                <Search
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                  type="text"
                  placeholder="Search vendor..."
                  className="w-full sm:w-[280px] bg-black/30 border border-white/10 rounded-2xl pl-14 pr-5 py-4 text-white outline-none focus:border-yellow-500/40 transition-all duration-300"
                />

              </div>

              {/* Export */}
              <button className="group relative overflow-hidden px-5 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-sm font-semibold transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(250,204,21,0.18)]">

                <div className="flex items-center gap-2">

                  <Download size={16} />

                  Export Report

                </div>

              </button>

            </div>

          </div>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[1100px]">

            <thead className="bg-white/[0.03] border-b border-white/10">

              <tr>

                <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                  Vendor ID
                </th>

                <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                  Vendor Name
                </th>

                <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                  Total
                </th>

                <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                  Paid
                </th>

                <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                  Due
                </th>

                <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                  Date
                </th>

                <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {vendors.map((item, index) => (

                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-all duration-300"
                >

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div className="w-11 h-11 rounded-2xl bg-yellow-500/10 border border-yellow-500/10 text-yellow-400 flex items-center justify-center">

                        <Wallet size={18} />

                      </div>

                      <div>

                        <p className="text-white font-semibold">
                          {item.id}
                        </p>

                        <p className="text-xs text-zinc-500 mt-1">
                          ERP Transaction
                        </p>

                      </div>

                    </div>

                  </td>

                  <td className="px-6 py-5 text-sm text-zinc-300 font-medium">
                    {item.vendor}
                  </td>

                  <td className="px-6 py-5 text-sm text-white font-semibold">
                    {item.total}
                  </td>

                  <td className="px-6 py-5 text-sm text-emerald-400 font-semibold">
                    {item.paid}
                  </td>

                  <td className="px-6 py-5 text-sm text-yellow-400 font-semibold">
                    {item.due}
                  </td>

                  <td className="px-6 py-5 text-sm text-zinc-500">
                    {item.date}
                  </td>

                  <td className="px-6 py-5">

                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold border ${
                        item.status === "Paid"

                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"

                          : item.status === "Pending"

                          ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"

                          : "bg-red-500/10 text-red-400 border-red-500/20"
                      }`}
                    >

                      <ArrowUpRight size={13} />

                      {item.status}

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default VendorLedger;