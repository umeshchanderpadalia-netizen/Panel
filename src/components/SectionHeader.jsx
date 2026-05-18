function SectionHeader({
  label,
  title,
  description,
}) {

  return (
    <div>

      <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 font-medium">
        {label}
      </p>

      <h2 className="text-3xl lg:text-4xl font-bold mt-3 tracking-tight text-white">
        {title}
      </h2>

      <p className="text-zinc-400 mt-3 text-base max-w-2xl leading-relaxed">
        {description}
      </p>

    </div>
  );
}

export default SectionHeader;