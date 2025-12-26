import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StartupsGrid from './components/StartupsGrid'
import JobsBoard from './components/JobsBoard'
import Mentors from './components/Mentors'
import Resources from './components/Resources'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import HowItWorksPage from './pages/HowItWorksPage'
import StartupsPage from './pages/StartupsPage'
import StartupProfile from './pages/StartupProfile'
import JobsPage from './pages/JobsPage'
import MentorsPage from './pages/MentorsPage'
import ResourcesPage from './pages/ResourcesPage'


import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import AdminRoute from './components/AdminRoute'

import bg from './assets/bg.jpg'

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col">

      {/* BACKGROUND IMAGE */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/40 -z-10" />

      {/* APP CONTENT */}
      <Navbar />

      <main className="flex-grow">

        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Hero />

                {/* content wrapper */}
                <div className="bg-white/90 backdrop-blur-md rounded-t-3xl shadow mt-10 pt-10 pb-16">
                  <div className="container mx-auto px-6 space-y-16">
                    <StartupsGrid />
                    <JobsBoard />
                    <Mentors />
                    <Resources />
                  </div>
                </div>
              </>
            }
          />

          {/* OTHER PAGES */}
          <Route path="/how" element={<HowItWorksPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/stpage" element={<StartupsPage />} />
          <Route path="/startup/aether-labs" element={<StartupProfile />} />
          <Route path="*" element={<Login />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />


          {/* PROTECTED DASHBOARD */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/admin-login" element={<AdminLogin />} />

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

        </Routes>
      </main>

      <Footer />
    </div>
  )
}


