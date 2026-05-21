import {
  X,
  MapPin,
  User,
  Car,
  CreditCard,
  Clock3,
  Phone,
  Building2,
  CalendarDays,
  Route,
  BadgeIndianRupee,
  Receipt,
} from "lucide-react";

import { motion } from "framer-motion";

const cardClass =
  "rounded-3xl border border-white/10 bg-white/[0.03] p-6";

const financeCardClass =
  "rounded-2xl border border-white/5 bg-black/20 p-5";

function BookingDetailsDrawer({
  trip,
  closeDrawer,
}) {

  if (!trip) return null;

  const bookingStatus =
    trip.tripStatus ||
    trip.status;

  const timeline = [

    {
      title:
        "Booking Created",

      description:
        "Ride booking was successfully created.",
    },

    {
      title:
        "Vendor Assigned",

      description:
        `${trip.vendor || "Vendor"} assigned for operational handling.`,
    },

    {
      title:
        "Driver Assigned",

      description:
        `${trip.driver || "Driver"} accepted the ride assignment.`,
    },

    {
      title:
        bookingStatus ===
        "Completed"
          ? "Ride Completed"
          : bookingStatus ===
            "Ongoing"
          ? "Ride In Progress"
          : bookingStatus ===
            "Cancelled"
          ? "Ride Cancelled"
          : "Awaiting Operations",

      description:
        bookingStatus ===
        "Completed"
          ? "Customer reached destination successfully."
          : bookingStatus ===
            "Ongoing"
          ? "Driver is currently on active ride."
          : bookingStatus ===
            "Cancelled"
          ? "Ride was cancelled before completion."
          : "Booking is waiting for operational action.",
    },
  ];

  return (

    <div className="fixed inset-0 z-[250] flex justify-end bg-black/75 backdrop-blur-xl">

      <motion.div
        initial={{
          x: 80,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        exit={{
          x: 80,
          opacity: 0,
        }}
        transition={{
          duration: 0.28,
        }}
        className="relative h-full w-full max-w-2xl overflow-y-auto border-l border-white/10 bg-[#090909]/95 backdrop-blur-3xl"
      >

        {/* Glow */}
        <div className="absolute right-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-yellow-500/10 blur-[140px]"></div>

        <div className="absolute bottom-[-120px] left-[-120px] h-[240px] w-[240px] rounded-full bg-amber-500/10 blur-[140px]"></div>

        {/* Content */}
        <div className="relative z-10 p-8">

          {/* Header */}
          <div className="mb-10 flex items-start justify-between gap-5">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
                ERP Booking Operations
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
                Booking Overview
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-500">
                Detailed operational, customer and financial overview for this ride booking.
              </p>

            </div>

            <button
              onClick={closeDrawer}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-transparent transition-all duration-300 hover:border-yellow-500/20 hover:bg-white/[0.05]"
            >

              <X
                size={18}
                className="text-zinc-400"
              />

            </button>

          </div>

          {/* Top Card */}
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex items-center gap-5">

                <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-yellow-400 to-amber-500 text-3xl font-bold text-black shadow-[0_0_40px_rgba(250,204,21,0.18)]">

                  {
                    trip.customer?.charAt(
                      0
                    )
                  }

                </div>

                <div>

                  <p className="text-sm text-zinc-500">
                    Customer
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-white">
                    {trip.customer}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    {trip.bookingId ||
                      trip.invoiceNo ||
                      "ERP Booking"}
                  </p>

                </div>

              </div>

              <div className="flex flex-col items-start gap-3 lg:items-end">

                <span
                  className={`rounded-full px-5 py-3 text-sm font-semibold ${trip.color}`}
                >

                  {bookingStatus}

                </span>

                <p className="text-sm text-zinc-500">
                  {trip.paymentStatus ||
                    "Pending Payment"}
                </p>

              </div>

            </div>

          </div>

          {/* Information Grid */}
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">

            <div className={cardClass}>

              <div className="flex items-center gap-4">

                <Phone
                  className="text-yellow-400"
                  size={24}
                />

                <div>

                  <p className="text-sm text-zinc-500">
                    Contact
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {trip.phone ||
                      "Not Available"}
                  </h3>

                </div>

              </div>

            </div>

            <div className={cardClass}>

              <div className="flex items-center gap-4">

                <Route
                  className="text-cyan-400"
                  size={24}
                />

                <div>

                  <p className="text-sm text-zinc-500">
                    Trip Type
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {trip.tripType ||
                      trip.bookingType}
                  </h3>

                </div>

              </div>

            </div>

            <div className={cardClass}>

              <div className="flex items-center gap-4">

                <MapPin
                  className="text-emerald-400"
                  size={24}
                />

                <div>

                  <p className="text-sm text-zinc-500">
                    Pickup
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {trip.pickup}
                  </h3>

                </div>

              </div>

            </div>

            <div className={cardClass}>

              <div className="flex items-center gap-4">

                <MapPin
                  className="text-blue-400"
                  size={24}
                />

                <div>

                  <p className="text-sm text-zinc-500">
                    Drop
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {trip.drop}
                  </h3>

                </div>

              </div>

            </div>

            <div className={cardClass}>

              <div className="flex items-center gap-4">

                <User
                  className="text-yellow-400"
                  size={24}
                />

                <div>

                  <p className="text-sm text-zinc-500">
                    Driver
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {trip.driver ||
                      "Not Assigned"}
                  </h3>

                  <p className="mt-2 text-xs text-zinc-500">
                    {trip.driverPhone ||
                      "Driver contact unavailable"}
                  </p>

                </div>

              </div>

            </div>

            <div className={cardClass}>

              <div className="flex items-center gap-4">

                <Car
                  className="text-indigo-400"
                  size={24}
                />

                <div>

                  <p className="text-sm text-zinc-500">
                    Vehicle
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {trip.vehicle}
                  </h3>

                </div>

              </div>

            </div>

            <div className={cardClass}>

              <div className="flex items-center gap-4">

                <Building2
                  className="text-orange-400"
                  size={24}
                />

                <div>

                  <p className="text-sm text-zinc-500">
                    Vendor
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {trip.vendor}
                  </h3>

                </div>

              </div>

            </div>

            <div className={cardClass}>

              <div className="flex items-center gap-4">

                <CalendarDays
                  className="text-purple-400"
                  size={24}
                />

                <div>

                  <p className="text-sm text-zinc-500">
                    Trip Date
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {trip.date ||
                      trip.rideDate}
                  </h3>

                </div>

              </div>

            </div>

          </div>

          {/* Financial Section */}
          <div className="mt-8 rounded-[30px] border border-white/10 bg-white/[0.03] p-7">

            <div className="mb-8 flex items-center gap-4">

              <CreditCard
                className="text-green-400"
                size={24}
              />

              <div>

                <p className="text-sm text-zinc-500">
                  Financial Operations
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  Revenue & Expense Analysis
                </h3>

              </div>

            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <div className={financeCardClass}>

                <div className="flex items-center justify-between">

                  <p className="text-sm text-zinc-500">
                    Revenue
                  </p>

                  <BadgeIndianRupee
                    size={18}
                    className="text-emerald-400"
                  />

                </div>

                <h3 className="mt-4 text-3xl font-bold text-white">
                  ₹
                  {trip.total ||
                    trip.fare ||
                    0}
                </h3>

              </div>

              <div className={financeCardClass}>

                <div className="flex items-center justify-between">

                  <p className="text-sm text-zinc-500">
                    Total Expenses
                  </p>

                  <Receipt
                    size={18}
                    className="text-red-400"
                  />

                </div>

                <h3 className="mt-4 text-3xl font-bold text-red-400">
                  ₹
                  {trip.totalExpenses ||
                    0}
                </h3>

              </div>

              <div className={financeCardClass}>

                <p className="text-sm text-zinc-500">
                  Net Profit
                </p>

                <h3 className="mt-4 text-3xl font-bold text-emerald-400">
                  ₹
                  {trip.profit ||
                    0}
                </h3>

              </div>

              <div className={financeCardClass}>

                <p className="text-sm text-zinc-500">
                  Vendor Rate
                </p>

                <h3 className="mt-4 text-3xl font-bold text-yellow-400">
                  ₹
                  {trip.vendorRate ||
                    0}
                </h3>

              </div>

              <div className={financeCardClass}>

                <p className="text-sm text-zinc-500">
                  GST
                </p>

                <h3 className="mt-4 text-2xl font-bold text-cyan-400">
                  ₹
                  {trip.gst ||
                    0}
                </h3>

              </div>

              <div className={financeCardClass}>

                <p className="text-sm text-zinc-500">
                  TDS
                </p>

                <h3 className="mt-4 text-2xl font-bold text-orange-400">
                  ₹
                  {trip.tds ||
                    0}
                </h3>

              </div>

            </div>

          </div>

          {/* Status System */}
          <div className="mt-8 rounded-[30px] border border-white/10 bg-white/[0.03] p-7">

            <h3 className="text-2xl font-bold text-white">
              ERP Status System
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              Track operational and payment workflow states.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">

              <div className={financeCardClass}>

                <p className="text-sm text-zinc-500">
                  Payment Status
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  {trip.paymentStatus ||
                    "Pending"}
                </h3>

              </div>

              <div className={financeCardClass}>

                <p className="text-sm text-zinc-500">
                  Invoice Status
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  {trip.invoiceStatus ||
                    "Pending"}
                </h3>

              </div>

              <div className={financeCardClass}>

                <p className="text-sm text-zinc-500">
                  Vendor Status
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  {trip.vendorStatus ||
                    "Pending"}
                </h3>

              </div>

              <div className={financeCardClass}>

                <p className="text-sm text-zinc-500">
                  Booking Status
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  {trip.bookingStatus ||
                    bookingStatus}
                </h3>

              </div>

            </div>

          </div>

          {/* Timeline */}
          <div className="mt-8 rounded-[30px] border border-white/10 bg-white/[0.03] p-8">

            <div className="mb-8 flex items-center gap-4">

              <Clock3
                className="text-yellow-400"
                size={24}
              />

              <div>

                <p className="text-sm text-zinc-500">
                  Operations Timeline
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  Booking Activity
                </h3>

              </div>

            </div>

            <div className="space-y-8">

              {timeline.map(
                (
                  item,
                  index
                ) => (

                  <div
                    key={index}
                    className="flex gap-5"
                  >

                    <div className="flex flex-col items-center">

                      <div className="h-4 w-4 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.5)]"></div>

                      {index !==
                        timeline.length -
                          1 && (

                        <div className="mt-2 h-full w-px bg-white/10"></div>

                      )}

                    </div>

                    <div>

                      <h4 className="font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-2 leading-relaxed text-zinc-500">
                        {
                          item.description
                        }
                      </p>

                    </div>

                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default BookingDetailsDrawer;