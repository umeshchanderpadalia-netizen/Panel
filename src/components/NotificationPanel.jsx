import {
  BellRing,
  CheckCircle2,
  Clock3,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

function NotificationPanel() {

  const notifications = [

    {
      title:
        "New booking created",

      description:
        "Airport transfer booking confirmed for Delhi to Jaipur route.",

      time:
        "2 mins ago",

      icon:
        CheckCircle2,

      color:
        "text-emerald-400 bg-emerald-500/10 border-emerald-500/10",

      live:
        true,
    },

    {
      title:
        "Driver assigned to ride",

      description:
        "Driver Aman Verma assigned for corporate pickup workflow.",

      time:
        "12 mins ago",

      icon:
        Clock3,

      color:
        "text-yellow-400 bg-yellow-500/10 border-yellow-500/10",

      live:
        true,
    },

    {
      title:
        "Ride cancelled by customer",

      description:
        "Customer cancelled Gurgaon outstation booking request.",

      time:
        "28 mins ago",

      icon:
        AlertTriangle,

      color:
        "text-red-400 bg-red-500/10 border-red-500/10",

      live:
        false,
    },
  ];

  return (

    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[38px] p-7 backdrop-blur-2xl hover:border-yellow-500/20 transition-all duration-500">

      {/* Ambient Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-120px] left-[-120px] w-[260px] h-[260px] bg-amber-500/5 blur-[140px] rounded-full"></div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-start justify-between mb-10">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400 font-medium">

              ERP Updates

            </p>

            <h2 className="text-3xl font-bold mt-4 tracking-tight text-white">

              Notifications

            </h2>

            <p className="text-zinc-500 mt-4 leading-relaxed max-w-xl">

              Real-time operational alerts, ride workflow updates
              and transport activity notifications.

            </p>

          </div>

          {/* Icon */}
          <div className="relative">

            <div className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-full"></div>

            <div className="relative w-14 h-14 rounded-3xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.12)]">

              <BellRing size={24} />

            </div>

          </div>

        </div>

        {/* Notification List */}
        <div className="space-y-5">

          {notifications.map(
            (
              item,
              index
            ) => {

              const Icon =
                item.icon;

              return (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    delay:
                      index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="group relative overflow-hidden"
                >

                  {/* Card */}
                  <div className="relative flex items-start gap-5 p-5 rounded-[30px] border border-white/5 bg-white/[0.03] hover:bg-white/[0.05] hover:border-yellow-500/10 transition-all duration-300">

                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-yellow-500/[0.04] to-transparent"></div>

                    {/* Icon */}
                    <div
                      className={`relative z-10 w-14 h-14 rounded-2xl border flex items-center justify-center flex-shrink-0 ${item.color}`}
                    >

                      <Icon
                        size={22}
                      />

                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-1 min-w-0">

                      {/* Top */}
                      <div className="flex items-start justify-between gap-4">

                        <div>

                          <h3 className="text-lg font-semibold text-white">

                            {item.title}

                          </h3>

                          <p className="text-zinc-400 text-sm leading-relaxed mt-3">

                            {
                              item.description
                            }

                          </p>

                        </div>

                        {/* Live */}
                        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/5">

                          {item.live && (

                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>

                          )}

                          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 whitespace-nowrap">

                            {item.live
                              ? "Live"
                              : "Archived"}

                          </span>

                        </div>

                      </div>

                      {/* Bottom */}
                      <div className="flex items-center justify-between mt-5">

                        <div className="flex items-center gap-2 text-zinc-500 text-sm">

                          <Clock3
                            size={14}
                          />

                          <span>

                            {item.time}

                          </span>

                        </div>

                        <button className="group/button flex items-center gap-2 text-sm text-yellow-400 hover:text-yellow-300 transition-all duration-300">

                          View Details

                          <ArrowRight
                            size={14}
                            className="group-hover/button:translate-x-1 transition-all duration-300"
                          />

                        </button>

                      </div>

                    </div>

                  </div>

                </motion.div>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
}

export default NotificationPanel;