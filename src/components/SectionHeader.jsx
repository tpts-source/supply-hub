const SectionHeader = ({ eyebrow, title, description, centered = false }) => {
  const alignment = centered ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl ${alignment}`.trim()}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base text-slate-600">{description}</p>}
    </div>
  )
}

export default SectionHeader