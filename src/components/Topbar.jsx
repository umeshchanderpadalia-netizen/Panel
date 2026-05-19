// import {
//   Bell,
//   LogOut,
//   Sparkles,
// } from "lucide-react";

// import {
//   useNavigate,
//   useLocation,
// } from "react-router-dom";

// function Topbar() {

//   const navigate =
//     useNavigate();

//   const location =
//     useLocation();

//   const handleLogout = () => {

//     localStorage.removeItem(
//       "admin-auth"
//     );

//     navigate("/login");
//   };

//   // Dynamic Page Title
//   const getPageTitle = () => {

//     switch (
//       location.pathname
//     ) {

//       case "/":
//         return "Dashboard";

//       case "/drivers":
//         return "Drivers";

//       case "/bookings":
//         return "Bookings";

//       case "/ledger":
//         return "Ledger";

//       case "/analytics":
//         return "Analytics";

//       case "/reports":
//         return "Reports";

//       default:
//         return "Admin Panel";
//     }
//   };

//   return (
//     <div className="sticky top-0 z-40 mb-8">

//       <div className="relative overflow-hidden flex items-center justify-between gap-6 bg-white/[0.04] border border-white/10 rounded-[32px] px-7 py-5 backdrop-blur-2xl hover:border-yellow-500/20 transition-all duration-500">

//         {/* Glow */}
//         <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

//         <div className="absolute bottom-[-100px] left-[-100px] w-[220px] h-[220px] bg-amber-500/5 blur-[120px] rounded-full"></div>

//         {/* Left */}
//         <div className="relative z-10 flex items-center gap-5">

//           {/* Icon */}
//           <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-black shadow-[0_0_30px_rgba(250,204,21,0.18)]">

//             <Sparkles
//               size={24}
//             />

//           </div>

//           {/* Title */}
//           <div>

//             <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 font-medium">
//               Get Me Cab
//             </p>

//             <h2 className="text-3xl font-bold mt-2 text-white tracking-tight">
//               {
//                 getPageTitle()
//               }
//             </h2>

//           </div>

//         </div>

//         {/* Right */}
//         <div className="relative z-10 flex items-center gap-4">

//           {/* Notifications */}
//           <button className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:border-yellow-500/20 hover:bg-white/[0.06] transition-all duration-300">

//             <Bell
//               size={20}
//               className="text-zinc-300"
//             />

//           </button>

//           {/* Profile */}
//           <div className="hidden sm:flex items-center gap-4 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-yellow-500/20 transition-all duration-300">

//             <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-[0_0_25px_rgba(250,204,21,0.18)]"></div>

//             <div>

//               <p className="text-sm font-semibold text-white">
//                 Deepanshu
//               </p>

//               <p className="text-xs text-zinc-500 mt-1">
//                 System Administrator
//               </p>

//             </div>

//           </div>

//           {/* Logout */}
//           <button
//             onClick={handleLogout}
//             className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-300"
//           >

//             <LogOut
//               size={20}
//               className="text-zinc-300"
//             />

//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Topbar;