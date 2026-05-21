import {
  LayoutDashboard,
  BarChart3,
  Car,
  CalendarDays,
  FileText,
  Settings,
  Users,
  Search,
  X,
  CornerDownLeft,
} from "lucide-react";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

function CommandPalette({
  open,
  setOpen,
}) {

  const navigate =
    useNavigate();

  const [search, setSearch] =
    useState("");

  const [selectedIndex, setSelectedIndex] =
    useState(0);

  // Close with ESC
  useEffect(() => {

    const handleKeyDown =
      (event) => {

        if (
          event.key ===
          "Escape"
        ) {

          setOpen(false);
        }
      };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };

  }, [setOpen]);

  // Commands
  const commands = [

    {
      name: "Dashboard",
      description:
        "Overview of operations and performance",
      icon:
        LayoutDashboard,
      path: "/",
      shortcut: "⌘ D",
    },

    {
      name: "Bookings",
      description:
        "Manage customer bookings and trips",
      icon:
        CalendarDays,
      path: "/bookings",
      shortcut: "⌘ B",
    },

    {
      name: "Drivers",
      description:
        "Manage driver operations and status",
      icon: Car,
      path: "/drivers",
      shortcut: "⌘ R",
    },

    {
      name: "Vendors",
      description:
        "Vendor network and partnerships",
      icon: Users,
      path: "/vendors",
      shortcut: "⌘ V",
    },

    {
      name: "Analytics",
      description:
        "Business insights and growth reports",
      icon:
        BarChart3,
      path: "/analytics",
      shortcut: "⌘ A",
    },

    {
      name: "Reports",
      description:
        "Generate operational reports",
      icon:
        FileText,
      path: "/reports",
      shortcut: "⌘ P",
    },

    {
      name: "Settings",
      description:
        "System configuration and preferences",
      icon:
        Settings,
      path: "/settings",
      shortcut: "⌘ S",
    },
  ];

  // Filtered Commands
  const filteredCommands =
    useMemo(() => {

      return commands.filter(
        (item) =>
          item.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          item.description
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    }, [search]);

  // Reset Selection
  useEffect(() => {

    setSelectedIndex(0);

  }, [search]);

  // Keyboard Navigation
  useEffect(() => {

    if (!open) return;

    const handleKeyboard =
      (event) => {

        if (
          event.key ===
          "ArrowDown"
        ) {

          event.preventDefault();

          setSelectedIndex(
            (prev) =>
              prev <
              filteredCommands.length -
                1
                ? prev + 1
                : 0
          );
        }

        if (
          event.key ===
          "ArrowUp"
        ) {

          event.preventDefault();

          setSelectedIndex(
            (prev) =>
              prev > 0
                ? prev - 1
                : filteredCommands.length -
                  1
          );
        }

        if (
          event.key ===
            "Enter" &&
          filteredCommands[
            selectedIndex
          ]
        ) {

          handleNavigate(
            filteredCommands[
              selectedIndex
            ].path
          );
        }
      };

    window.addEventListener(
      "keydown",
      handleKeyboard
    );

    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };

  }, [
    open,
    filteredCommands,
    selectedIndex,
  ]);

  // Navigate
  const handleNavigate = (
    path
  ) => {

    navigate(path);

    setOpen(false);

    setSearch("");
  };

  if (!open) return null;

  return (

    <AnimatePresence>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        className="fixed inset-0 z-[200] flex items-start justify-center bg-black/80 px-6 pt-24 backdrop-blur-xl"
      >

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 24,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.96,
            y: 20,
          }}
          transition={{
            duration: 0.24,
          }}
          className="relative w-full max-w-2xl overflow-hidden rounded-[38px] border border-white/10 bg-[#090909]/95 shadow-[0_0_80px_rgba(0,0,0,0.6)] backdrop-blur-3xl"
        >

          {/* Glow */}
          <div className="absolute right-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-yellow-400/10 blur-[140px]"></div>

          <div className="absolute bottom-[-120px] left-[-120px] h-[220px] w-[220px] rounded-full bg-amber-500/10 blur-[120px]"></div>

          <div className="relative z-10">

            {/* Search Header */}
            <div className="flex items-center gap-4 border-b border-white/10 px-6 py-5">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">

                <Search
                  size={20}
                />

              </div>

              <input
                autoFocus
                type="text"
                placeholder="Search dashboard pages..."
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
                className="flex-1 bg-transparent text-lg text-white outline-none placeholder:text-zinc-500"
              />

              <button
                onClick={() =>
                  setOpen(false)
                }
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-transparent transition-all duration-300 hover:border-yellow-500/20 hover:bg-white/[0.05]"
              >

                <X
                  size={18}
                  className="text-zinc-400"
                />

              </button>

            </div>

            {/* Results */}
            <div className="p-4">

              {filteredCommands.length >
              0 ? (

                <div className="space-y-2">

                  {filteredCommands.map(
                    (
                      item,
                      index
                    ) => {

                      const Icon =
                        item.icon;

                      const active =
                        selectedIndex ===
                        index;

                      return (

                        <button
                          key={item.name}
                          onClick={() =>
                            handleNavigate(
                              item.path
                            )
                          }
                          className={`group flex w-full items-center justify-between rounded-3xl border px-5 py-4 text-left transition-all duration-300 ${
                            active
                              ? "border-yellow-500/20 bg-yellow-500/[0.06]"
                              : "border-transparent hover:border-yellow-500/10 hover:bg-white/[0.03]"
                          }`}
                        >

                          <div className="flex items-center gap-4">

                            <div
                              className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
                                active
                                  ? "bg-gradient-to-br from-yellow-400 to-amber-500 text-black"
                                  : "bg-yellow-500/10 text-yellow-400"
                              }`}
                            >

                              <Icon
                                size={24}
                              />

                            </div>

                            <div>

                              <p className="font-semibold text-white">

                                {
                                  item.name
                                }

                              </p>

                              <p className="mt-1 text-sm text-zinc-500">

                                {
                                  item.description
                                }

                              </p>

                            </div>

                          </div>

                          <div className="flex items-center gap-4">

                            <span className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-500">

                              {
                                item.shortcut
                              }

                            </span>

                            <CornerDownLeft
                              size={16}
                              className="text-zinc-600"
                            />

                          </div>

                        </button>
                      );
                    }
                  )}

                </div>

              ) : (

                <div className="flex flex-col items-center justify-center px-6 py-16 text-center">

                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/[0.04] text-zinc-500">

                    <Search
                      size={28}
                    />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">

                    No Results Found

                  </h3>

                  <p className="mt-3 max-w-sm leading-relaxed text-zinc-500">

                    Try searching for dashboard pages,
                    analytics, drivers, bookings or reports.

                  </p>

                </div>
              )}

            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-white/10 px-6 py-4">

              <div className="flex items-center gap-3 text-xs text-zinc-500">

                <kbd className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1">
                  ↑
                </kbd>

                <kbd className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1">
                  ↓
                </kbd>

                <span>
                  Navigate
                </span>

              </div>

              <div className="flex items-center gap-3 text-xs text-zinc-500">

                <kbd className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1">
                  Enter
                </kbd>

                <span>
                  Open Page
                </span>

              </div>

            </div>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}

export default CommandPalette;