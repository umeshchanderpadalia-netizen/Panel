import {
  LayoutDashboard,
  BarChart3,
  Car,
  CalendarDays,
  Settings,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

function Sidebar() {

  const location =
    useLocation();

  const links = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },

    {
      name: "Drivers",
      path: "/drivers",
      icon: Car,
    },

    {
      name: "Bookings",
      path: "/bookings",
      icon: CalendarDays,
    },

    {
      name: "Analytics",
      path: "/analytics",
      icon: BarChart3,
    },

    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="hidden xl:flex flex-col w-[290px] min-h-screen border-r border-white/5 bg-[#060816]/95 backdrop-blur-2xl p-6 sticky top-0">

      {/* Logo */}
      <div className="mb-14">

        <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
          Get Me Cab
        </p>

        <h1 className="text-3xl font-bold mt-3 tracking-tight text-white">
          Admin Panel
        </h1>

      </div>

      {/* Navigation */}
      <div className="space-y-3">

        {links.map((item) => {

          const Icon =
            item.icon;

          const active =
            location.pathname ===
            item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                active
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >

              <Icon size={22} />

              <span className="font-medium">
                {item.name}
              </span>

            </Link>
          );
        })}

      </div>

      {/* Bottom */}
      <div className="mt-auto relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[30px] p-6">

        <div className="absolute top-[-60px] right-[-60px] w-[160px] h-[160px] bg-blue-500/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10">

          <p className="text-sm text-slate-500 uppercase tracking-[0.25em]">
            System
          </p>

          <h3 className="text-2xl font-bold mt-4 text-white">
            Operations Active
          </h3>

          <p className="text-sm text-slate-400 mt-4 leading-relaxed">
            All dashboard systems and ride operations are functioning normally.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;