function SectionHeader({
  label,
  title,
  description,
}) {

  return (
    <div>

      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
        {label}
      </p>

      <h2 className="text-3xl lg:text-4xl font-bold mt-3 tracking-tight text-white">
        {title}
      </h2>

      <p className="text-slate-400 mt-3 text-base max-w-2xl">
        {description}
      </p>

    </div>
  );
}

export default SectionHeader;