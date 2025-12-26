import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const navigate = useNavigate()
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <nav className="w-full sticky top-0 z-40
      bg-black/40 backdrop-blur-xl
      border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT BRAND */}
        <div className="flex flex-col leading-tight">
          <Link
            to="/"
            className="
              font-bold px-4 py-2 rounded-lg w-fit
              bg-gradient-to-r from-cyan-400 to-blue-500
              text-black shadow-lg
              hover:shadow-[0_0_20px_rgba(56,189,248,0.6)]
              transition
            "
          >
            StartPort
          </Link>

          <span className="text-xs text-blue-200 mt-1 hidden sm:block tracking-wide">
            Build • Hire • Mentor • Invest
          </span>
        </div>

        {/* RIGHT NAV */}
        <div className="hidden md:flex items-center gap-6 text-sm text-blue-100">

          <button
            onClick={() => navigate('/stpage')}
            className="hover:text-cyan-400 transition"
          >
            Startups
          </button>

          <button
            onClick={() => navigate('/jobs')}
            className="hover:text-cyan-400 transition"
          >
            Jobs
          </button>

          <button
            onClick={() => navigate('/mentors')}
            className="hover:text-cyan-400 transition"
          >
            Mentors
          </button>

          <button
            onClick={() => navigate('/resources')}
            className="hover:text-cyan-400 transition"
          >
            Resources
          </button>

          {!isAuthenticated ? (
            <>
              <button
                onClick={() => navigate('/login')}
                className="
                  px-4 py-2 rounded-md
                  border border-white/20
                  hover:bg-white/10
                  transition
                "
              >
                Login
              </button>

              <button
                onClick={() => navigate('/signup')}
                className="
                  px-4 py-2 rounded-md
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  text-black font-semibold
                  hover:opacity-90
                  transition
                "
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              {/* USER INFO */}
              <div className="text-blue-100 font-medium">
                👋 {user.name}
                <span className="ml-1 text-xs text-blue-300">
                  ({user.role})
                </span>
              </div>

              <button
                onClick={() => navigate('/dashboard')}
                className="
                  px-4 py-2 rounded-md
                  border border-white/20
                  hover:bg-white/10
                  transition
                "
              >
                Dashboard
              </button>

              <button
                onClick={() => {
                  logout()
                  navigate('/')
                }}
                className="
                  px-4 py-2 rounded-md
                  border border-red-400/40
                  text-red-400
                  hover:bg-red-500/10
                  transition
                "
              >
                Logout
              </button>
            </>
          )}
        </div>

      </div>
    </nav>
  )
}

