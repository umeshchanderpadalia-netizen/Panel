function WidgetCard({
  title,
  value,
  subtitle,
  icon,
}) {

  const Icon = icon;

  return (

    <div className="group relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-[34px] p-6 backdrop-blur-2xl hover:border-yellow-500/20 hover:-translate-y-1 transition-all duration-500">

      {/* Glow */}
      <div className="absolute top-[-80px] right-[-80px] w-[200px] h-[200px] bg-yellow-400/10 blur-[110px] rounded-full"></div>

      {/* Hover Gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-yellow-400/10 via-transparent to-amber-500/10"></div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

      <div className="relative z-10">

        {/* Top */}
        <div className="flex items-start justify-between">

          <div>

            <p className="text-sm uppercase tracking-[0.12em] text-zinc-500">

              {title}

            </p>

            <h2 className="text-5xl font-bold mt-6 tracking-tight text-white">

              {value}

            </h2>

          </div>

          {/* Icon */}
          <div className="w-14 h-14 rounded-3xl bg-yellow-500/10 border border-yellow-500/10 text-yellow-400 flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.14)] group-hover:scale-110 transition-all duration-500">

            <Icon size={24} />

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 flex items-center justify-between gap-4">

          <p className="text-sm text-zinc-500 leading-relaxed max-w-[220px]">

            {subtitle}

          </p>

          <div className="flex items-center gap-2">

            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>

            <span className="text-xs uppercase tracking-[0.2em] text-emerald-400">

              Live

            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default WidgetCard;