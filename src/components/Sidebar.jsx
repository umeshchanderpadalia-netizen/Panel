import {
  LayoutDashboard,
  BarChart3,
  Car,
  CalendarDays,
  Settings,
  Wallet,
  FileText,
  Building2,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import { motion } from "framer-motion";

function Sidebar() {

  const location =
    useLocation();

  const links = [

    {
      section:
        "Operations",

      items: [

        {
          name:
            "Dashboard",

          path: "/",

          icon:
            LayoutDashboard,
        },

        {
          name:
            "Bookings",

          path:
            "/bookings",

          icon:
            CalendarDays,
        },

        {
          name:
            "Drivers",

          path:
            "/drivers",

          icon:
            Car,
        },

        {
          name:
            "Vendors",

          path:
            "/vendors",

          icon:
            Building2,
        },
      ],
    },

    {
      section:
        "Finance",

      items: [

        {
          name:
            "Ledger",

          path:
            "/ledger",

          icon:
            Wallet,
        },
      ],
    },

    {
      section:
        "Analytics",

      items: [

        {
          name:
            "Analytics",

          path:
            "/analytics",

          icon:
            BarChart3,
        },

        {
          name:
            "Reports",

          path:
            "/reports",

          icon:
            FileText,
        },
      ],
    },

    {
      section:
        "System",

      items: [

        {
          name:
            "Settings",

          path:
            "/settings",

          icon:
            Settings,
        },
      ],
    },
  ];

  return (

    <aside className="hidden xl:flex flex-col w-[290px] min-h-screen sticky top-0 overflow-hidden border-r border-white/10 bg-[#050505]/95 backdrop-blur-3xl px-5 py-6">

      {/* Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[240px] h-[240px] bg-yellow-400/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="absolute bottom-[-120px] left-[-120px] w-[240px] h-[240px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none"></div>

      {/* Header */}
      <div className="relative z-10 mb-10">

        <div className="flex items-center gap-4">

          <div className="relative">

            <div className="absolute inset-0 bg-yellow-400/30 blur-2xl rounded-full"></div>

            <div className="relative w-14 h-14 rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.18)]">

              <Sparkles
                size={24}
                className="text-black"
              />

            </div>

          </div>

          <div>

            <p className="text-[10px] uppercase tracking-[0.35em] text-yellow-400 font-semibold">

              Get Me Cab

            </p>

            <h1 className="text-2xl font-bold mt-2 tracking-tight text-white">

              ERP Dashboard

            </h1>

          </div>

        </div>

      </div>

      {/* Navigation */}
      <div className="relative z-10 flex-1 overflow-y-auto pr-1 space-y-8 scrollbar-hide">

        {links.map(
          (
            group,
            groupIndex
          ) => (

            <div
              key={groupIndex}
            >

              {/* Section */}
              <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500 font-semibold mb-4 px-2">

                {
                  group.section
                }

              </p>

              {/* Items */}
              <div className="space-y-2">

                {group.items.map(
                  (
                    item
                  ) => {

                    const Icon =
                      item.icon;

                    const active =
                      location.pathname ===
                      item.path;

                    return (

                      <motion.div
                        key={
                          item.name
                        }
                        whileHover={{
                          x: 3,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                      >

                        <Link
                          to={
                            item.path
                          }
                          className={`group relative overflow-hidden flex items-center justify-between px-4 py-3.5 rounded-2xl border transition-all duration-300 ${
                            active

                              ? "bg-gradient-to-r from-yellow-400 to-amber-500 border-yellow-300 text-black shadow-[0_0_24px_rgba(250,204,21,0.18)]"

                              : "bg-white/[0.02] border-white/5 text-zinc-400 hover:bg-white/[0.04] hover:border-yellow-500/10 hover:text-white"
                          }`}
                        >

                          {/* Hover Glow */}
                          {!active && (

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-yellow-500/[0.03] to-transparent"></div>

                          )}

                          <div className="relative z-10 flex items-center gap-4">

                            <div
                              className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
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

                              {
                                item.name
                              }

                            </span>

                          </div>

                          <ChevronRight
                            size={16}
                            className={`relative z-10 transition-all duration-300 ${
                              active

                                ? "text-black"

                                : "text-zinc-600 group-hover:text-yellow-400"
                            }`}
                          />

                        </Link>

                      </motion.div>
                    );
                  }
                )}

              </div>

            </div>
          )
        )}

      </div>

      {/* Footer Card */}
      <div className="relative z-10 mt-8 overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] p-6 backdrop-blur-2xl">

        {/* Glow */}
        <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10">

          <div className="flex items-center gap-3 mb-5">

            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>

            <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-semibold">

              Systems Active

            </p>

          </div>

          <h3 className="text-2xl font-bold text-white leading-tight">

            ERP Operations Online

          </h3>

          <p className="text-sm text-zinc-400 mt-4 leading-relaxed">

            All ride operations, driver workflow,
            bookings and financial systems are synchronized.

          </p>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;