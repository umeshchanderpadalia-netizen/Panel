import {
  Trash2,
  X,
  AlertTriangle,
} from "lucide-react";

import { motion } from "framer-motion";

function DeleteModal({
  closeModal,
  confirmDelete,
}) {

  return (

    <div className="fixed inset-0 z-[220] flex items-center justify-center bg-black/85 backdrop-blur-2xl px-6 py-10">

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.94,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.28,
        }}
        className="relative w-full max-w-md overflow-hidden rounded-[38px] border border-white/10 bg-[#090909]/95 p-8 shadow-[0_0_90px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
      >

        {/* Background Glow */}
        <div className="absolute right-[-110px] top-[-110px] h-[260px] w-[260px] rounded-full bg-red-500/10 blur-[140px]"></div>

        <div className="absolute bottom-[-130px] left-[-130px] h-[260px] w-[260px] rounded-full bg-red-500/5 blur-[140px]"></div>

        {/* Top Overlay */}
        <div className="absolute left-0 top-0 h-32 w-full bg-gradient-to-b from-white/[0.03] to-transparent"></div>

        <div className="relative z-10">

          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-transparent transition-all duration-300 hover:border-red-500/20 hover:bg-white/[0.05]"
          >

            <X
              size={18}
              className="text-zinc-400"
            />

          </button>

          {/* Icon */}
          <div className="flex h-20 w-20 items-center justify-center rounded-[28px] border border-red-500/10 bg-red-500/10 text-red-400 shadow-[0_0_40px_rgba(239,68,68,0.12)]">

            <Trash2
              size={34}
            />

          </div>

          {/* Content */}
          <div className="mt-8">

            <div className="flex items-center gap-2 text-red-400">

              <AlertTriangle
                size={15}
              />

              <p className="text-xs font-semibold uppercase tracking-[0.28em]">

                Permanent Action

              </p>

            </div>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">

              Delete Booking

            </h2>

            <p className="mt-5 leading-relaxed text-zinc-400">

              This action cannot be undone.
              The selected booking and related operational records
              will be permanently removed from the dashboard.

            </p>

          </div>

          {/* Warning Box */}
          <div className="mt-8 rounded-3xl border border-red-500/10 bg-red-500/[0.04] p-5">

            <div className="flex items-start gap-4">

              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">

                <AlertTriangle
                  size={18}
                />

              </div>

              <div>

                <h3 className="font-semibold text-white">

                  Data Removal Warning

                </h3>

                <p className="mt-2 text-sm leading-relaxed text-zinc-400">

                  Deleted bookings will no longer appear in reports,
                  analytics or ledger operations.

                </p>

              </div>

            </div>

          </div>

          {/* Actions */}
          <div className="mt-10 flex gap-4">

            <button
              onClick={closeModal}
              className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
            >

              Cancel

            </button>

            <button
              onClick={confirmDelete}
              className="group relative flex-1 overflow-hidden rounded-2xl bg-red-500 px-6 py-4 font-semibold text-white shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-300 hover:scale-[1.02] hover:bg-red-600"
            >

              {/* Shine */}
              <div className="absolute left-[-130%] top-0 h-full w-[120%] skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[130%]"></div>

              <span className="relative z-10 flex items-center justify-center gap-2">

                <Trash2
                  size={16}
                />

                Delete Booking

              </span>

            </button>

          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default DeleteModal;