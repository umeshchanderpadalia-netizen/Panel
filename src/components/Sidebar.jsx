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
    <div className="hidden xl:flex flex-col w-[290px] min-h-screen border-r border-white/10 bg-[#060606]/95 backdrop-blur-2xl p-6 sticky top-0">

      {/* Logo */}
      <div className="mb-14">

        <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 font-semibold">
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
              className={`group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 border ${
                active
                  ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black border-yellow-300 shadow-[0_0_30px_rgba(250,204,21,0.18)]"
                  : "border-transparent text-zinc-400 hover:text-white hover:bg-white/[0.04] hover:border-yellow-500/20"
              }`}
            >

              <Icon
                size={22}
                className={`transition-all duration-300 ${
                  active
                    ? "text-black"
                    : "group-hover:text-yellow-400"
                }`}
              />

              <span className="font-medium">
                {item.name}
              </span>

            </Link>
          );
        })}

      </div>

      {/* Bottom */}
      <div className="mt-auto relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[30px] p-6 backdrop-blur-xl">

        <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10">

          <p className="text-sm text-yellow-400 uppercase tracking-[0.25em] font-medium">
            System
          </p>

          <h3 className="text-2xl font-bold mt-4 text-white leading-tight">
            Operations Active
          </h3>

          <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
            All dashboard systems and ride operations are functioning normally.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;