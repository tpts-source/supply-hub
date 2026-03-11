const InfoCard = ({ title, description }) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-600">{description}</p>
    </article>
  )
}

export default InfoCard