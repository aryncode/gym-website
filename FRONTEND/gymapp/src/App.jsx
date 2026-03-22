import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkoutSessions from './components/WorkoutSessions'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import BMICalculator from './components/BMICalculator'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <Hero />
          <section id="sessions" className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
            <WorkoutSessions />
          </section>
          <section id="gallery" className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
            <Gallery />
          </section>
          <section id="pricing" className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
            <Pricing />
          </section>
          <section id="contact" className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
            <Contact />
          </section>
          <section className="mx-auto max-w-7xl px-6 py-16 border-t border-white/10">
            <BMICalculator />
          </section>
        </main>
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <Footer />
          </div>
        </footer>
        <ToastContainer theme="dark" position="top-center" />
      </div>
    </Router>
  )
}

export default App
