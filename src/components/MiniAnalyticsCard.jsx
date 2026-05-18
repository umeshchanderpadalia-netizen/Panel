function MiniAnalyticsCard({
  title,
  value,
  subtitle,
}) {

  return (
    <div className="group relative overflow-hidden bg-[#0a0a0a]/80 border border-white/10 rounded-[28px] p-5 backdrop-blur-xl hover:border-yellow-500/20 transition-all duration-300">

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-yellow-400/10 via-transparent to-amber-500/10"></div>

      <div className="relative z-10">

        <p className="text-sm text-zinc-500 tracking-wide">
          {title}
        </p>

        <h3 className="text-4xl font-bold mt-4 tracking-tight text-white">
          {value}
        </h3>

        <p className="text-sm text-zinc-400 mt-3">
          {subtitle}
        </p>

      </div>

    </div>
  );
}

export default MiniAnalyticsCard;