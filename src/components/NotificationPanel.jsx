import {
  BellRing,
  CheckCircle2,
  Clock3,
  AlertTriangle,
} from "lucide-react";

function NotificationPanel() {

  const notifications = [
    {
      title: "New booking created",
      time: "2 mins ago",
      icon: CheckCircle2,
      color:
        "text-emerald-400 bg-emerald-500/10",
    },

    {
      title: "Driver assigned to ride",
      time: "12 mins ago",
      icon: Clock3,
      color:
        "text-yellow-400 bg-yellow-500/10",
    },

    {
      title: "Ride cancelled by customer",
      time: "28 mins ago",
      icon: AlertTriangle,
      color:
        "text-red-400 bg-red-500/10",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[36px] p-7 backdrop-blur-xl hover:border-yellow-500/20 transition-all duration-300">

      {/* Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">

          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 font-medium">
              Updates
            </p>

            <h2 className="text-3xl font-bold mt-3 tracking-tight text-white">
              Notifications
            </h2>

          </div>

          <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.12)]">

            <BellRing size={22} />

          </div>

        </div>

        {/* Notifications */}
        <div className="space-y-5">

          {notifications.map(
            (item, index) => {

              const Icon =
                item.icon;

              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/[0.03] hover:border hover:border-yellow-500/10 transition-all duration-300"
                >

                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color}`}
                  >

                    <Icon
                      size={20}
                    />

                  </div>

                  <div>

                    <p className="font-medium text-white">
                      {item.title}
                    </p>

                    <p className="text-sm text-zinc-500 mt-2">
                      {item.time}
                    </p>

                  </div>

                </div>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
}

export default NotificationPanel;