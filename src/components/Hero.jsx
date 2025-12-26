import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <header className="bg-transparent text-white py-20 relative">

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-7/12">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Connecting Founders, Mentors, Students & Investors
          </h1>

          <p className="mt-6 text-lg max-w-xl">
            Join StartPort- the startup hub that empowers your startup journey.
            Showcase projects, find internships, get mentorship and discover
            funding opportunities in one place.
          </p>

          <div className="mt-8 flex gap-4">
            {/* JOIN NOW → LOGIN */}
            <button
              onClick={() => navigate('/signup')}
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold shadow hover:scale-[1.02] transition"
            >
              Join Now
            </button>

            {/* HOW IT WORKS */}
            <button
              onClick={() => navigate('/how')}
              className="border border-white/80 px-6 py-3 rounded-lg hover:bg-white/10 transition"
            >
              How it works
            </button>
          </div>

          <div className="mt-6 text-sm opacity-90">
            Free for students • Mentor verified profiles • Scalable
          </div>
        </div>
      </div>
    </header>
  )
}

