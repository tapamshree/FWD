import React from 'react'
import { startups } from '../data/sampleData'
import { useNavigate } from 'react-router-dom'


export default function StartupsGrid() {
  const navigate = useNavigate()

  const featuredStartups = startups.slice(0, 3)

  return (
    <section id="startups" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Startups</h2>

          <button
            onClick={() => navigate('/stpage')}
            className="text-sm text-primary hover:underline"
          >
            View all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredStartups.map(s => (
            <div
              key={s.id}
              className="p-6 rounded-xl border hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-md bg-primary text-white flex items-center justify-center font-bold">
                  {s.logo}
                </div>
                <div>
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-sm text-gray-500">
                    {s.domain} • {s.funding}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-gray-600">{s.tagline}</p>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() =>
                    navigate(
                      `/startup/${s.name.toLowerCase().replace(/\s+/g, '-')}`
                    )
                  }
                  className="px-3 py-2 rounded bg-primary text-white text-sm"
                >
                  View Profile
                </button>

                <button className="px-3 py-2 rounded border text-sm">
                  Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
