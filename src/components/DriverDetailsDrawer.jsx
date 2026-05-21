import {
  X,
  Phone,
  Mail,
  MapPin,
  Car,
  BadgeCheck,
  Star,
  Wallet,
  CalendarDays,
  ShieldCheck,
  Activity,
  CircleDot,
} from "lucide-react";

import { motion } from "framer-motion";

function DriverDetailsDrawer({
  driver,
  closeDrawer,
}) {

  if (!driver)
    return null;

  const availabilityStyle =
    driver.availability ===
    "Online"
      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
      : "bg-red-500/15 text-red-400 border border-red-500/20";

  const infoCards = [

    {
      icon: Phone,
      title:
        "Phone Number",
      value:
        driver.phone,
      iconColor:
        "text-cyan-400",
    },

    {
      icon: Mail,
      title:
        "Email Address",
      value:
        driver.email,
      iconColor:
        "text-yellow-400",
    },

    {
      icon: Car,
      title:
        "Vehicle",
      value:
        driver.vehicle,
      subValue:
        driver.vehicleNumber,
      iconColor:
        "text-purple-400",
    },

    {
      icon: BadgeCheck,
      title:
        "Vendor",
      value:
        driver.vendor,
      iconColor:
        "text-emerald-400",
    },

    {
      icon: MapPin,
      title:
        "Current Location",
      value:
        driver.location,
      iconColor:
        "text-orange-400",
    },

    {
      icon: CalendarDays,
      title:
        "Joining Date",
      value:
        driver.joiningDate,
      iconColor:
        "text-blue-400",
    },
  ];

  return (

    <div className="fixed inset-0 z-[160] flex justify-end bg-black/80 backdrop-blur-xl">

      <motion.div
        initial={{
          opacity: 0,
          x: 80,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: 80,
        }}
        transition={{
          duration: 0.3,
        }}
        className="relative h-screen w-full max-w-2xl overflow-y-auto border-l border-white/10 bg-[#090909]/95 shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
      >

        {/* Glow */}
        <div className="absolute right-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-yellow-400/10 blur-[140px]"></div>

        <div className="absolute bottom-[-120px] left-[-120px] h-[240px] w-[240px] rounded-full bg-amber-500/5 blur-[120px]"></div>

        <div className="relative z-10 p-8 lg:p-10">

          {/* Header */}
          <div className="mb-10 flex items-start justify-between gap-6">

            <div className="flex items-start gap-5">

              {/* Avatar */}
              <div className="relative">

                <img
                  src={
                    driver.avatar
                  }
                  alt={
                    driver.name
                  }
                  className="h-24 w-24 rounded-[28px] border border-white/10 object-cover shadow-[0_0_30px_rgba(250,204,21,0.08)]"
                />

                <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border border-black bg-emerald-400">

                  <CircleDot
                    size={14}
                    className="text-black"
                  />

                </div>

              </div>

              {/* Details */}
              <div>

                <div className="flex items-center gap-2">

                  <Activity
                    size={14}
                    className="text-yellow-400"
                  />

                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">

                    Driver Profile

                  </p>

                </div>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">

                  {
                    driver.name
                  }

                </h2>

                <div className="mt-5 flex flex-wrap items-center gap-3">

                  <span
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${driver.color}`}
                  >

                    {
                      driver.status
                    }

                  </span>

                  <span
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${availabilityStyle}`}
                  >

                    {
                      driver.availability
                    }

                  </span>

                </div>

              </div>

            </div>

            {/* Close */}
            <button
              onClick={
                closeDrawer
              }
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-yellow-500/20 hover:bg-white/[0.06]"
            >

              <X
                size={20}
                className="text-zinc-300"
              />

            </button>

          </div>

          {/* Information Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {infoCards.map(
              (
                item,
                index
              ) => {

                const Icon =
                  item.icon;

                return (

                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-yellow-500/20 hover:bg-white/[0.045]"
                  >

                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100">

                      <div className="absolute right-[-40px] top-[-40px] h-[120px] w-[120px] rounded-full bg-yellow-500/[0.04] blur-[70px]"></div>

                    </div>

                    <div className="relative z-10">

                      <div className="flex items-center gap-3 text-zinc-400">

                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.04]">

                          <Icon
                            size={18}
                            className={
                              item.iconColor
                            }
                          />

                        </div>

                        <p className="text-sm uppercase tracking-[0.12em]">

                          {
                            item.title
                          }

                        </p>

                      </div>

                      <h3 className="mt-5 text-lg font-semibold leading-relaxed text-white break-words">

                        {
                          item.value
                        }

                      </h3>

                      {item.subValue && (

                        <p className="mt-2 text-sm text-zinc-500">

                          {
                            item.subValue
                          }

                        </p>
                      )}

                    </div>

                  </div>
                );
              }
            )}

          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">

            {/* Completed Trips */}
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-6">

              <div className="absolute right-[-40px] top-[-40px] h-[120px] w-[120px] rounded-full bg-cyan-500/[0.05] blur-[70px]"></div>

              <div className="relative z-10">

                <p className="text-sm uppercase tracking-[0.14em] text-zinc-500">

                  Completed Trips

                </p>

                <h2 className="mt-5 text-5xl font-bold text-white">

                  {
                    driver.completedTrips
                  }

                </h2>

              </div>

            </div>

            {/* Rating */}
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-6">

              <div className="absolute right-[-40px] top-[-40px] h-[120px] w-[120px] rounded-full bg-yellow-500/[0.05] blur-[70px]"></div>

              <div className="relative z-10">

                <div className="flex items-center gap-2 text-yellow-400">

                  <Star
                    size={18}
                    fill="currentColor"
                  />

                  <p className="text-sm uppercase tracking-[0.14em]">

                    Rating

                  </p>

                </div>

                <h2 className="mt-5 text-5xl font-bold text-white">

                  {
                    driver.rating
                  }

                </h2>

              </div>

            </div>

            {/* Earnings */}
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-6">

              <div className="absolute right-[-40px] top-[-40px] h-[120px] w-[120px] rounded-full bg-emerald-500/[0.05] blur-[70px]"></div>

              <div className="relative z-10">

                <div className="flex items-center gap-2 text-emerald-400">

                  <Wallet
                    size={18}
                  />

                  <p className="text-sm uppercase tracking-[0.14em]">

                    Earnings

                  </p>

                </div>

                <h2 className="mt-5 text-4xl font-bold text-white">

                  {
                    driver.earnings
                  }

                </h2>

              </div>

            </div>

          </div>

          {/* License */}
          <div className="relative mt-6 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-7">

            <div className="absolute right-[-60px] top-[-60px] h-[150px] w-[150px] rounded-full bg-yellow-500/[0.05] blur-[90px]"></div>

            <div className="relative z-10">

              <div className="flex items-center gap-3 text-zinc-400">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04]">

                  <ShieldCheck
                    size={20}
                    className="text-yellow-400"
                  />

                </div>

                <div>

                  <p className="text-sm uppercase tracking-[0.14em]">

                    License Number

                  </p>

                  <h3 className="mt-2 text-2xl font-bold tracking-[0.08em] text-white">

                    {
                      driver.licenseNumber
                    }

                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default DriverDetailsDrawer;