import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { BeatLoader } from 'react-spinners'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { data } = await axios.post(
        'http://localhost:4000/send/mail',
        { name, email, message },
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        }
      )
      toast.success(data.message)
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-2 text-gray-300">Questions or ready to join? Reach out.</p>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="mb-1 block text-sm text-gray-300">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Your full name"
            required
          />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-1 block text-sm text-gray-300">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm text-gray-300">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-32 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Tell us about your goals"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center rounded-md bg-emerald-500 px-6 py-2 text-sm font-medium text-white hover:bg-emerald-400 disabled:opacity-50"
          >
            {loading ? <BeatLoader color="white" size={8} /> : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
