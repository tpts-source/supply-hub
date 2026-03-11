import InfoCard from '../components/InfoCard'
import SectionHeader from '../components/SectionHeader'

const features = [
  {
    title: 'Fast Supply Delivery',
    description:
      'Keep your operations moving with rapid order processing and dependable shipping timelines.',
  },
  {
    title: 'Reliable Inventory',
    description:
      'Access consistent stock levels and quality-controlled products tailored to your supply needs.',
  },
  {
    title: 'Trusted Business Partners',
    description:
      'Build long-term success through sourcing relationships backed by service and transparency.',
  },
]

const categories = ['Industrial', 'Packaging', 'Warehouse', 'Shipping']

const Home = () => {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Supply Hub</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Smarter Supply Solutions for Growing Businesses
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            Discover dependable products, streamlined logistics, and scalable support for every stage of your operations.
          </p>
          <button
            type="button"
            className="mt-8 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
          >
            Browse Products
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Built for Reliable Supply Operations"
          description="We help procurement teams and business owners source with confidence through speed, consistency, and trusted service."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <InfoCard key={feature.title} title={feature.title} description={feature.description} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeader
            eyebrow="Categories"
            title="Explore Supply Categories"
            description="Quickly access major supply segments tailored for daily business operations."
            centered
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center font-semibold text-slate-700 transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:items-center md:py-20">
        <SectionHeader
          eyebrow="About"
          title="Your Long-Term Partner in Supply Excellence"
          description="We are building a modern supply platform focused on reliability, value, and operational efficiency. As we scale, we will connect ordering, inventory visibility, and account tools to deliver a seamless procurement experience."
        />
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">Ready to streamline your sourcing?</h3>
          <p className="mt-4 text-slate-600">
            Start with our curated product catalog and discover how Supply Hub can support your business growth.
          </p>
          <button
            type="button"
            className="mt-6 inline-flex items-center rounded-lg border border-blue-600 px-5 py-2.5 font-semibold text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white"
          >
            Browse Products
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home