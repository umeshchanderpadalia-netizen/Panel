import {
  LayoutDashboard,
  BarChart3,
  Car,
  CalendarDays,
  Settings,
  Wallet,
  FileText,
  Building2,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

function Sidebar() {

  const location =
    useLocation();

  const links = [

    // Operations
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },

    {
      name: "Bookings",
      path: "/bookings",
      icon: CalendarDays,
    },

    {
      name: "Drivers",
      path: "/drivers",
      icon: Car,
    },

    {
      name: "Vendors",
      path: "/vendors",
      icon: Building2,
    },

    // Finance
    {
      name: "Ledger",
      path: "/ledger",
      icon: Wallet,
    },

    // Intelligence
    {
      name: "Analytics",
      path: "/analytics",
      icon: BarChart3,
    },

    {
      name: "Reports",
      path: "/reports",
      icon: FileText,
    },

    // System
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (

    <div className="hidden xl:flex flex-col w-[260px] min-h-screen border-r border-white/10 bg-[#060606]/95 backdrop-blur-2xl p-5 sticky top-0 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-yellow-400/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="absolute bottom-[-100px] left-[-100px] w-[220px] h-[220px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Logo */}
      <div className="relative z-10 mb-10">

        <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

          Get Me Cab

        </p>

        <h1 className="text-2xl font-bold mt-3 tracking-tight text-white">

          Admin Panel

        </h1>

      </div>

      {/* Navigation */}
      <div className="relative z-10 space-y-2">

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
              className={`group flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 border ${
                active
                  ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black border-yellow-300 shadow-[0_0_24px_rgba(250,204,21,0.16)]"
                  : "border-transparent text-zinc-400 hover:text-white hover:bg-white/[0.04] hover:border-yellow-500/10"
              }`}
            >

              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  active
                    ? "bg-black/10"
                    : "bg-white/[0.03] group-hover:bg-yellow-500/10"
                }`}
              >

                <Icon
                  size={18}
                  className={`transition-all duration-300 ${
                    active
                      ? "text-black"
                      : "group-hover:text-yellow-400"
                  }`}
                />

              </div>

              <span className="font-medium text-sm">

                {item.name}

              </span>

            </Link>
          );
        })}

      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-auto overflow-hidden bg-white/[0.04] border border-white/10 rounded-[28px] p-5 backdrop-blur-xl">

        <div className="absolute top-[-60px] right-[-60px] w-[160px] h-[160px] bg-yellow-400/10 blur-[90px] rounded-full"></div>

        <div className="relative z-10">

          <p className="text-xs text-yellow-400 uppercase tracking-[0.22em] font-medium">

            System

          </p>

          <h3 className="text-xl font-bold mt-4 text-white leading-tight">

            Operations Active

          </h3>

          <p className="text-xs text-zinc-400 mt-4 leading-relaxed">

            All dashboard systems and ride operations are functioning normally.

          </p>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;