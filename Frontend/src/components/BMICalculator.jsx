import React, { useMemo, useState } from 'react'

const classify = (bmi) => {
  if (!isFinite(bmi) || bmi <= 0) return ''
  if (bmi < 18.5) return 'Underweight'
  if (bmi < 25) return 'Normal'
  if (bmi < 30) return 'Overweight'
  return 'Obese'
}

const BMICalculator = () => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  const bmi = useMemo(() => {
    const h = parseFloat(height) / 100
    const w = parseFloat(weight)
    if (!h || !w) return 0
    return +(w / (h * h)).toFixed(1)
  }, [height, weight])

  const label = classify(bmi)

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">BMI Calculator</h2>
        <p className="mt-1 text-gray-300">Know your body mass index quickly.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="sm:col-span-1">
          <label className="mb-1 block text-sm text-gray-300">Height (cm)</label>
          <input
            type="number"
            min="0"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="e.g. 175"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-1 block text-sm text-gray-300">Weight (kg)</label>
          <input
            type="number"
            min="0"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="e.g. 70"
          />
        </div>
        <div className="sm:col-span-1">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 h-full">
            <p className="text-sm text-gray-300">Your BMI</p>
            <p className="mt-1 text-3xl font-extrabold">{bmi ? bmi : '--'}</p>
            <p className="mt-2 text-sm">{label}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BMICalculator
