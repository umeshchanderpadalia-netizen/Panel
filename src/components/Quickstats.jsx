import {
  Car,
  Users,
  IndianRupee,
  Activity,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import WidgetCard from "./WidgetCard";

function QuickStats() {

  const stats = [

    {
      title:
        "Active Trips",

      value:
        "42",

      subtitle:
        "12 rides currently ongoing",

      growth:
        "+8%",

      icon:
        Activity,

      color:
        "bg-yellow-500/10 text-yellow-400 border-yellow-500/10",

      glow:
        "from-yellow-400/20 to-amber-500/5",
    },

    {
      title:
        "Drivers Online",

      value:
        "28",

      subtitle:
        "8 more than yesterday",

      growth:
        "+12%",

      icon:
        Users,

      color:
        "bg-emerald-500/10 text-emerald-400 border-emerald-500/10",

      glow:
        "from-emerald-500/20 to-green-500/5",
    },

    {
      title:
        "Fleet Vehicles",

      value:
        "64",

      subtitle:
        "All operational vehicles",

      growth:
        "+4%",

      icon:
        Car,

      color:
        "bg-blue-500/10 text-blue-400 border-blue-500/10",

      glow:
        "from-blue-500/20 to-cyan-500/5",
    },

    {
      title:
        "Revenue",

      value:
        "₹1.2L",

      subtitle:
        "This week performance",

      growth:
        "+18%",

      icon:
        IndianRupee,

      color:
        "bg-purple-500/10 text-purple-400 border-purple-500/10",

      glow:
        "from-purple-500/20 to-pink-500/5",
    },
  ];

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map(
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
                y: 24,
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

              {/* Ambient Glow */}
              <div
                className={`absolute inset-0 opacity-40 bg-gradient-to-br ${item.glow}`}
              ></div>

              {/* Main Card */}
              <div className="relative overflow-hidden h-full bg-white/[0.04] border border-white/10 rounded-[34px] p-6 backdrop-blur-3xl hover:border-yellow-500/20 hover:-translate-y-1 transition-all duration-500">

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-yellow-500/[0.03] to-transparent"></div>

                {/* Floating Glow */}
                <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

                <div className="relative z-10">

                  {/* Top */}
                  <div className="flex items-start justify-between">

                    <div>

                      <p className="text-sm text-zinc-500 tracking-wide">

                        {item.title}

                      </p>

                      {/* Live */}
                      <div className="flex items-center gap-2 mt-4">

                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>

                        <span className="text-[10px] uppercase tracking-[0.22em] text-emerald-400">

                          ERP LIVE

                        </span>

                      </div>

                    </div>

                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-3xl border flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.03)] transition-all duration-500 group-hover:scale-110 ${item.color}`}
                    >

                      <Icon
                        size={24}
                      />

                    </div>

                  </div>

                  {/* Value */}
                  <div className="mt-8">

                    <h2 className="text-5xl font-bold tracking-tight text-white">

                      {item.value}

                    </h2>

                    <p className="text-sm text-zinc-500 leading-relaxed mt-4">

                      {
                        item.subtitle
                      }

                    </p>

                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-8">

                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/10 text-emerald-400 text-sm font-medium">

                      <ArrowUpRight
                        size={15}
                      />

                      {
                        item.growth
                      }

                    </div>

                    <div className="flex items-center gap-2 text-zinc-500">

                      <Sparkles
                        size={14}
                        className="text-yellow-400"
                      />

                      <span className="text-xs uppercase tracking-[0.18em]">

                        Updated

                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>
          );
        }
      )}

    </div>
  );
}

export default QuickStats;