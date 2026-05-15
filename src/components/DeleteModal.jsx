import {
  Trash2,
  X,
} from "lucide-react";

function DeleteModal({
  closeModal,
  confirmDelete,
}) {

  return (
    <div className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-md flex items-center justify-center px-6">

      <div className="relative overflow-hidden w-full max-w-md bg-[#0b1220]/95 border border-white/10 rounded-[36px] p-8 backdrop-blur-2xl">

        {/* Glow */}
        <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-red-500/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10">

          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 w-12 h-12 rounded-2xl hover:bg-white/[0.05] flex items-center justify-center transition"
          >

            <X size={18} />

          </button>

          {/* Icon */}
          <div className="w-16 h-16 rounded-3xl bg-red-500/10 text-red-400 flex items-center justify-center">

            <Trash2 size={28} />

          </div>

          {/* Content */}
          <h2 className="text-3xl font-bold mt-8 text-white">
            Delete Booking
          </h2>

          <p className="text-slate-400 mt-4 leading-relaxed">
            This action cannot be undone. The booking will be permanently removed from the dashboard.
          </p>

          {/* Actions */}
          <div className="flex gap-4 mt-10">

            <button
              onClick={closeModal}
              className="flex-1 px-6 py-4 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] transition-all duration-300"
            >

              Cancel

            </button>

            <button
              onClick={confirmDelete}
              className="flex-1 px-6 py-4 rounded-2xl bg-red-500 hover:bg-red-600 transition-all duration-300 font-semibold"
            >

              Delete

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;