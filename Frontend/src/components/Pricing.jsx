import React from 'react'

const tiers = [
  {
    name: 'Starter',
    price: '₹999/mo',
    description: 'Access to gym floor and basic classes.',
    features: ['Gym floor access', '2 group sessions/week', 'Locker access'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₹1,999/mo',
    description: 'Unlimited classes and full facility access.',
    features: ['Unlimited classes', 'Full facility access', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Elite',
    price: '₹3,499/mo',
    description: 'Personal coaching and advanced recovery.',
    features: ['All Pro features', '4 PT sessions/month', 'Recovery room access'],
    highlight: false,
  },
]

const Pricing = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Pricing</h2>
        <p className="mt-2 text-gray-300">Choose a plan that matches your ambition.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border border-white/10 p-6 bg-white/5 ${t.highlight ? 'ring-2 ring-emerald-500' : ''}`}
          >
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <p className="mt-1 text-gray-300">{t.description}</p>
            <p className="mt-4 text-3xl font-extrabold">{t.price}</p>
            <ul className="mt-6 space-y-2">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-200">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-emerald-500/20 text-emerald-400">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                t.highlight ? 'bg-emerald-500 text-white hover:bg-emerald-400' : 'border border-white/20 text-white hover:bg-white/10'
              }`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
