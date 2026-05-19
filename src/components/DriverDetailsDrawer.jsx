import {
  X,
  Phone,
  Mail,
  MapPin,
  Car,
  BadgeCheck,
  Star,
  Wallet,
  CalendarDays,
} from "lucide-react";

function DriverDetailsDrawer({
  driver,
  closeDrawer,
}) {

  if (!driver)
    return null;

  return (

    <div className="fixed inset-0 z-[140] flex justify-end bg-black/70 backdrop-blur-md">

      <div className="relative w-full max-w-2xl h-screen overflow-y-auto bg-[#090909] border-l border-white/10 shadow-2xl">

        {/* Glow */}
        <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[140px] rounded-full"></div>

        <div className="relative z-10 p-8">

          {/* Header */}
          <div className="flex items-start justify-between mb-10">

            <div className="flex items-center gap-5">

              <img
                src={driver.avatar}
                alt={driver.name}
                className="w-24 h-24 rounded-3xl object-cover border border-white/10"
              />

              <div>

                <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

                  Driver Profile

                </p>

                <h2 className="text-4xl font-bold text-white mt-3">

                  {driver.name}

                </h2>

                <div className="flex items-center gap-3 mt-4">

                  <span
                    className={`px-4 py-2 rounded-full text-xs font-semibold ${driver.color}`}
                  >

                    {driver.status}

                  </span>

                  <span
                    className={`px-4 py-2 rounded-full text-xs font-semibold ${
                      driver.availability ===
                      "Online"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-red-500/15 text-red-400"
                    }`}
                  >

                    {
                      driver.availability
                    }

                  </span>

                </div>

              </div>

            </div>

            {/* Close */}
            <button
              onClick={closeDrawer}
              className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 flex items-center justify-center"
            >

              <X
                size={20}
                className="text-white"
              />

            </button>

          </div>

          {/* Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Phone */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-3 text-zinc-400">

                <Phone size={18} />

                <p className="text-sm">
                  Phone Number
                </p>

              </div>

              <h3 className="text-lg font-semibold text-white mt-4">

                {driver.phone}

              </h3>

            </div>

            {/* Email */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-3 text-zinc-400">

                <Mail size={18} />

                <p className="text-sm">
                  Email Address
                </p>

              </div>

              <h3 className="text-lg font-semibold text-white mt-4 break-all">

                {driver.email}

              </h3>

            </div>

            {/* Vehicle */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-3 text-zinc-400">

                <Car size={18} />

                <p className="text-sm">
                  Vehicle
                </p>

              </div>

              <h3 className="text-lg font-semibold text-white mt-4">

                {driver.vehicle}

              </h3>

              <p className="text-zinc-500 mt-2 text-sm">

                {
                  driver.vehicleNumber
                }

              </p>

            </div>

            {/* Vendor */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-3 text-zinc-400">

                <BadgeCheck
                  size={18}
                />

                <p className="text-sm">
                  Vendor
                </p>

              </div>

              <h3 className="text-lg font-semibold text-white mt-4">

                {driver.vendor}

              </h3>

            </div>

            {/* Location */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-3 text-zinc-400">

                <MapPin size={18} />

                <p className="text-sm">
                  Current Location
                </p>

              </div>

              <h3 className="text-lg font-semibold text-white mt-4">

                {driver.location}

              </h3>

            </div>

            {/* Joining */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-3 text-zinc-400">

                <CalendarDays
                  size={18}
                />

                <p className="text-sm">
                  Joining Date
                </p>

              </div>

              <h3 className="text-lg font-semibold text-white mt-4">

                {
                  driver.joiningDate
                }

              </h3>

            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">

            {/* Completed */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <p className="text-sm text-zinc-400">

                Completed Trips

              </p>

              <h2 className="text-4xl font-bold text-white mt-4">

                {
                  driver.completedTrips
                }

              </h2>

            </div>

            {/* Rating */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-2 text-yellow-400">

                <Star
                  size={18}
                  fill="currentColor"
                />

                <p className="text-sm">
                  Rating
                </p>

              </div>

              <h2 className="text-4xl font-bold text-white mt-4">

                {driver.rating}

              </h2>

            </div>

            {/* Earnings */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">

              <div className="flex items-center gap-2 text-emerald-400">

                <Wallet size={18} />

                <p className="text-sm">
                  Earnings
                </p>

              </div>

              <h2 className="text-4xl font-bold text-white mt-4">

                {
                  driver.earnings
                }

              </h2>

            </div>

          </div>

          {/* License */}
          <div className="mt-6 bg-white/[0.03] border border-white/10 rounded-3xl p-6">

            <p className="text-sm text-zinc-400">

              License Number

            </p>

            <h3 className="text-2xl font-bold text-white mt-4 tracking-wide">

              {
                driver.licenseNumber
              }

            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DriverDetailsDrawer;