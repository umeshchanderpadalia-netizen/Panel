import {
  Plus,
} from "lucide-react";

import { motion } from "framer-motion";

function FloatingActionButton({
  onClick,
  label = "Create",
}) {

  return (

    <motion.button
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.96,
      }}
      onClick={onClick}
      className="fixed bottom-8 right-8 z-50 group"
    >

      {/* Glow */}
      <div className="absolute inset-0 bg-yellow-400/40 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Pulse Ring */}
      <div className="absolute inset-0 rounded-[30px] border border-yellow-400/30 animate-ping opacity-20"></div>

      {/* Button */}
      <div className="relative flex items-center gap-3 px-6 h-16 rounded-[28px] bg-gradient-to-br from-yellow-400 to-amber-500 shadow-[0_0_40px_rgba(250,204,21,0.28)] overflow-hidden">

        {/* Shine */}
        <div className="absolute top-0 left-[-120%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:left-[120%] transition-all duration-1000"></div>

        {/* Icon */}
        <div className="relative z-10 w-10 h-10 rounded-2xl bg-black/10 flex items-center justify-center">

          <Plus
            size={24}
            className="text-black"
          />

        </div>

        {/* Text */}
        <span className="relative z-10 text-sm font-bold tracking-wide text-black whitespace-nowrap">

          {label}

        </span>

      </div>

    </motion.button>
  );
}

export default FloatingActionButton;