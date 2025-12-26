import React from 'react'
import { useNavigate } from 'react-router-dom'

// Reusable Step component
const Step = ({ icon, title, desc }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm cursor-pointer hover:shadow-md transition">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-md bg-primary text-white flex items-center justify-center font-bold">{icon}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-600">{desc}</div>
      </div>
    </div>
  </div>
)

export default function HowItWorksPage() {
  const navigate = useNavigate()

  // Role explanations
  const roles = [
    {
      title: 'Founder',
      desc: 'Founders can create and showcase their startup projects, discover potential interns, connect with mentors, and pitch to investors. Their dashboard shows all project applications, mentorship requests, and investor connections in one place.'
    },
    {
      title: 'Investor',
      desc: 'Investors can browse startup projects, track progress, and interact with founders. They can also mentor students or interns and discover emerging talent. Their dashboard focuses on investment opportunities and mentoring requests.'
    },
    {
      title: 'Intern',
      desc: 'Interns can explore startups and apply to projects matching their skills. They can connect with founders and mentors, track applications, and manage their tasks. Their dashboard highlights ongoing projects and mentorship opportunities.'
    },
    {
      title: 'Mentor',
      desc: 'Mentors guide founders and interns by providing feedback, mentorship sessions, and expert advice. Their dashboard shows mentee requests, scheduled sessions, and projects where their expertise is needed.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">How It Works</h1>

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Step icon="1" title="Create Profile" desc="Sign up as Student, Mentor, or Founder. Add skills, projects and your interests." />
          <Step icon="2" title="Discover & Connect" desc="Browse startups, jobs and mentors. Message or apply directly." />
          <Step icon="3" title="Grow Together" desc="Book mentorships, join projects, and pitch to investors." />
        </div>

        {/* Intro paragraph */}
        <p className="text-gray-700 mb-6">
          StartPort connects Founders, Investors, Interns, and Mentors to create a collaborative ecosystem.
          Depending on your role, your dashboard is tailored to maximize interaction with other types:
          Founders interact with Investors, Mentors, and Interns; Investors can mentor and fund projects;
          Interns can join projects and get guidance; Mentors help guide both Founders and Interns.
        </p>

        {/* Role-based cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {roles.map((role, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h2 className="text-xl font-semibold mb-2">{role.title}</h2>
              <p className="text-gray-600">{role.desc}</p>
            </div>
          ))}
        </div>

        {/* Get Started button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/login')}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}


