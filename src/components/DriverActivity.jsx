import {
  Clock3,
  MapPin,
  Car,
  BadgeCheck,
  IndianRupee,
  Activity,
  ArrowUpRight,
  Radio,
} from "lucide-react";

import { motion } from "framer-motion";

function DriverActivity() {

  const activities = [

    {
      id: 1,

      driver:
        "Aman Verma",

      action:
        "Completed airport transfer ride",

      location:
        "IGI Airport",

      time:
        "2 mins ago",

      vehicle:
        "Toyota Innova",

      earnings:
        "₹2,450",

      status:
        "Completed",
    },

    {
      id: 2,

      driver:
        "Rohit Sharma",

      action:
        "Assigned to ERP booking workflow",

      location:
        "Cyber Hub Gurgaon",

      time:
        "8 mins ago",

      vehicle:
        "Hyundai Creta",

      earnings:
        "₹1,780",

      status:
        "Assigned",
    },

    {
      id: 3,

      driver:
        "Rahul Singh",

      action:
        "Marked available for dispatch",

      location:
        "Karol Bagh",

      time:
        "14 mins ago",

      vehicle:
        "Honda City",

      earnings:
        "₹3,100",

      status:
        "Available",
    },

    {
      id: 4,

      driver:
        "Karan Mehta",

      action:
        "Trip cancelled by customer",

      location:
        "Dwarka Sector 21",

      time:
        "22 mins ago",

      vehicle:
        "Maruti Ertiga",

      earnings:
        "₹0",

      status:
        "Cancelled",
    },
  ];

  const getStatusStyle =
    (status) => {

      switch (status) {

        case "Completed":

          return "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20";

        case "Assigned":

          return "bg-blue-500/15 text-blue-400 border border-blue-500/20";

        case "Available":

          return "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20";

        case "Cancelled":

          return "bg-red-500/15 text-red-400 border border-red-500/20";

        default:

          return "bg-zinc-500/15 text-zinc-400 border border-zinc-500/20";
      }
    };

  return (

    <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl lg:p-8">

      {/* Glow */}
      <div className="absolute bottom-[-120px] right-[-120px] h-[260px] w-[260px] rounded-full bg-yellow-500/10 blur-[130px]"></div>

      <div className="absolute left-[-120px] top-[-120px] h-[240px] w-[240px] rounded-full bg-amber-500/5 blur-[120px]"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

          <div>

            <div className="flex items-center gap-2">

              <Radio
                size={14}
                className="text-yellow-400"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">

                ERP Driver Intelligence

              </p>

            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white lg:text-4xl">

              Live Driver Activity

            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-zinc-500">

              Monitor driver assignments,
              trip dispatch workflow,
              operational movement and live ERP transport activity.

            </p>

          </div>

          {/* Live Badge */}
          <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/15 bg-emerald-500/10 px-5 py-3 shadow-[0_0_25px_rgba(16,185,129,0.08)]">

            <div className="relative flex h-3 w-3">

              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>

              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>

            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">

              ERP LIVE TRACKING

            </span>

          </div>

        </div>

        {/* Activities */}
        <div className="space-y-5">

          {activities.map(
            (
              activity,
              index
            ) => (

              <motion.div
                key={activity.id}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay:
                    index * 0.08,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/20 hover:bg-white/[0.045]"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100">

                  <div className="absolute right-[-60px] top-[-60px] h-[180px] w-[180px] rounded-full bg-yellow-500/[0.06] blur-[90px]"></div>

                </div>

                <div className="relative z-10 flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

                  {/* Left */}
                  <div className="flex items-start gap-5">

                    {/* Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-gradient-to-br from-yellow-400 to-amber-500 shadow-[0_0_30px_rgba(250,204,21,0.2)]">

                      <Car
                        size={28}
                        className="text-black"
                      />

                    </div>

                    {/* Details */}
                    <div>

                      <div className="flex flex-wrap items-center gap-3">

                        <h3 className="text-2xl font-semibold text-white">

                          {
                            activity.driver
                          }

                        </h3>

                        <span
                          className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${getStatusStyle(
                            activity.status
                          )}`}
                        >

                          {
                            activity.status
                          }

                        </span>

                      </div>

                      <p className="mt-3 leading-relaxed text-zinc-400">

                        {
                          activity.action
                        }

                      </p>

                      {/* Meta */}
                      <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-zinc-500">

                        <div className="flex items-center gap-2">

                          <MapPin
                            size={16}
                          />

                          <span>

                            {
                              activity.location
                            }

                          </span>

                        </div>

                        <div className="flex items-center gap-2">

                          <BadgeCheck
                            size={16}
                          />

                          <span>

                            {
                              activity.vehicle
                            }

                          </span>

                        </div>

                        <div className="flex items-center gap-2">

                          <Clock3
                            size={16}
                          />

                          <span>

                            {
                              activity.time
                            }

                          </span>

                        </div>

                      </div>

                    </div>

                  </div>

                  {/* Right */}
                  <div className="flex flex-col items-start gap-4 xl:items-end">

                    {/* Earnings */}
                    <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/15 bg-emerald-500/10 px-5 py-4">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15">

                        <IndianRupee
                          size={18}
                          className="text-emerald-400"
                        />

                      </div>

                      <div>

                        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">

                          Earnings

                        </p>

                        <h4 className="mt-1 text-lg font-bold text-emerald-400">

                          {
                            activity.earnings
                          }

                        </h4>

                      </div>

                    </div>

                    {/* ERP Activity */}
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500">

                      <Activity
                        size={14}
                      />

                      ERP ACTIVE

                      <ArrowUpRight
                        size={14}
                        className="text-yellow-400"
                      />

                    </div>

                  </div>

                </div>

              </motion.div>
            )
          )}

        </div>

      </div>

    </div>
  );
}

export default DriverActivity;