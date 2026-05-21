import {
  X,
  Phone,
  Mail,
  MapPin,
  Users,
  Car,
  Wallet,
  BadgeCheck,
  CalendarDays,
  Sparkles,
  Activity,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

function VendorDetailsDrawer({
  vendor,
  closeDrawer,
}) {

  if (!vendor)
    return null;

  return (

    <AnimatePresence>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        className="fixed inset-0 z-[140] flex justify-end bg-black/75 backdrop-blur-md"
      >

        <motion.div
          initial={{
            x: 120,
          }}
          animate={{
            x: 0,
          }}
          exit={{
            x: 120,
          }}
          transition={{
            duration: 0.35,
          }}
          className="relative w-full max-w-2xl h-screen overflow-y-auto bg-[#090909] border-l border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)]"
        >

          {/* Glow */}
          <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-[-140px] left-[-140px] w-[260px] h-[260px] bg-amber-500/5 blur-[140px] rounded-full"></div>

          <div className="relative z-10 p-8">

            {/* Header */}
            <div className="flex items-start justify-between mb-10">

              <div className="flex items-center gap-5">

                <div className="relative">

                  <div className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-full"></div>

                  <img
                    src={vendor.avatar}
                    alt={vendor.company}
                    className="relative w-24 h-24 rounded-[30px] object-cover border border-white/10"
                  />

                </div>

                <div>

                  <div className="flex items-center gap-2">

                    <Sparkles
                      size={14}
                      className="text-yellow-400"
                    />

                    <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

                      Vendor Profile

                    </p>

                  </div>

                  <h2 className="text-4xl font-bold text-white mt-4 tracking-tight">

                    {vendor.company}

                  </h2>

                  <div className="flex flex-wrap items-center gap-3 mt-5">

                    <span
                      className={`px-4 py-2 rounded-2xl text-xs font-semibold border ${vendor.color}`}
                    >

                      {vendor.status}

                    </span>

                    <span
                      className={`px-4 py-2 rounded-2xl text-xs font-semibold border ${
                        vendor.paymentStatus ===
                        "Paid"

                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"

                          : vendor.paymentStatus ===
                            "Pending"

                          ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"

                          : "bg-red-500/10 text-red-400 border-red-500/20"
                      }`}
                    >

                      {
                        vendor.paymentStatus
                      }

                    </span>

                  </div>

                </div>

              </div>

              {/* Close */}
              <button
                onClick={closeDrawer}
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-300 flex items-center justify-center"
              >

                <X
                  size={20}
                  className="text-white"
                />

              </button>

            </div>

            {/* Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Owner */}
              <div className="bg-white/[0.03] border border-white/10 rounded-[28px] p-6">

                <div className="flex items-center gap-3 text-zinc-400">

                  <Users size={18} />

                  <p className="text-sm">

                    Owner Name

                  </p>

                </div>

                <h3 className="text-lg font-semibold text-white mt-5">

                  {vendor.owner}

                </h3>

              </div>

              {/* Phone */}
              <div className="bg-white/[0.03] border border-white/10 rounded-[28px] p-6">

                <div className="flex items-center gap-3 text-zinc-400">

                  <Phone size={18} />

                  <p className="text-sm">

                    Contact Number

                  </p>

                </div>

                <h3 className="text-lg font-semibold text-white mt-5">

                  {vendor.phone}

                </h3>

              </div>

              {/* Email */}
              <div className="bg-white/[0.03] border border-white/10 rounded-[28px] p-6">

                <div className="flex items-center gap-3 text-zinc-400">

                  <Mail size={18} />

                  <p className="text-sm">

                    Email Address

                  </p>

                </div>

                <h3 className="text-lg font-semibold text-white mt-5 break-all">

                  {vendor.email}

                </h3>

              </div>

              {/* Location */}
              <div className="bg-white/[0.03] border border-white/10 rounded-[28px] p-6">

                <div className="flex items-center gap-3 text-zinc-400">

                  <MapPin size={18} />

                  <p className="text-sm">

                    Operating Location

                  </p>

                </div>

                <h3 className="text-lg font-semibold text-white mt-5">

                  {vendor.location}

                </h3>

              </div>

            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">

              {/* Drivers */}
              <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[28px] p-6">

                <div className="flex items-center gap-2 text-cyan-400">

                  <Users size={18} />

                  <p className="text-sm">

                    Drivers

                  </p>

                </div>

                <h2 className="text-5xl font-bold text-white mt-5 tracking-tight">

                  {
                    vendor.totalDrivers
                  }

                </h2>

              </div>

              {/* Trips */}
              <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[28px] p-6">

                <div className="flex items-center gap-2 text-yellow-400">

                  <Car size={18} />

                  <p className="text-sm">

                    Trips

                  </p>

                </div>

                <h2 className="text-5xl font-bold text-white mt-5 tracking-tight">

                  {
                    vendor.completedTrips
                  }

                </h2>

              </div>

              {/* Revenue */}
              <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[28px] p-6">

                <div className="flex items-center gap-2 text-emerald-400">

                  <Wallet size={18} />

                  <p className="text-sm">

                    Revenue

                  </p>

                </div>

                <h2 className="text-4xl font-bold text-white mt-5 tracking-tight">

                  {
                    vendor.monthlyRevenue
                  }

                </h2>

              </div>

            </div>

            {/* Additional */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">

              {/* GST */}
              <div className="bg-white/[0.03] border border-white/10 rounded-[28px] p-6">

                <div className="flex items-center gap-3 text-zinc-400">

                  <BadgeCheck
                    size={18}
                  />

                  <p className="text-sm">

                    GST Number

                  </p>

                </div>

                <h3 className="text-xl font-bold text-white mt-5 tracking-wide">

                  {
                    vendor.gstNumber
                  }

                </h3>

              </div>

              {/* Partnership */}
              <div className="bg-white/[0.03] border border-white/10 rounded-[28px] p-6">

                <div className="flex items-center gap-3 text-zinc-400">

                  <CalendarDays
                    size={18}
                  />

                  <p className="text-sm">

                    Partnership Date

                  </p>

                </div>

                <h3 className="text-xl font-bold text-white mt-5">

                  {
                    vendor.partnershipDate
                  }

                </h3>

              </div>

            </div>

            {/* Pending Payments */}
            <div className="relative overflow-hidden mt-6 bg-gradient-to-br from-yellow-500/10 to-amber-500/5 border border-yellow-500/10 rounded-[30px] p-7">

              <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

              <div className="relative z-10 flex items-start justify-between gap-6">

                <div>

                  <p className="text-sm uppercase tracking-[0.2em] text-yellow-400 font-medium">

                    Pending Payments

                  </p>

                  <h2 className="text-5xl font-bold text-yellow-400 mt-5 tracking-tight">

                    {
                      vendor.pendingPayments
                    }

                  </h2>

                </div>

                <div className="w-16 h-16 rounded-3xl bg-yellow-500/10 border border-yellow-500/10 text-yellow-400 flex items-center justify-center">

                  <Activity
                    size={26}
                  />

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}

export default VendorDetailsDrawer;