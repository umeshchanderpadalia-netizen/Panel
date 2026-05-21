import {
  CheckCircle2,
  Sparkles,
  X,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

function Toast({
  message,
  onClose,
}) {

  return (

    <AnimatePresence>

      <motion.div
        initial={{
          opacity: 0,
          y: -30,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: -20,
          scale: 0.96,
        }}
        transition={{
          duration: 0.3,
        }}
        className="fixed top-6 right-6 z-[120]"
      >

        <div className="group relative overflow-hidden flex items-start gap-4 bg-[#090909]/95 border border-white/10 backdrop-blur-2xl px-6 py-5 rounded-[30px] shadow-[0_0_50px_rgba(0,0,0,0.45)] min-w-[340px] max-w-[420px]">

          {/* Glow */}
          <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-yellow-400/[0.03] via-transparent to-amber-500/[0.06]"></div>

          {/* Progress */}
          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-yellow-400 to-amber-500 animate-[toastProgress_4s_linear]"></div>

          {/* Icon */}
          <div className="relative z-10 w-14 h-14 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.08)] flex-shrink-0">

            <CheckCircle2
              size={24}
            />

          </div>

          {/* Content */}
          <div className="relative z-10 flex-1">

            <div className="flex items-center gap-2">

              <Sparkles
                size={14}
                className="text-yellow-400"
              />

              <p className="text-xs uppercase tracking-[0.25em] text-yellow-400 font-semibold">

                ERP Notification

              </p>

            </div>

            <h4 className="font-semibold text-white text-lg mt-3">

              Operation Successful

            </h4>

            <p className="text-sm text-zinc-400 mt-3 leading-relaxed">

              {message}

            </p>

          </div>

          {/* Close */}
          {onClose && (

            <button
              onClick={onClose}
              className="relative z-10 w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-300"
            >

              <X
                size={16}
                className="text-zinc-400 hover:text-red-400 transition-all duration-300"
              />

            </button>

          )}

        </div>

      </motion.div>

    </AnimatePresence>
  );
}

export default Toast;