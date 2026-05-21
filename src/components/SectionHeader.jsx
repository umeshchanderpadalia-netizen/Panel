function SectionHeader({
  label,
  title,
  description,
  action,
}) {

  return (

    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-7 lg:p-8">

      {/* Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[240px] h-[240px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] left-[-120px] w-[240px] h-[240px] bg-amber-500/5 blur-[120px] rounded-full"></div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/[0.03] to-transparent"></div>

      <div className="relative z-10 flex flex-col xl:flex-row xl:items-end xl:justify-between gap-8">

        {/* Content */}
        <div>

          <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-semibold">

            {label}

          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-5 tracking-tight text-white leading-tight">

            {title}

          </h2>

          <p className="text-zinc-400 mt-5 text-base max-w-3xl leading-relaxed">

            {description}

          </p>

        </div>

        {/* Optional Action */}
        {action && (

          <div className="flex-shrink-0">

            {action}

          </div>

        )}

      </div>

    </div>
  );
}

export default SectionHeader;