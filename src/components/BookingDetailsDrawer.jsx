import {
  X,
  MapPin,
  User,
  Car,
  CreditCard,
  Clock3,
} from "lucide-react";

import StatusBadge from "./StatusBadge";

function BookingDetailsDrawer({
  trip,
  closeDrawer,
}) {

  if (!trip) return null;

  return (
    <div className="fixed inset-0 z-[250] bg-black/70 backdrop-blur-xl flex justify-end">

      {/* Drawer */}
      <div className="relative w-full max-w-2xl h-full bg-[#090909]/95 border-l border-white/10 backdrop-blur-3xl overflow-y-auto shadow-[-20px_0_80px_rgba(0,0,0,0.45)]">

        {/* Glow */}
        <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[-120px] left-[-120px] w-[260px] h-[260px] bg-amber-500/5 blur-[140px] rounded-full"></div>

        {/* Content */}
        <div className="relative z-10 p-8">

          {/* Header */}
          <div className="flex items-start justify-between mb-10">

            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
                Booking Details
              </p>

              <h2 className="text-5xl font-bold mt-4 text-white tracking-tight">
                Ride Overview
              </h2>

              <p className="text-zinc-500 mt-4">
                Detailed booking and trip information.
              </p>

            </div>

            {/* Close */}
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
          <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[32px] p-6 backdrop-blur-xl">

            {/* Glow */}
            <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-yellow-500/10 blur-[100px] rounded-full"></div>

            <div className="relative z-10">

              <div className="flex items-center justify-between gap-6">

                {/* Customer */}
                <div className="flex items-center gap-5">

                  <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-black text-3xl font-bold shadow-[0_0_30px_rgba(250,204,21,0.15)]">

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
                      Booking ID #
                      {trip.id || "1042"}
                    </p>

                  </div>

                </div>

                {/* Status */}
                <StatusBadge
                  status={
                    trip.status
                  }
                />

              </div>

            </div>

          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

            {/* Driver */}
            <div className="bg-white/[0.03] border border-white/10 rounded-[28px] p-6">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">

                  <User size={24} />

                </div>

                <div>

                  <p className="text-zinc-500 text-sm">
                    Assigned Driver
                  </p>

                  <h3 className="text-xl font-semibold mt-2 text-white">
                    {trip.driver}
                  </h3>

                </div>

              </div>

            </div>

            {/* Vehicle */}
            <div className="bg-white/[0.03] border border-white/10 rounded-[28px] p-6">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center">

                  <Car size={24} />

                </div>

                <div>

                  <p className="text-zinc-500 text-sm">
                    Vehicle
                  </p>

                  <h3 className="text-xl font-semibold mt-2 text-white">
                    Toyota Innova
                  </h3>

                </div>

              </div>

            </div>

            {/* Destination */}
            <div className="bg-white/[0.03] border border-white/10 rounded-[28px] p-6">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">

                  <MapPin size={24} />

                </div>

                <div>

                  <p className="text-zinc-500 text-sm">
                    Destination
                  </p>

                  <h3 className="text-xl font-semibold mt-2 text-white">
                    {trip.destination}
                  </h3>

                </div>

              </div>

            </div>

            {/* Payment */}
            <div className="bg-white/[0.03] border border-white/10 rounded-[28px] p-6">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center">

                  <CreditCard size={24} />

                </div>

                <div>

                  <p className="text-zinc-500 text-sm">
                    Payment
                  </p>

                  <h3 className="text-xl font-semibold mt-2 text-white">
                    ₹1,850 Paid
                  </h3>

                </div>

              </div>

            </div>

          </div>

          {/* Timeline */}
          <div className="mt-8 bg-white/[0.03] border border-white/10 rounded-[32px] p-8">

            <div className="flex items-center gap-4 mb-8">

              <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">

                <Clock3 size={24} />

              </div>

              <div>

                <p className="text-zinc-500 text-sm">
                  Timeline
                </p>

                <h3 className="text-2xl font-bold mt-2 text-white">
                  Ride Activity
                </h3>

              </div>

            </div>

            <div className="space-y-8">

              {/* Item */}
              <div className="flex gap-5">

                <div className="flex flex-col items-center">

                  <div className="w-4 h-4 rounded-full bg-yellow-400"></div>

                  <div className="w-px h-full bg-white/10 mt-2"></div>

                </div>

                <div>

                  <h4 className="text-white font-semibold">
                    Booking Created
                  </h4>

                  <p className="text-zinc-500 mt-2">
                    Ride booking was created successfully.
                  </p>

                </div>

              </div>

              {/* Item */}
              <div className="flex gap-5">

                <div className="flex flex-col items-center">

                  <div className="w-4 h-4 rounded-full bg-yellow-400"></div>

                  <div className="w-px h-full bg-white/10 mt-2"></div>

                </div>

                <div>

                  <h4 className="text-white font-semibold">
                    Driver Assigned
                  </h4>

                  <p className="text-zinc-500 mt-2">
                    Driver accepted and started the ride.
                  </p>

                </div>

              </div>

              {/* Item */}
              <div className="flex gap-5">

                <div className="flex flex-col items-center">

                  <div className="w-4 h-4 rounded-full bg-emerald-400"></div>

                </div>

                <div>

                  <h4 className="text-white font-semibold">
                    Ride Completed
                  </h4>

                  <p className="text-zinc-500 mt-2">
                    Customer reached destination successfully.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BookingDetailsDrawer;