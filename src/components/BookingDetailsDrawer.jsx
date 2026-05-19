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
} from "lucide-react";

function BookingDetailsDrawer({
  trip,
  closeDrawer,
}) {

  if (!trip) return null;

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
        `${trip.vendor} assigned for operational handling.`,
    },

    {
      title:
        "Driver Assigned",

      description:
        `${trip.driver} accepted the ride assignment.`,
    },

    {
      title:
        trip.tripStatus ===
        "Completed"
          ? "Ride Completed"
          : trip.tripStatus ===
            "Ongoing"
          ? "Ride In Progress"
          : trip.tripStatus ===
            "Cancelled"
          ? "Ride Cancelled"
          : "Awaiting Operations",

      description:
        trip.tripStatus ===
        "Completed"
          ? "Customer reached destination successfully."
          : trip.tripStatus ===
            "Ongoing"
          ? "Driver is currently on active ride."
          : trip.tripStatus ===
            "Cancelled"
          ? "Ride was cancelled before completion."
          : "Booking is waiting for operational action.",
    },
  ];

  return (

    <div className="fixed inset-0 z-[250] bg-black/75 backdrop-blur-xl flex justify-end">

      {/* Drawer */}
      <div className="relative w-full max-w-2xl h-full bg-[#090909]/95 border-l border-white/10 backdrop-blur-3xl overflow-y-auto">

        {/* Glow */}
        <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

        {/* Content */}
        <div className="relative z-10 p-8">

          {/* Header */}
          <div className="flex items-start justify-between mb-10">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

                ERP Booking Operations

              </p>

              <h2 className="text-4xl font-bold mt-4 text-white">

                Booking Overview

              </h2>

            </div>

            <button
              onClick={closeDrawer}
              className="w-12 h-12 rounded-2xl hover:bg-white/[0.05] border border-transparent hover:border-yellow-500/20 flex items-center justify-center transition-all duration-300"
            >

              <X
                size={18}
                className="text-zinc-400"
              />

            </button>

          </div>

          {/* Top Card */}
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              <div className="flex items-center gap-5">

                <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-black text-3xl font-bold">

                  {
                    trip.customer?.charAt(
                      0
                    )
                  }

                </div>

                <div>

                  <p className="text-zinc-500 text-sm">

                    Customer

                  </p>

                  <h3 className="text-3xl font-bold mt-2 text-white">

                    {trip.customer}

                  </h3>

                  <p className="text-zinc-500 mt-2">

                    {trip.bookingId}

                  </p>

                </div>

              </div>

              <span
                className={`px-5 py-3 rounded-full text-sm font-semibold ${trip.color}`}
              >

                {trip.tripStatus}

              </span>

            </div>

          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

            {/* Phone */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-4">

                <Phone
                  className="text-yellow-400"
                  size={24}
                />

                <div>

                  <p className="text-zinc-500 text-sm">

                    Contact

                  </p>

                  <h3 className="text-lg font-semibold mt-2 text-white">

                    {trip.phone}

                  </h3>

                </div>

              </div>

            </div>

            {/* Trip Type */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-4">

                <Route
                  className="text-cyan-400"
                  size={24}
                />

                <div>

                  <p className="text-zinc-500 text-sm">

                    Trip Type

                  </p>

                  <h3 className="text-lg font-semibold mt-2 text-white">

                    {trip.tripType}

                  </h3>

                </div>

              </div>

            </div>

            {/* Pickup */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-4">

                <MapPin
                  className="text-emerald-400"
                  size={24}
                />

                <div>

                  <p className="text-zinc-500 text-sm">

                    Pickup

                  </p>

                  <h3 className="text-lg font-semibold mt-2 text-white">

                    {trip.pickup}

                  </h3>

                </div>

              </div>

            </div>

            {/* Drop */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-4">

                <MapPin
                  className="text-blue-400"
                  size={24}
                />

                <div>

                  <p className="text-zinc-500 text-sm">

                    Drop

                  </p>

                  <h3 className="text-lg font-semibold mt-2 text-white">

                    {trip.drop}

                  </h3>

                </div>

              </div>

            </div>

            {/* Driver */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-4">

                <User
                  className="text-yellow-400"
                  size={24}
                />

                <div>

                  <p className="text-zinc-500 text-sm">

                    Driver

                  </p>

                  <h3 className="text-lg font-semibold mt-2 text-white">

                    {trip.driver}

                  </h3>

                  <p className="text-xs text-zinc-500 mt-2">

                    {trip.driverPhone}

                  </p>

                </div>

              </div>

            </div>

            {/* Vehicle */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-4">

                <Car
                  className="text-indigo-400"
                  size={24}
                />

                <div>

                  <p className="text-zinc-500 text-sm">

                    Vehicle

                  </p>

                  <h3 className="text-lg font-semibold mt-2 text-white">

                    {trip.vehicle}

                  </h3>

                </div>

              </div>

            </div>

            {/* Vendor */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-4">

                <Building2
                  className="text-orange-400"
                  size={24}
                />

                <div>

                  <p className="text-zinc-500 text-sm">

                    Vendor

                  </p>

                  <h3 className="text-lg font-semibold mt-2 text-white">

                    {trip.vendor}

                  </h3>

                </div>

              </div>

            </div>

            {/* Date */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-4">

                <CalendarDays
                  className="text-purple-400"
                  size={24}
                />

                <div>

                  <p className="text-zinc-500 text-sm">

                    Trip Date

                  </p>

                  <h3 className="text-lg font-semibold mt-2 text-white">

                    {trip.date}

                  </h3>

                </div>

              </div>

            </div>

          </div>

          {/* ERP Finance */}
          <div className="mt-8 bg-white/[0.03] border border-white/10 rounded-3xl p-7">

            <div className="flex items-center gap-4 mb-8">

              <CreditCard
                className="text-green-400"
                size={24}
              />

              <div>

                <p className="text-zinc-500 text-sm">

                  Financial Operations

                </p>

                <h3 className="text-2xl font-bold mt-2 text-white">

                  Revenue & Expense Analysis

                </h3>

              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div className="bg-black/20 border border-white/5 rounded-2xl p-5">

                <p className="text-sm text-zinc-500">

                  Revenue

                </p>

                <h3 className="text-3xl font-bold text-white mt-3">

                  ₹{trip.total}

                </h3>

              </div>

              <div className="bg-black/20 border border-white/5 rounded-2xl p-5">

                <p className="text-sm text-zinc-500">

                  Total Expenses

                </p>

                <h3 className="text-3xl font-bold text-red-400 mt-3">

                  ₹{trip.totalExpenses}

                </h3>

              </div>

              <div className="bg-black/20 border border-white/5 rounded-2xl p-5">

                <p className="text-sm text-zinc-500">

                  Net Profit

                </p>

                <h3 className="text-3xl font-bold text-emerald-400 mt-3">

                  ₹{trip.profit}

                </h3>

              </div>

              <div className="bg-black/20 border border-white/5 rounded-2xl p-5">

                <p className="text-sm text-zinc-500">

                  Vendor Rate

                </p>

                <h3 className="text-3xl font-bold text-yellow-400 mt-3">

                  ₹{trip.vendorRate}

                </h3>

              </div>

              <div className="bg-black/20 border border-white/5 rounded-2xl p-5">

                <p className="text-sm text-zinc-500">

                  GST

                </p>

                <h3 className="text-2xl font-bold text-cyan-400 mt-3">

                  ₹{trip.gst}

                </h3>

              </div>

              <div className="bg-black/20 border border-white/5 rounded-2xl p-5">

                <p className="text-sm text-zinc-500">

                  TDS

                </p>

                <h3 className="text-2xl font-bold text-orange-400 mt-3">

                  ₹{trip.tds}

                </h3>

              </div>

            </div>

          </div>

          {/* ERP Status */}
          <div className="mt-8 bg-white/[0.03] border border-white/10 rounded-3xl p-7">

            <h3 className="text-2xl font-bold text-white">

              ERP Status System

            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

              <div className="bg-black/20 border border-white/5 rounded-2xl p-5">

                <p className="text-sm text-zinc-500">

                  Payment Status

                </p>

                <h3 className="text-xl font-semibold text-white mt-3">

                  {trip.paymentStatus}

                </h3>

              </div>

              <div className="bg-black/20 border border-white/5 rounded-2xl p-5">

                <p className="text-sm text-zinc-500">

                  Invoice Status

                </p>

                <h3 className="text-xl font-semibold text-white mt-3">

                  {trip.invoiceStatus}

                </h3>

              </div>

              <div className="bg-black/20 border border-white/5 rounded-2xl p-5">

                <p className="text-sm text-zinc-500">

                  Vendor Status

                </p>

                <h3 className="text-xl font-semibold text-white mt-3">

                  {trip.vendorStatus}

                </h3>

              </div>

              <div className="bg-black/20 border border-white/5 rounded-2xl p-5">

                <p className="text-sm text-zinc-500">

                  Booking Status

                </p>

                <h3 className="text-xl font-semibold text-white mt-3">

                  {trip.bookingStatus}

                </h3>

              </div>

            </div>

          </div>

          {/* Timeline */}
          <div className="mt-8 bg-white/[0.03] border border-white/10 rounded-3xl p-8">

            <div className="flex items-center gap-4 mb-8">

              <Clock3
                className="text-yellow-400"
                size={24}
              />

              <div>

                <p className="text-zinc-500 text-sm">

                  Operations Timeline

                </p>

                <h3 className="text-2xl font-bold mt-2 text-white">

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

                      <div className="w-4 h-4 rounded-full bg-yellow-400"></div>

                      {index !==
                        timeline.length -
                          1 && (

                        <div className="w-px h-full bg-white/10 mt-2"></div>

                      )}

                    </div>

                    <div>

                      <h4 className="text-white font-semibold">

                        {item.title}

                      </h4>

                      <p className="text-zinc-500 mt-2">

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

      </div>

    </div>
  );
}

export default BookingDetailsDrawer;