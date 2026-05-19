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

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">

          <p className="text-sm text-zinc-500">
            Total Vendor Payments
          </p>

          <h2 className="text-3xl font-bold mt-3">
            ₹7.2L
          </h2>

        </div>

        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">

          <p className="text-sm text-zinc-500">
            Pending Dues
          </p>

          <h2 className="text-3xl font-bold mt-3 text-yellow-400">
            ₹1.4L
          </h2>

        </div>

        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">

          <p className="text-sm text-zinc-500">
            Paid Vendors
          </p>

          <h2 className="text-3xl font-bold mt-3 text-green-400">
            42 Vendors
          </h2>

        </div>

        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">

          <p className="text-sm text-zinc-500">
            Monthly Transactions
          </p>

          <h2 className="text-3xl font-bold mt-3">
            212 Entries
          </h2>

        </div>

      </div>

      {/* Vendor Table */}
      <div className="bg-white/[0.04] border border-white/10 rounded-3xl overflow-hidden">

        {/* Header */}
        <div className="p-6 border-b border-white/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div>

            <h2 className="text-2xl font-bold">
              Vendor Transactions
            </h2>

            <p className="text-zinc-500 mt-2">
              Track vendor payouts and pending dues.
            </p>

          </div>

          <div className="flex flex-col sm:flex-row gap-3">

            <input
              type="text"
              placeholder="Search vendor..."
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-3 text-sm outline-none focus:border-yellow-500/40 transition-all duration-300"
            />

            <button className="px-5 py-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-sm font-semibold hover:scale-[1.02] transition-all duration-300">

              Export

            </button>

          </div>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px]">

            <thead className="bg-white/[0.03]">

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
                  className="border-t border-white/5 hover:bg-white/[0.02] transition-all duration-300"
                >

                  <td className="px-6 py-5 text-sm font-medium text-white">
                    {item.id}
                  </td>

                  <td className="px-6 py-5 text-sm text-zinc-300">
                    {item.vendor}
                  </td>

                  <td className="px-6 py-5 text-sm text-zinc-300">
                    {item.total}
                  </td>

                  <td className="px-6 py-5 text-sm text-green-400">
                    {item.paid}
                  </td>

                  <td className="px-6 py-5 text-sm text-yellow-400">
                    {item.due}
                  </td>

                  <td className="px-6 py-5 text-sm text-zinc-400">
                    {item.date}
                  </td>

                  <td className="px-6 py-5">

                    <span
                      className={`px-4 py-2 rounded-full text-xs font-semibold ${
                        item.status === "Paid"
                          ? "bg-green-500/15 text-green-400"
                          : item.status === "Pending"
                          ? "bg-yellow-500/15 text-yellow-400"
                          : "bg-red-500/15 text-red-400"
                      }`}
                    >

                      {item.status}

                    </span>

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