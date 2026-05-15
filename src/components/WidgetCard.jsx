function WidgetCard({
  title,
  value,
  subtitle,
  icon,
}) {

  const Icon = icon;

  return (
    <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[30px] p-6 backdrop-blur-xl hover:border-white/20 hover:-translate-y-1 transition-all duration-300">

      {/* Glow */}
      <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="relative z-10">

        {/* Top */}
        <div className="flex items-center justify-between">

          <p className="text-sm text-slate-400 tracking-wide">
            {title}
          </p>

          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center">

            <Icon size={22} />

          </div>

        </div>

        {/* Value */}
        <h2 className="text-4xl font-bold mt-7 tracking-tight text-white">
          {value}
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-slate-500 mt-4">
          {subtitle}
        </p>

      </div>

    </div>
  );
}

export default WidgetCard;