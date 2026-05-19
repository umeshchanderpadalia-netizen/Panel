import {
  Clock3,
  MapPin,
  Car,
  BadgeCheck,
  IndianRupee,
  Activity,
} from "lucide-react";

function DriverActivity() {

  const activities = [

    {
      id: 1,

      driver:
        "Aman Verma",

      action:
        "Completed airport transfer ride",

      location:
        "IGI Airport",

      time:
        "2 mins ago",

      vehicle:
        "Toyota Innova",

      earnings:
        "₹2,450",

      status:
        "Completed",
    },

    {
      id: 2,

      driver:
        "Rohit Sharma",

      action:
        "Assigned to ERP booking workflow",

      location:
        "Cyber Hub Gurgaon",

      time:
        "8 mins ago",

      vehicle:
        "Hyundai Creta",

      earnings:
        "₹1,780",

      status:
        "Assigned",
    },

    {
      id: 3,

      driver:
        "Rahul Singh",

      action:
        "Marked available for dispatch",

      location:
        "Karol Bagh",

      time:
        "14 mins ago",

      vehicle:
        "Honda City",

      earnings:
        "₹3,100",

      status:
        "Available",
    },

    {
      id: 4,

      driver:
        "Karan Mehta",

      action:
        "Trip cancelled by customer",

      location:
        "Dwarka Sector 21",

      time:
        "22 mins ago",

      vehicle:
        "Maruti Ertiga",

      earnings:
        "₹0",

      status:
        "Cancelled",
    },
  ];

  const getStatusStyle =
    (status) => {

      switch (status) {

        case "Completed":

          return "bg-emerald-500/15 text-emerald-400";

        case "Assigned":

          return "bg-blue-500/15 text-blue-400";

        case "Available":

          return "bg-yellow-500/15 text-yellow-400";

        case "Cancelled":

          return "bg-red-500/15 text-red-400";

        default:

          return "bg-zinc-500/15 text-zinc-400";
      }
    };

  return (

    <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[36px] p-6 lg:p-8 backdrop-blur-2xl">

      {/* Glow */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[240px] h-[240px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute top-[-120px] left-[-120px] w-[240px] h-[240px] bg-amber-500/5 blur-[120px] rounded-full"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="mb-8 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

              ERP Driver Intelligence

            </p>

            <h2 className="text-3xl font-bold text-white mt-4">

              Live Driver Activity

            </h2>

            <p className="text-zinc-500 mt-3 max-w-2xl">

              Real-time driver assignments, trip workflow,
              dispatch operations and ERP transport activity.

            </p>

          </div>

          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/10">

            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>

            <span className="text-xs uppercase tracking-[0.2em] text-emerald-400">

              ERP LIVE

            </span>

          </div>

        </div>

        {/* Activity List */}
        <div className="space-y-5">

          {activities.map(
            (activity) => (

              <div
                key={activity.id}
                className="group relative overflow-hidden bg-white/[0.03] border border-white/10 hover:border-yellow-500/20 rounded-3xl p-6 transition-all duration-300"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-yellow-500/[0.03] to-transparent"></div>

                <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

                  {/* Left */}
                  <div className="flex items-start gap-5">

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-[0_0_25px_rgba(250,204,21,0.18)]">

                      <Car
                        size={24}
                        className="text-black"
                      />

                    </div>

                    {/* Content */}
                    <div>

                      <h3 className="text-xl font-semibold text-white">

                        {
                          activity.driver
                        }

                      </h3>

                      <p className="text-zinc-400 mt-2 leading-relaxed">

                        {
                          activity.action
                        }

                      </p>

                      <div className="flex flex-wrap items-center gap-5 mt-4 text-sm text-zinc-500">

                        <div className="flex items-center gap-2">

                          <MapPin
                            size={16}
                          />

                          <span>

                            {
                              activity.location
                            }

                          </span>

                        </div>

                        <div className="flex items-center gap-2">

                          <BadgeCheck
                            size={16}
                          />

                          <span>

                            {
                              activity.vehicle
                            }

                          </span>

                        </div>

                        <div className="flex items-center gap-2">

                          <Clock3
                            size={16}
                          />

                          <span>

                            {
                              activity.time
                            }

                          </span>

                        </div>

                      </div>

                    </div>

                  </div>

                  {/* Right */}
                  <div className="flex flex-col items-start xl:items-end gap-4">

                    {/* Earnings */}
                    <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/10">

                      <IndianRupee
                        size={16}
                        className="text-emerald-400"
                      />

                      <span className="text-sm font-semibold text-emerald-400">

                        {
                          activity.earnings
                        }

                      </span>

                    </div>

                    {/* Status */}
                    <span
                      className={`px-5 py-3 rounded-2xl text-sm font-semibold ${getStatusStyle(
                        activity.status
                      )}`}
                    >

                      {
                        activity.status
                      }

                    </span>

                    {/* Live */}
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500">

                      <Activity
                        size={14}
                      />

                      ERP ACTIVE

                    </div>

                  </div>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}

export default DriverActivity;