import {
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

function StatusBadge({
  status,
}) {

  const getStyles =
    () => {

      switch (
        status
      ) {

        case "Completed":

          return {
            wrapper:
              "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.08)]",

            dot:
              "bg-emerald-400",

            icon:
              CheckCircle2,
          };

        case "Ongoing":

          return {
            wrapper:
              "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 shadow-[0_0_20px_rgba(250,204,21,0.08)]",

            dot:
              "bg-yellow-400",

            icon:
              Clock3,
          };

        case "Cancelled":

          return {
            wrapper:
              "bg-red-500/10 text-red-400 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.08)]",

            dot:
              "bg-red-400",

            icon:
              XCircle,
          };

        default:

          return {
            wrapper:
              "bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.08)]",

            dot:
              "bg-blue-400",

            icon:
              Clock3,
          };
      }
    };

  const styles =
    getStyles();

  const Icon =
    styles.icon;

  return (

    <div
      className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-medium backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] ${styles.wrapper}`}
    >

      {/* Dot */}
      <div
        className={`w-2.5 h-2.5 rounded-full animate-pulse ${styles.dot}`}
      ></div>

      {/* Icon */}
      <Icon
        size={15}
      />

      {/* Text */}
      <span>

        {status}

      </span>

    </div>
  );
}

export default StatusBadge;