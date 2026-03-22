import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-zinc-900 to-black" />
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute top-20 -right-40 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
            Build Strength. Own Your Body.
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Elite coaching, science-backed programming, and community-driven motivation. Train smarter, recover faster, and become your strongest self.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-base font-medium text-white hover:bg-emerald-400 transition-colors">
              Start Your Journey
            </a>
            <a href="#sessions" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors">
              Explore Sessions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
