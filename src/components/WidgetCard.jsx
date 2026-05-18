function WidgetCard({
  title,
  value,
  subtitle,
  icon,
}) {

  const Icon = icon;

  return (
    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[30px] p-6 backdrop-blur-xl hover:border-yellow-500/20 hover:-translate-y-1 transition-all duration-300">

      {/* Glow */}
      <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

      <div className="relative z-10">

        {/* Top */}
        <div className="flex items-center justify-between">

          <p className="text-sm text-zinc-400 tracking-wide">
            {title}
          </p>

          <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center shadow-[0_0_25px_rgba(250,204,21,0.15)]">

            <Icon size={22} />

          </div>

        </div>

        {/* Value */}
        <h2 className="text-4xl font-bold mt-7 tracking-tight text-white">
          {value}
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-zinc-500 mt-4 leading-relaxed">
          {subtitle}
        </p>

      </div>

    </div>
  );
}

export default WidgetCard;