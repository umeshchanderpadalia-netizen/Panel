import {
  Bell,
  LogOut,
  Sparkles,
} from "lucide-react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Navbar() {

  const location =
    useLocation();

  const navigate =
    useNavigate();

  const navLinks = [

    {
      name: "Dashboard",
      path: "/",
    },

    {
      name: "Bookings",
      path: "/bookings",
    },

    {
      name: "Drivers",
      path: "/drivers",
    },

    {
      name: "Vendors",
      path: "/vendors",
    },

    {
      name: "Ledger",
      path: "/ledger",
    },

    {
      name: "Analytics",
      path: "/analytics",
    },

    {
      name: "Reports",
      path: "/reports",
    },
  ];

  const handleLogout = () => {

    localStorage.removeItem(
      "admin-auth"
    );

    navigate("/login");
  };

  return (

    <header className="sticky top-0 z-50 w-full border-b border-white/6 bg-[#060606]/80 backdrop-blur-2xl overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[220px] h-[220px] bg-yellow-400/8 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] left-[-120px] w-[220px] h-[220px] bg-amber-500/5 blur-[120px] rounded-full"></div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.04),transparent_40%)]"></div>

      <div className="relative z-10 max-w-[1800px] mx-auto h-16 px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-6">

        {/* Left */}
        <div className="flex items-center gap-5 min-w-0">

          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">

            <div className="relative">

              <div className="absolute inset-0 bg-yellow-400/30 blur-xl rounded-full"></div>

              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-black shadow-[0_0_24px_rgba(250,204,21,0.18)]">

                <Sparkles
                  size={18}
                />

              </div>

            </div>

            <div className="hidden xl:block">

              <p className="text-[10px] uppercase tracking-[0.28em] text-yellow-400 font-semibold">

                Get Me Cab

              </p>

              <h1 className="text-sm font-bold tracking-tight text-white mt-1">

                ERP Dashboard

              </h1>

            </div>

          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-2xl p-1.5 backdrop-blur-xl overflow-x-auto scrollbar-hide">

            {navLinks.map(
              (
                link,
                index
              ) => (

                <Link
                  key={index}
                  to={link.path}
                  className={`group relative overflow-hidden px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                    location.pathname ===
                    link.path

                      ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black border-yellow-300 shadow-[0_0_18px_rgba(250,204,21,0.16)]"

                      : "border-transparent text-zinc-400 hover:text-white hover:bg-white/[0.05] hover:border-yellow-500/10"
                  }`}
                >

                  {!(
                    location.pathname ===
                    link.path
                  ) && (

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-yellow-500/[0.04] to-transparent"></div>

                  )}

                  <span className="relative z-10">

                    {link.name}

                  </span>

                </Link>
              )
            )}

          </nav>

        </div>

        {/* Right */}
        <div className="flex items-center gap-2 flex-shrink-0">

          {/* ERP Status */}
          <div className="hidden 2xl:flex items-center gap-3 px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/10">

            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>

            <div>

              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-400">

                ERP LIVE

              </p>

              <p className="text-[11px] text-zinc-300 mt-1">

                Systems Active

              </p>

            </div>

          </div>

          {/* Notification */}
          <button className="group relative overflow-hidden w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:border-yellow-500/20 hover:bg-yellow-500/10 transition-all duration-300">

            <Bell
              size={16}
              className="text-zinc-300 group-hover:text-yellow-400 transition-all duration-300"
            />

          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="group relative overflow-hidden w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-300"
          >

            <LogOut
              size={16}
              className="text-zinc-300 group-hover:text-red-400 transition-all duration-300"
            />

          </button>

          {/* Profile */}
          <div className="hidden xl:flex items-center gap-3 px-3 py-2 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-yellow-500/10 transition-all duration-300">

            {/* Avatar */}
            <div className="relative">

              <div className="absolute inset-0 bg-yellow-400/30 blur-xl rounded-full"></div>

              <div className="relative w-9 h-9 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-[0_0_16px_rgba(250,204,21,0.18)]"></div>

            </div>

            {/* Info */}
            <div>

              <p className="text-xs font-semibold text-white">

                Deepanshu

              </p>

              <p className="text-[10px] text-zinc-500 mt-0.5">

                ERP Admin

              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;