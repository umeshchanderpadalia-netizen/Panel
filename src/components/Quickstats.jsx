import {
  Car,
  Users,
  IndianRupee,
  Activity,
} from "lucide-react";

import WidgetCard from "./WidgetCard";

function QuickStats() {

  const stats = [
    {
      title: "Active Trips",
      value: "42",
      subtitle:
        "12 rides currently ongoing",
      icon: Activity,
    },

    {
      title: "Drivers Online",
      value: "28",
      subtitle:
        "8 more than yesterday",
      icon: Users,
    },

    {
      title: "Fleet Vehicles",
      value: "64",
      subtitle:
        "All operational vehicles",
      icon: Car,
    },

    {
      title: "Revenue",
      value: "₹1.2L",
      subtitle:
        "This week performance",
      icon: IndianRupee,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item, index) => (

        <WidgetCard
          key={index}
          title={item.title}
          value={item.value}
          subtitle={item.subtitle}
          icon={item.icon}
        />

      ))}

    </div>
  );
}

export default QuickStats;