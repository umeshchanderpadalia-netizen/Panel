import {
  Bell,
  Search,
  LogOut,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

function Topbar() {

  const navigate =
    useNavigate();

  const handleLogout = () => {

    localStorage.removeItem(
      "admin-auth"
    );

    navigate("/login");
  };

  return (
    <div className="sticky top-0 z-40 mb-8">

      <div className="relative overflow-hidden flex items-center justify-between gap-6 bg-white/[0.04] border border-white/10 rounded-[30px] px-6 py-5 backdrop-blur-2xl">

        {/* Glow */}
        <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-blue-500/10 blur-[100px] rounded-full"></div>

        {/* Left */}
        <div className="relative z-10 flex items-center gap-4 flex-1">

          {/* Search */}
          <div className="hidden md:flex items-center gap-4 w-full max-w-md px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10">

            <Search
              size={18}
              className="text-slate-500"
            />

            <input
              type="text"
              placeholder="Search dashboard..."
              className="bg-transparent outline-none w-full text-sm text-white placeholder:text-slate-500"
            />

          </div>

        </div>

        {/* Right */}
        <div className="relative z-10 flex items-center gap-4">

          {/* Notifications */}
          <button className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/[0.06] transition-all duration-300">

            <Bell
              size={20}
              className="text-slate-300"
            />

          </button>

          {/* Profile */}
          <div className="hidden sm:flex items-center gap-4 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10">

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

        </div>

      </div>

    </div>
  );
}
export default Topbar;