import {
  Search,
  Download,
  Wallet,
  CircleDollarSign,
  BadgeCheck,
  AlertTriangle,
  ArrowUpRight,
} from "lucide-react";

import {
  useMemo,
  useState,
} from "react";

function CustomerLedger() {

  const [search, setSearch] =
    useState("");

  const transactions = [
    {
      id: "#CUST-1024",
      customer:
        "Rahul Sharma",
      amount: 12500,
      paid: 10000,
      pending: 2500,
      status: "Pending",
      date: "18 May 2026",
    },

    {
      id: "#CUST-1025",
      customer:
        "Aman Verma",
      amount: 8400,
      paid: 8400,
      pending: 0,
      status: "Paid",
      date: "17 May 2026",
    },

    {
      id: "#CUST-1026",
      customer:
        "Priya Singh",
      amount: 15200,
      paid: 5000,
      pending: 10200,
      status: "Overdue",
      date: "15 May 2026",
    },
  ];

  const filteredTransactions =
    useMemo(() => {

      return transactions.filter(
        (item) =>
          item.customer
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          item.id
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    }, [search]);

  const totalRevenue =
    transactions.reduce(
      (
        total,
        item
      ) =>
        total +
        item.amount,
      0
    );

  const totalPaid =
    transactions.reduce(
      (
        total,
        item
      ) =>
        total +
        item.paid,
      0
    );

  const totalPending =
    transactions.reduce(
      (
        total,
        item
      ) =>
        total +
        item.pending,
      0
    );

  const paidTransactions =
    transactions.filter(
      (item) =>
        item.status ===
        "Paid"
    ).length;

  const formatCurrency =
    (amount) =>
      `₹${amount.toLocaleString(
        "en-IN"
      )}`;

  const summaryCards = [

    {
      title:
        "Total Revenue",
      value:
        formatCurrency(
          totalRevenue
        ),
      icon:
        Wallet,
      color:
        "text-white",
      glow:
        "bg-yellow-500/10",
    },

    {
      title:
        "Pending Payments",
      value:
        formatCurrency(
          totalPending
        ),
      icon:
        AlertTriangle,
      color:
        "text-yellow-400",
      glow:
        "bg-yellow-500/10",
    },

    {
      title:
        "Completed Payments",
      value:
        formatCurrency(
          totalPaid
        ),
      icon:
        BadgeCheck,
      color:
        "text-emerald-400",
      glow:
        "bg-emerald-500/10",
    },

    {
      title:
        "Successful Transactions",
      value: `${paidTransactions}`,
      icon:
        CircleDollarSign,
      color:
        "text-cyan-400",
      glow:
        "bg-cyan-500/10",
    },
  ];

  const getStatusStyles =
    (status) => {

      switch (status) {

        case "Paid":

          return "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20";

        case "Pending":

          return "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20";

        default:

          return "bg-red-500/15 text-red-400 border border-red-500/20";
      }
    };

  return (

    <div className="space-y-8">

      {/* Summary */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        {summaryCards.map(
          (
            item,
            index
          ) => {

            const Icon =
              item.icon;

            return (

              <div
                key={index}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/20"
              >

                {/* Glow */}
                <div
                  className={`absolute right-[-50px] top-[-50px] h-[140px] w-[140px] rounded-full blur-[90px] ${item.glow}`}
                ></div>

                <div className="relative z-10">

                  <div className="flex items-start justify-between">

                    <div>

                      <p className="text-sm text-zinc-500">

                        {
                          item.title
                        }

                      </p>

                      <h2
                        className={`mt-4 text-3xl font-bold tracking-tight ${item.color}`}
                      >

                        {
                          item.value
                        }

                      </h2>

                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">

                      <Icon
                        size={24}
                        className={
                          item.color
                        }
                      />

                    </div>

                  </div>

                  <div className="mt-6 flex items-center gap-2 text-xs text-zinc-500">

                    <ArrowUpRight
                      size={14}
                      className="text-emerald-400"
                    />

                    <span>
                      Updated from recent customer payments
                    </span>

                  </div>

                </div>

              </div>
            );
          }
        )}

      </div>

      {/* Ledger Table */}
      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">

        {/* Glow */}
        <div className="absolute bottom-[-120px] right-[-120px] h-[240px] w-[240px] rounded-full bg-yellow-500/10 blur-[120px]"></div>

        <div className="relative z-10">

          {/* Top Bar */}
          <div className="flex flex-col gap-5 border-b border-white/10 p-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">

                Customer Ledger

              </p>

              <h2 className="mt-4 text-3xl font-bold text-white">

                Customer Transactions

              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500">

                Manage customer payments,
                booking settlements and
                outstanding balances from one place.

              </p>

            </div>

            <div className="flex flex-col gap-3 sm:flex-row">

              {/* Search */}
              <div className="relative">

                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(event) =>
                    setSearch(
                      event.target.value
                    )
                  }
                  placeholder="Search customer..."
                  className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 pl-12 pr-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-yellow-500/30 sm:w-[260px]"
                />

              </div>

              {/* Export */}
              <button className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-5 text-sm font-semibold text-black shadow-[0_0_30px_rgba(250,204,21,0.16)] transition-all duration-300 hover:scale-[1.02]">

                <Download
                  size={18}
                />

                Export

              </button>

            </div>

          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full min-w-[920px]">

              <thead className="bg-white/[0.03]">

                <tr>

                  {[
                    "Booking ID",
                    "Customer",
                    "Amount",
                    "Paid",
                    "Pending",
                    "Date",
                    "Status",
                  ].map(
                    (
                      heading
                    ) => (

                      <th
                        key={
                          heading
                        }
                        className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500"
                      >

                        {heading}

                      </th>
                    )
                  )}

                </tr>

              </thead>

              <tbody>

                {filteredTransactions.map(
                  (
                    item,
                    index
                  ) => (

                    <tr
                      key={index}
                      className="border-t border-white/[0.05] transition-all duration-300 hover:bg-white/[0.03]"
                    >

                      <td className="px-6 py-5">

                        <div className="font-semibold text-white">

                          {
                            item.id
                          }

                        </div>

                      </td>

                      <td className="px-6 py-5">

                        <div>

                          <p className="font-medium text-white">

                            {
                              item.customer
                            }

                          </p>

                          <p className="mt-1 text-xs text-zinc-500">

                            Premium Customer

                          </p>

                        </div>

                      </td>

                      <td className="px-6 py-5 text-sm font-medium text-white">

                        {formatCurrency(
                          item.amount
                        )}

                      </td>

                      <td className="px-6 py-5 text-sm font-semibold text-emerald-400">

                        {formatCurrency(
                          item.paid
                        )}

                      </td>

                      <td className="px-6 py-5 text-sm font-semibold text-yellow-400">

                        {formatCurrency(
                          item.pending
                        )}

                      </td>

                      <td className="px-6 py-5 text-sm text-zinc-400">

                        {
                          item.date
                        }

                      </td>

                      <td className="px-6 py-5">

                        <span
                          className={`inline-flex rounded-full px-4 py-2 text-xs font-semibold ${getStatusStyles(
                            item.status
                          )}`}
                        >

                          {
                            item.status
                          }

                        </span>

                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>

          </div>

          {/* Empty State */}
          {filteredTransactions.length ===
            0 && (

            <div className="flex flex-col items-center justify-center px-6 py-16 text-center">

              <Search
                size={34}
                className="text-zinc-600"
              />

              <h3 className="mt-5 text-2xl font-bold text-white">

                No Transactions Found

              </h3>

              <p className="mt-3 text-zinc-500">

                Try searching with another customer name or booking ID.

              </p>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default CustomerLedger;