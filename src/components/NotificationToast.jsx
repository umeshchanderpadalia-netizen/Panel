import {
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

function NotificationToast({
  notifications,
}) {

  return (
    <div className="fixed top-28 right-6 z-[300] space-y-4">

      {notifications.map(
        (item) => {

          const isSuccess =
            item.type === "success";

          return (
            <div
              key={item.id}
              className="relative overflow-hidden w-[340px] bg-[#0b1220]/95 border border-white/10 rounded-3xl p-5 backdrop-blur-2xl shadow-2xl animate-[fadeIn_0.3s_ease]"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-400/5"></div>

              <div className="relative z-10 flex items-start gap-4">

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    isSuccess
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >

                  {isSuccess ? (
                    <CheckCircle2
                      size={22}
                    />
                  ) : (
                    <AlertTriangle
                      size={22}
                    />
                  )}

                </div>

                {/* Text */}
                <div>

                  <p className="font-semibold text-white">
                    {isSuccess
                      ? "Success"
                      : "Alert"}
                  </p>

                  <p className="text-sm text-slate-400 mt-2">
                    {item.message}
                  </p>

                </div>

              </div>

            </div>
          );
        }
      )}

    </div>
  );
}

export default NotificationToast;