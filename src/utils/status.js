import { STATUS } from "./constants";

/* Text Color */

export const getStatusColor =
  (status) => {

    switch (status) {

      case STATUS.COMPLETED:

        return "text-emerald-400";

      case STATUS.ONGOING:

        return "text-yellow-400";

      case STATUS.PENDING:

        return "text-orange-400";

      case STATUS.CANCELLED:

        return "text-red-400";

      default:

        return "text-zinc-400";
    }
  };

/* Background */

export const getStatusBg =
  (status) => {

    switch (status) {

      case STATUS.COMPLETED:

        return "bg-emerald-500/10 border border-emerald-500/20";

      case STATUS.ONGOING:

        return "bg-yellow-500/10 border border-yellow-500/20";

      case STATUS.PENDING:

        return "bg-orange-500/10 border border-orange-500/20";

      case STATUS.CANCELLED:

        return "bg-red-500/10 border border-red-500/20";

      default:

        return "bg-zinc-500/10 border border-zinc-500/20";
    }
  };