import {
  CheckCircle2,
  AlertTriangle,
  Clock3,
} from "lucide-react";

import activityData from "../data/activity";

function ActivityTimeline() {

  const getIcon = (type) => {

    if (type === "success") {

      return (
        <CheckCircle2
          size={18}
        />
      );
    }

    if (type === "danger") {

      return (
        <AlertTriangle
          size={18}
        />
      );
    }

    return (
      <Clock3 size={18} />
    );
  };

  const getColor = (type) => {

    if (type === "success") {

      return "bg-emerald-500/10 text-emerald-400";
    }

    if (type === "danger") {

      return "bg-red-500/10 text-red-400";
    }

    return "bg-yellow-500/10 text-yellow-400";
  };

  return (
    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[36px] p-7 backdrop-blur-xl">

      {/* Glow */}
      <div className="absolute bottom-[-100px] left-[-100px] w-[220px] h-[220px] bg-cyan-400/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10">

        {/* Heading */}
        <div className="mb-10">

          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
            Activity
          </p>

          <h2 className="text-3xl font-bold mt-3 tracking-tight">
            Operations Timeline
          </h2>

        </div>

        {/* Timeline */}
        <div className="space-y-8">

          {activityData.map(
            (item) => (

              <div
                key={item.id}
                className="flex items-start gap-5"
              >

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${getColor(
                    item.type
                  )}`}
                >

                  {getIcon(
                    item.type
                  )}

                </div>

                {/* Content */}
                <div>

                  <div className="flex items-center gap-3 flex-wrap">

                    <h3 className="font-semibold text-white">
                      {item.title}
                    </h3>

                    <span className="text-xs text-slate-500">
                      {item.time}
                    </span>

                  </div>

                  <p className="text-slate-400 mt-3 leading-relaxed">
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
  );
}

export default ActivityTimeline;