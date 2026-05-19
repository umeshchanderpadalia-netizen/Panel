function CustomerLedger() {

  const transactions = [
    {
      id: "#CUST-1024",
      customer: "Rahul Sharma",
      amount: "₹12,500",
      paid: "₹10,000",
      pending: "₹2,500",
      status: "Pending",
      date: "18 May 2026",
    },

    {
      id: "#CUST-1025",
      customer: "Aman Verma",
      amount: "₹8,400",
      paid: "₹8,400",
      pending: "₹0",
      status: "Paid",
      date: "17 May 2026",
    },

    {
      id: "#CUST-1026",
      customer: "Priya Singh",
      amount: "₹15,200",
      paid: "₹5,000",
      pending: "₹10,200",
      status: "Overdue",
      date: "15 May 2026",
    },
  ];

  return (

    <div className="space-y-8">

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">

          <p className="text-sm text-zinc-500">
            Total Revenue
          </p>

          <h2 className="text-3xl font-bold mt-3">
            ₹4.8L
          </h2>

        </div>

        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">

          <p className="text-sm text-zinc-500">
            Pending Payments
          </p>

          <h2 className="text-3xl font-bold mt-3 text-yellow-400">
            ₹82K
          </h2>

        </div>

        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">

          <p className="text-sm text-zinc-500">
            Completed Payments
          </p>

          <h2 className="text-3xl font-bold mt-3 text-green-400">
            ₹3.9L
          </h2>

        </div>

        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">

          <p className="text-sm text-zinc-500">
            This Month
          </p>

          <h2 className="text-3xl font-bold mt-3">
            128 Transactions
          </h2>

        </div>

      </div>

      {/* Ledger Table */}
      <div className="bg-white/[0.04] border border-white/10 rounded-3xl overflow-hidden">

        {/* Top Bar */}
        <div className="p-6 border-b border-white/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div>

            <h2 className="text-2xl font-bold">
              Customer Transactions
            </h2>

            <p className="text-zinc-500 mt-2">
              Manage customer payments and booking records.
            </p>

          </div>

          <div className="flex flex-col sm:flex-row gap-3">

            <input
              type="text"
              placeholder="Search customer..."
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
                  Booking ID
                </th>

                <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                  Customer
                </th>

                <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                  Amount
                </th>

                <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                  Paid
                </th>

                <th className="text-left px-6 py-5 text-sm font-semibold text-zinc-400">
                  Pending
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

              {transactions.map((item, index) => (

                <tr
                  key={index}
                  className="border-t border-white/5 hover:bg-white/[0.02] transition-all duration-300"
                >

                  <td className="px-6 py-5 text-sm font-medium text-white">
                    {item.id}
                  </td>

                  <td className="px-6 py-5 text-sm text-zinc-300">
                    {item.customer}
                  </td>

                  <td className="px-6 py-5 text-sm text-zinc-300">
                    {item.amount}
                  </td>

                  <td className="px-6 py-5 text-sm text-green-400">
                    {item.paid}
                  </td>

                  <td className="px-6 py-5 text-sm text-yellow-400">
                    {item.pending}
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

export default CustomerLedger;