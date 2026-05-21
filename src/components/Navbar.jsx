import {
  Bell,
  LogOut,
  Sparkles,
  Menu,
  X,
  Command,
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

import { motion } from "framer-motion";

function Navbar() {

  const location =
    useLocation();

  const navigate =
    useNavigate();

  const [
    mobileMenu,
    setMobileMenu,
  ] = useState(false);

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

  useEffect(() => {

    setMobileMenu(false);

  }, [location.pathname]);

  return (

    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#060606]/80 backdrop-blur-3xl overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute top-[-140px] right-[-140px] w-[280px] h-[280px] bg-yellow-400/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-160px] left-[-160px] w-[300px] h-[300px] bg-amber-500/5 blur-[150px] rounded-full"></div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.05),transparent_35%)]"></div>

      {/* Shine */}
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.02),transparent)]"></div>

      <div className="relative z-10 max-w-[1800px] mx-auto h-20 px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-6">

        {/* Left */}
        <div className="flex items-center gap-5 min-w-0">

          {/* Mobile Menu */}
          <button
            onClick={() =>
              setMobileMenu(
                !mobileMenu
              )
            }
            className="lg:hidden w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-yellow-500/20 hover:bg-yellow-500/10 transition-all duration-300 flex items-center justify-center"
          >

            {mobileMenu ? (

              <X
                size={18}
                className="text-white"
              />

            ) : (

              <Menu
                size={18}
                className="text-white"
              />

            )}

          </button>

          {/* Logo */}
          <div className="flex items-center gap-4 flex-shrink-0">

            <div className="relative">

              <div className="absolute inset-0 bg-yellow-400/30 blur-2xl rounded-full"></div>

              <motion.div
                whileHover={{
                  rotate: 6,
                  scale: 1.05,
                }}
                className="relative w-12 h-12 rounded-[20px] bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-black shadow-[0_0_28px_rgba(250,204,21,0.22)]"
              >

                <Sparkles
                  size={20}
                />

              </motion.div>

            </div>

            <div className="hidden sm:block">

              <p className="text-[10px] uppercase tracking-[0.35em] text-yellow-400 font-semibold">

                Get Me Cab

              </p>

              <h1 className="text-sm font-bold tracking-tight text-white mt-1">

                ERP Operations
              </h1>

            </div>

          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-[22px] p-1.5 backdrop-blur-xl">

            {navLinks.map(
              (
                link,
                index
              ) => {

                const active =
                  location.pathname ===
                  link.path;

                return (

                  <Link
                    key={index}
                    to={link.path}
                    className={`group relative overflow-hidden px-4 py-2.5 rounded-2xl text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                      active

                        ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black border-yellow-300 shadow-[0_0_22px_rgba(250,204,21,0.16)]"

                        : "border-transparent text-zinc-400 hover:text-white hover:bg-white/[0.05] hover:border-yellow-500/10"
                    }`}
                  >

                    {!active && (

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-yellow-500/[0.04] to-transparent"></div>

                    )}

                    <span className="relative z-10">

                      {link.name}

                    </span>

                  </Link>
                );
              }
            )}

          </nav>

        </div>

        {/* Right */}
        <div className="flex items-center gap-2 flex-shrink-0">

          {/* Command */}
          <button className="hidden md:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-yellow-500/20 hover:bg-yellow-500/[0.06] transition-all duration-300">

            <Command
              size={15}
              className="text-yellow-400"
            />

            <span className="text-sm text-zinc-400">

              Search

            </span>

            <div className="px-2 py-1 rounded-lg bg-black/40 border border-white/10 text-[10px] text-zinc-500">

              ⌘K

            </div>

          </button>

          {/* ERP Status */}
          <div className="hidden 2xl:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/10 shadow-[0_0_25px_rgba(16,185,129,0.08)]">

            <div className="relative">

              <div className="absolute inset-0 bg-emerald-400 blur-md rounded-full"></div>

              <div className="relative w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>

            </div>

            <div>

              <p className="text-[9px] uppercase tracking-[0.24em] text-emerald-400">

                ERP LIVE

              </p>

              <p className="text-[11px] text-zinc-300 mt-1">

                Systems Active

              </p>

            </div>

          </div>

          {/* Notification */}
          <button className="group relative overflow-hidden w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:border-yellow-500/20 hover:bg-yellow-500/10 transition-all duration-300">

            <Bell
              size={17}
              className="text-zinc-300 group-hover:text-yellow-400 transition-all duration-300"
            />

            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="group relative overflow-hidden w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-300"
          >

            <LogOut
              size={17}
              className="text-zinc-300 group-hover:text-red-400 transition-all duration-300"
            />

          </button>

          {/* Profile */}
          <div className="hidden xl:flex items-center gap-3 px-3 py-2 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-yellow-500/10 transition-all duration-300">

            {/* Avatar */}
            <div className="relative">

              <div className="absolute inset-0 bg-yellow-400/30 blur-xl rounded-full"></div>

              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-black font-bold shadow-[0_0_18px_rgba(250,204,21,0.18)]">

                D

              </div>

            </div>

            {/* Info */}
            <div>

              <p className="text-sm font-semibold text-white">

                Deepanshu

              </p>

              <p className="text-[11px] text-zinc-500 mt-0.5">

                ERP Admin

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Mobile Nav */}
      {mobileMenu && (

        <motion.div
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
          }}
          className="lg:hidden relative z-20 px-4 pb-5"
        >

          <div className="bg-[#0a0a0a]/95 border border-white/10 rounded-[28px] p-3 backdrop-blur-2xl space-y-1">

            {navLinks.map(
              (
                link,
                index
              ) => {

                const active =
                  location.pathname ===
                  link.path;

                return (

                  <Link
                    key={index}
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 ${
                      active

                        ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black"

                        : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >

                    <span className="font-medium">

                      {link.name}

                    </span>

                  </Link>
                );
              }
            )}

          </div>

        </motion.div>

      )}

    </header>
  );
}

export default Navbar;