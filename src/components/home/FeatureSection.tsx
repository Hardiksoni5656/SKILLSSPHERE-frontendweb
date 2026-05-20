export default function FeatureSection() {

  const features = [
    "AI Proposal Generator",
    "Realtime Chat",
    "Secure Payments",
    "Smart Freelancer Matching",
    "Project Analytics",
    "Cross Platform Access"
  ]

  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose SKILLSSPHERE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900 transition"
            >
              <h3 className="text-2xl font-semibold">
                {feature}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}