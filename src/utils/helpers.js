export function formatCurrency(
  value
) {

  return `₹${Number(
    value
  ).toLocaleString("en-IN")}`;
}

export function capitalize(
  text
) {

  if (!text) return "";

  return (
    text.charAt(0).toUpperCase() +
    text.slice(1)
  );
}

export function formatDate(
  date
) {

  return new Date(
    date
  ).toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );
}

/* Premium Dashboard Helpers */

export function getStatusColor(
  status
) {

  if (
    status === "Completed"
  ) {

    return "text-emerald-400";
  }

  if (
    status === "Ongoing"
  ) {

    return "text-yellow-400";
  }

  return "text-red-400";
}

export function getStatusBg(
  status
) {

  if (
    status === "Completed"
  ) {

    return "bg-emerald-500/10 border border-emerald-500/20";
  }

  if (
    status === "Ongoing"
  ) {

    return "bg-yellow-500/10 border border-yellow-500/20";
  }

  return "bg-red-500/10 border border-red-500/20";
}