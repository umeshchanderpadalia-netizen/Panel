import {
  CheckCircle2,
  AlertTriangle,
  Clock3,
} from "lucide-react";

import activityData from "../data/activity";

const activityStyles = {
  success: {
    icon: CheckCircle2,

    color:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  },

  danger: {
    icon: AlertTriangle,

    color:
      "bg-red-500/10 text-red-400 border border-red-500/20",
  },

  warning: {
    icon: Clock3,

    color:
      "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
  },
};

function ActivityTimeline() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-300 hover:border-yellow-500/20">

      {/* Ambient Glow */}
      <div className="absolute bottom-[-100px] left-[-100px] h-[220px] w-[220px] rounded-full bg-yellow-400/10 blur-[120px]"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="mb-10">

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-yellow-400">
            Activity
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            Operations Timeline
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500">
            Live operational updates, ride workflow events and transport activity logs.
          </p>

        </div>

        {/* Timeline */}
        <div className="space-y-8">

          {activityData.map(
            (item) => {

              const config =
                activityStyles[
                  item.type
                ] ||
                activityStyles.warning;

              const Icon =
                config.icon;

              return (

                <div
                  key={item.id}
                  className="group flex items-start gap-5"
                >

                  {/* Timeline Icon */}
                  <div
                    className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105 ${config.color}`}
                  >

                    <Icon size={18} />

                  </div>

                  {/* Timeline Content */}
                  <div className="flex-1 border-b border-white/5 pb-7 last:border-none last:pb-0">

                    <div className="flex flex-wrap items-center gap-3">

                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>

                      <span className="rounded-full bg-white/[0.03] px-3 py-1 text-[11px] text-zinc-500 border border-white/5">
                        {item.time}
                      </span>

                    </div>

                    <p className="mt-3 leading-relaxed text-zinc-400">
                      {item.description}
                    </p>

                  </div>

                </div>
              );
            }
          )}

        </div>

      </div>

    </section>
  );
}

export default ActivityTimeline;