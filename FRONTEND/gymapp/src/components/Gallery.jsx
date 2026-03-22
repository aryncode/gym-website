import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200&auto=format&fit=crop',
  'https://imgs.search.brave.com/-SVnQWqnkqyTIFilC627sALM_JzgmElm_y4_Pf0YM8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/OTg3LzA4My9zbWFs/bC9haS1nZW5lcmF0/ZWQtc3RpbGwtbGlm/ZS1vZi1pbnRlcmlv/ci1tb2Rlcm4tZml0/bmVzcy1jZW50ZXIt/Z3ltLXdpdGgtYS13/b3Jrb3V0LXJvb20t/ZW1wdHktc3BhY2Ut/Zm9yLXRleHQtYWkt/Z2VuZXJhdGVkLXBo/b3RvLmpwZw',
  'https://imgs.search.brave.com/e4Q9l2TiBBZ3uFOyW1ZyboDzHTak-Q2wW9Cdh-I7tg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9pbnRl/cmlvci1maXRuZXNz/LWhhbGwtZ3ltLWlu/dGVyaW9yLWZpdG5l/c3MtaGFsbC1neW0t/ZXF1aXBtZW50LW1h/Y2hpbmVzLWVtcHR5/LW1vZGVybi1neW0t/cm9vbS1maXRuZXNz/LWNlbnRlci0xMTMw/MDM4NzcuanBn',
]

const Gallery = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Gallery</h2>
        <p className="mt-2 text-gray-300">A look inside our training atmosphere.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <img
              src={src}
              alt=""
              className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
