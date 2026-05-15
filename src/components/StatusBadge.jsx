function StatusBadge({
  status,
}) {

  const getStyles = () => {

    if (
      status === "Completed"
    ) {

      return "bg-emerald-500/10 text-emerald-400";
    }

    if (
      status === "Ongoing"
    ) {

      return "bg-yellow-500/10 text-yellow-400";
    }

    return "bg-red-500/10 text-red-400";
  };

  return (
    <div
      className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium ${getStyles()}`}
    >

      {status}

    </div>
  );
}

export default StatusBadge;