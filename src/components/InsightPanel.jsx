import {
  TrendingUp,
  Sparkles,
} from "lucide-react";

function InsightPanel() {

  const insights = [
    "Ride efficiency increased by 12% this week.",

    "Most bookings are currently from Gurgaon routes.",

    "Driver availability is highest between 4PM - 8PM.",

    "Weekend ride demand is growing rapidly.",
  ];

  return (
    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[36px] p-7 backdrop-blur-xl">

      {/* Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10">

        {/* Heading */}
        <div className="flex items-center justify-between mb-10">

          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
              Insights
            </p>

            <h2 className="text-3xl font-bold mt-3 tracking-tight">
              Smart Overview
            </h2>

          </div>

          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center">

            <Sparkles size={22} />

          </div>

        </div>

        {/* Insights */}
        <div className="space-y-5">

          {insights.map(
            (item, index) => (

              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5"
              >

                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">

                  <TrendingUp
                    size={18}
                  />

                </div>

                <p className="text-slate-300 leading-relaxed">
                  {item}
                </p>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}

export default InsightPanel;