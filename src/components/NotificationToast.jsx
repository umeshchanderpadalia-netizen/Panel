import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Clock3,
  X,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

function NotificationToast({
  notifications,
  removeNotification,
}) {

  const getToastConfig =
    (type) => {

      switch (type) {

        case "success":

          return {
            title:
              "Success",
            icon:
              CheckCircle2,
            color:
              "bg-emerald-500/10 text-emerald-400 border-emerald-500/15",
            glow:
              "bg-emerald-500/10",
          };

        case "warning":

          return {
            title:
              "Warning",
            icon:
              AlertTriangle,
            color:
              "bg-yellow-500/10 text-yellow-400 border-yellow-500/15",
            glow:
              "bg-yellow-500/10",
          };

        case "error":

          return {
            title:
              "Error",
            icon:
              XCircle,
            color:
              "bg-red-500/10 text-red-400 border-red-500/15",
            glow:
              "bg-red-500/10",
          };

        default:

          return {
            title:
              "Notification",
            icon:
              Clock3,
            color:
              "bg-blue-500/10 text-blue-400 border-blue-500/15",
            glow:
              "bg-blue-500/10",
          };
      }
    };

  return (

    <div className="fixed top-24 right-5 z-[300] flex flex-col gap-4 pointer-events-none">

      <AnimatePresence>

        {notifications.map(
          (item) => {

            const config =
              getToastConfig(
                item.type
              );

            const Icon =
              config.icon;

            return (

              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  x: 80,
                  scale: 0.92,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: 80,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.28,
                }}
                className="pointer-events-auto relative overflow-hidden w-[360px] max-w-[calc(100vw-40px)] rounded-[30px] border border-white/10 bg-[#090909]/95 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.45)]"
              >

                {/* Ambient Glow */}
                <div
                  className={`absolute top-[-80px] right-[-80px] w-[180px] h-[180px] blur-[100px] rounded-full ${config.glow}`}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent"></div>

                {/* Progress */}
                <motion.div
                  initial={{
                    width: "100%",
                  }}
                  animate={{
                    width: "0%",
                  }}
                  transition={{
                    duration: 5,
                    ease: "linear",
                  }}
                  className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-yellow-400 to-amber-500"
                />

                <div className="relative z-10 p-5">

                  {/* Top */}
                  <div className="flex items-start gap-4">

                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl border flex items-center justify-center flex-shrink-0 ${config.color}`}
                    >

                      <Icon
                        size={22}
                      />

                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">

                      <div className="flex items-start justify-between gap-3">

                        <div>

                          <h3 className="text-base font-semibold text-white">

                            {
                              config.title
                            }

                          </h3>

                          <div className="flex items-center gap-2 mt-2">

                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>

                            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">

                              ERP LIVE

                            </span>

                          </div>

                        </div>

                        {/* Close */}
                        <button
                          onClick={() =>
                            removeNotification?.(
                              item.id
                            )
                          }
                          className="w-9 h-9 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 flex items-center justify-center"
                        >

                          <X
                            size={15}
                            className="text-zinc-500"
                          />

                        </button>

                      </div>

                      {/* Message */}
                      <p className="text-sm text-zinc-400 leading-relaxed mt-5">

                        {
                          item.message
                        }

                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between mt-5">

                        <div className="flex items-center gap-2 text-zinc-500 text-xs">

                          <Clock3
                            size={13}
                          />

                          <span>

                            Just now

                          </span>

                        </div>

                        <button className="text-xs uppercase tracking-[0.18em] text-yellow-400 hover:text-yellow-300 transition-all duration-300">

                          View

                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>
            );
          }
        )}

      </AnimatePresence>

    </div>
  );
}

export default NotificationToast;