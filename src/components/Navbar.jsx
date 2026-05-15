import {
  Bell,
  Search,
  Menu,
  X,
  LogOut,
} from "lucide-react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import CommandPalette from "./CommandPalette";

function Navbar() {

  const location = useLocation();

  const navigate = useNavigate();

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [commandOpen, setCommandOpen] =
    useState(false);

  // Ctrl + K
  useEffect(() => {

    const handleKeyDown = (
      e
    ) => {

      if (
        (e.ctrlKey ||
          e.metaKey) &&
        e.key.toLowerCase() ===
          "k"
      ) {

        e.preventDefault();

        setCommandOpen(
          (prev) => !prev
        );
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

  }, []);

  const navLinks = [
    {
      name: "Dashboard",
      path: "/",
    },

    {
      name: "Drivers",
      path: "/drivers",
    },

    {
      name: "Bookings",
      path: "/bookings",
    },

    {
      name: "Analytics",
      path: "/analytics",
    },
  ];

  const handleLogout = () => {

    localStorage.removeItem(
      "admin-auth"
    );

    navigate("/login");
  };

  return (
    <>
      {/* Command Palette */}
      <CommandPalette
        open={commandOpen}
        setOpen={setCommandOpen}
      />

      <div className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#060816]/80 backdrop-blur-2xl">

        <div className="max-w-[1500px] mx-auto h-24 px-6 lg:px-10 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-12">

            {/* Logo */}
            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                Get Me Cab
              </p>

              <h1 className="text-xl font-bold mt-1 tracking-tight">
                Operations Panel
              </h1>

            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-2xl p-2 backdrop-blur-xl">

              {navLinks.map(
                (link, index) => (

                  <Link
                    key={index}
                    to={link.path}
                    className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      location.pathname ===
                      link.path
                        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >

                    {link.name}

                  </Link>
                )
              )}

            </div>

          </div>

          {/* Right */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <button
              onClick={() =>
                setCommandOpen(true)
              }
              className="hidden md:flex items-center justify-between gap-5 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl w-[260px] hover:bg-white/[0.05] transition-all duration-300"
            >

              <div className="flex items-center gap-3">

                <Search
                  size={18}
                  className="text-slate-500"
                />

                <span className="text-sm text-slate-500">
                  Search...
                </span>

              </div>

              <div className="px-2 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-slate-500">

                Ctrl K

              </div>

            </button>

            {/* Notification */}
            <button className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/[0.06] transition-all duration-300">

              <Bell
                size={20}
                className="text-slate-300"
              />

            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-300"
            >

              <LogOut
                size={20}
                className="text-slate-300"
              />

            </button>

            {/* Profile */}
            <div className="hidden sm:flex items-center gap-4 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400"></div>

              <div>

                <p className="text-sm font-semibold text-white">
                  Deepanshu
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  System Administrator
                </p>

              </div>

            </div>

            {/* Mobile Menu */}
            <button
              onClick={() =>
                setMobileMenu(
                  !mobileMenu
                )
              }
              className="lg:hidden w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center"
            >

              {mobileMenu ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}

            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {mobileMenu && (

          <div className="lg:hidden border-t border-white/10 px-6 py-6 bg-[#060816]/95 backdrop-blur-2xl">

            <div className="space-y-3">

              {navLinks.map(
                (link, index) => (

                  <Link
                    key={index}
                    to={link.path}
                    onClick={() =>
                      setMobileMenu(
                        false
                      )
                    }
                    className={`block px-5 py-4 rounded-2xl transition-all duration-300 ${
                      location.pathname ===
                      link.path
                        ? "bg-blue-500 text-white"
                        : "bg-white/[0.03] border border-white/10 text-slate-400"
                    }`}
                  >

                    {link.name}

                  </Link>
                )
              )}

            </div>

          </div>

        )}

      </div>
    </>
  );
}

export default Navbar;