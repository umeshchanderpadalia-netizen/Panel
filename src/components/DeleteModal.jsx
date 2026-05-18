import {
  Trash2,
  X,
} from "lucide-react";

function DeleteModal({
  closeModal,
  confirmDelete,
}) {

  return (
    <div className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-2xl flex items-center justify-center px-6">

      <div className="relative overflow-hidden w-full max-w-md bg-[#090909]/95 border border-white/10 rounded-[40px] p-8 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.45)]">

        {/* Ambient Glow */}
        <div className="absolute top-[-100px] right-[-100px] w-[240px] h-[240px] bg-red-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-120px] left-[-120px] w-[240px] h-[240px] bg-red-500/5 blur-[120px] rounded-full"></div>

        {/* Top Gradient */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

        <div className="relative z-10">

          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 w-12 h-12 rounded-2xl hover:bg-white/[0.05] hover:border hover:border-red-500/20 flex items-center justify-center transition-all duration-300"
          >

            <X
              size={18}
              className="text-zinc-400"
            />

          </button>

          {/* Icon */}
          <div className="w-20 h-20 rounded-[28px] bg-red-500/10 text-red-400 flex items-center justify-center shadow-[0_0_35px_rgba(239,68,68,0.12)]">

            <Trash2 size={34} />

          </div>

          {/* Content */}
          <div className="mt-8">

            <p className="text-sm uppercase tracking-[0.25em] text-red-400">
              Warning
            </p>

            <h2 className="text-4xl font-bold mt-4 tracking-tight text-white">
              Delete Booking
            </h2>

            <p className="text-zinc-400 mt-5 leading-relaxed">
              This action is permanent and cannot be reversed. The selected booking record will be permanently removed from the operations dashboard.
            </p>

          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-12">

            <button
              onClick={closeModal}
              className="flex-1 px-6 py-4 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] hover:border-red-500/20 transition-all duration-300 text-white"
            >

              Cancel

            </button>

            <button
              onClick={confirmDelete}
              className="group relative overflow-hidden flex-1 px-6 py-4 rounded-2xl bg-red-500 hover:bg-red-600 transition-all duration-300 font-semibold text-white shadow-[0_0_25px_rgba(239,68,68,0.18)]"
            >

              {/* Shine */}
              <div className="absolute top-0 left-[-120%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[120%] transition-all duration-1000"></div>

              <span className="relative z-10">
                Delete
              </span>

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;