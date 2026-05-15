import {
  LayoutDashboard,
  BarChart3,
  Car,
  CalendarDays,
  Search,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import { motion } from "framer-motion";

function CommandPalette({
  open,
  setOpen,
}) {

  const navigate = useNavigate();

  const [search, setSearch] =
    useState("");

  // Close with ESC
  useEffect(() => {

    const handleEscape = (e) => {

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleEscape
      );

  }, [setOpen]);

  // Commands
  const commands = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/",
    },

    {
      name: "Analytics",
      icon: BarChart3,
      path: "/analytics",
    },

    {
      name: "Drivers",
      icon: Car,
      path: "/drivers",
    },

    {
      name: "Bookings",
      icon: CalendarDays,
      path: "/bookings",
    },
  ];

  // Filtered Commands
  const filteredCommands =
    commands.filter((item) =>
      item.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  // Navigate
  const handleNavigate = (
    path
  ) => {

    navigate(path);

    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-md flex items-start justify-center pt-24 px-6">

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="relative overflow-hidden w-full max-w-2xl bg-[#0b1220]/95 border border-white/10 rounded-[36px] backdrop-blur-2xl shadow-2xl"
      >

        {/* Glow */}
        <div className="absolute top-[-100px] right-[-100px] w-[240px] h-[240px] bg-blue-500/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10">

          {/* Top */}
          <div className="flex items-center gap-4 px-6 py-5 border-b border-white/10">

            <Search
              size={20}
              className="text-slate-500"
            />

            <input
              autoFocus
              type="text"
              placeholder="Search pages..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500 text-lg"
            />

            <button
              onClick={() =>
                setOpen(false)
              }
              className="w-10 h-10 rounded-xl hover:bg-white/[0.05] flex items-center justify-center transition"
            >

              <X size={18} />

            </button>

          </div>

          {/* Commands */}
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

                    return (
                      <button
                        key={index}
                        onClick={() =>
                          handleNavigate(
                            item.path
                          )
                        }
                        className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/[0.05] transition-all duration-300 text-left"
                      >

                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center">

                          <Icon
                            size={22}
                          />

                        </div>

                        <div>

                          <p className="font-semibold text-white">
                            {item.name}
                          </p>

                          <p className="text-sm text-slate-500 mt-1">
                            Open{" "}
                            {
                              item.name
                            }{" "}
                            page
                          </p>

                        </div>

                      </button>
                    );
                  }
                )}

              </div>

            ) : (

              <div className="py-16 text-center">

                <p className="text-slate-500 text-lg">
                  No matching results
                </p>

              </div>

            )}

          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default CommandPalette;