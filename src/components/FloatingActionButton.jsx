import {
  Plus,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

function FloatingActionButton({

  onClick,

  label="Create Booking",

}) {

  return (

    <motion.button

      whileHover={{
        scale:1.05
      }}

      whileTap={{
        scale:0.95
      }}

      onClick={onClick}

      className="fixed bottom-8 right-8 z-[150] group"

    >

      {/* Glow */}

      <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Pulse */}

      <div className="absolute inset-0 rounded-full border border-yellow-400/30 animate-ping opacity-20"></div>

      {/* Main */}

      <div className="relative flex items-center gap-3 h-16 px-7 rounded-[30px] bg-gradient-to-r from-yellow-400 to-amber-500 shadow-[0_0_40px_rgba(250,204,21,0.3)]">

        <div className="w-10 h-10 rounded-2xl bg-black/10 flex items-center justify-center">

          <Plus
            size={22}
            className="text-black"
          />

        </div>

        <span className="font-bold text-black whitespace-nowrap">

          {label}

        </span>

      </div>

    </motion.button>

  );

}

export default FloatingActionButton;