import { Plus } from "lucide-react";

function FloatingActionButton({
  onClick,
}) {

  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-50 group"
    >

      {/* Glow */}
      <div className="absolute inset-0 bg-blue-500/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* Button */}
      <div className="relative w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-2xl shadow-blue-500/30 hover:scale-110 transition-all duration-300">

        <Plus
          size={28}
          className="text-white"
        />

      </div>

    </button>
  );
}

export default FloatingActionButton;