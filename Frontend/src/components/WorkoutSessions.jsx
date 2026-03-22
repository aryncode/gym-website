import React from 'react'

const sessions = [
  {
    title: 'Strength Training',
    desc: 'Progressive overload programs to build muscle and power.',
    times: ['Mon', 'Wed', 'Fri'],
    color: 'from-emerald-500/20 to-emerald-400/10',
    icon: (
      <svg className="h-6 w-6 text-emerald-400" viewBox="0 0 24 24" fill="none">
        <path d="M3 12h3m12 0h3M7 12a5 5 0 0 0 10 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="9" y="9" width="6" height="6" rx="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'HIIT & Conditioning',
    desc: 'Heart-pounding intervals to burn fat and spike endurance.',
    times: ['Tue', 'Thu', 'Sat'],
    color: 'from-pink-500/20 to-pink-400/10',
    icon: (
      <svg className="h-6 w-6 text-pink-400" viewBox="0 0 24 24" fill="none">
        <path d="M4 12h6l2-7 2 14 2-7h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Mobility & Yoga',
    desc: 'Restore movement quality, reduce pain, and recover faster.',
    times: ['Daily'],
    color: 'from-sky-500/20 to-sky-400/10',
    icon: (
      <svg className="h-6 w-6 text-sky-400" viewBox="0 0 24 24" fill="none">
        <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Personal Coaching',
    desc: '1-on-1 sessions tailored to your goals and schedule.',
    times: ['By appointment'],
    color: 'from-amber-500/20 to-amber-400/10',
    icon: (
      <svg className="h-6 w-6 text-amber-400" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M6 21a6 6 0 1 1 12 0" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
]

const WorkoutSessions = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Sessions</h2>
        <p className="mt-2 text-gray-300">Group classes and coaching designed for results.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {sessions.map((s) => (
          <div
            key={s.title}
            className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${s.color} grid place-items-center`}>
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
            </div>
            <p className="mt-3 text-sm text-gray-300">{s.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.times.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-200">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkoutSessions
