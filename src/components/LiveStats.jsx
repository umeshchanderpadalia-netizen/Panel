import {
  Activity,
  Car,
  Users,
  IndianRupee,
} from "lucide-react";

import AnimatedCounter from "./AnimatedCounter";

function LiveStats() {

  const stats = [
    {
      title: "Active Trips",
      value: 42,
      icon: Activity,
      subtitle:
        "12 ongoing right now",
    },

    {
      title: "Drivers Online",
      value: 28,
      icon: Users,
      subtitle:
        "6 joined recently",
    },

    {
      title: "Fleet Vehicles",
      value: 64,
      icon: Car,
      subtitle:
        "All operational",
    },

    {
      title: "Revenue",
      value: "₹120000",
      icon: IndianRupee,
      subtitle:
        "Weekly performance",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item, index) => {

        const Icon =
          item.icon;

        return (
          <div
            key={index}
            className="group relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] p-6 backdrop-blur-xl hover:border-yellow-500/20 hover:-translate-y-1 transition-all duration-300"
          >

            {/* Glow */}
            <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

            <div className="relative z-10">

              {/* Top */}
              <div className="flex items-center justify-between">

                <p className="text-sm text-zinc-400 tracking-wide">
                  {item.title}
                </p>

                <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-amber-500 group-hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.08)]">

                  <Icon
                    size={22}
                  />

                </div>

              </div>

              {/* Value */}
              <h2 className="text-4xl font-bold mt-7 tracking-tight text-white">

                <AnimatedCounter
                  value={
                    item.value
                  }
                />

              </h2>

              {/* Subtitle */}
              <p className="text-sm text-zinc-500 mt-4">
                {
                  item.subtitle
                }
              </p>

            </div>

          </div>
        );
      })}

    </div>
  );
}

export default LiveStats;