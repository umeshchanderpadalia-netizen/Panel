import { motion } from "framer-motion";

function StatsCard({
  title,
  value,
  growth,
}) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -6,
      }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[32px] p-7 backdrop-blur-xl hover:border-white/20 transition-all duration-300"
    >

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10"></div>

      {/* Top Blur */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

      {/* Content */}
      <div className="relative z-10">

        <p className="text-slate-400 text-sm tracking-wide">
          {title}
        </p>

        <h3 className="text-5xl font-bold mt-6 tracking-tight text-white">
          {value}
        </h3>

        <p className="text-emerald-400 mt-5 text-sm">
          {growth}
        </p>

      </div>

    </motion.div>
  );
}

export default StatsCard;