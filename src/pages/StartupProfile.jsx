import React from 'react'
import AtherLogo from '../assets/atherlogo.png' 

export default function StartupProfile() {
  return (
    <section className="min-h-screen py-16 bg-white text-blue-900">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* HEADER */}
        <div className="flex items-center gap-6 mb-10">
          <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center shadow-lg">
            <img 
              src={AtherLogo} 
              alt="Aether Labs Logo" 
              className="w-16 h-16 object-contain"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold">Aether Labs</h1>
            <p className="text-blue-600 mt-1">AI / ML • Seed Stage</p>
          </div>
        </div>

        {/* TAGLINE */}
        <div className="mb-10">
          <p className="text-xl text-blue-500 italic">
            “Neural insights for small businesses”
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* LEFT: ABOUT */}
          <div className="md:col-span-2 bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">About the Startup</h2>
            <p className="text-blue-800 leading-relaxed">
              Aether Labs builds AI-powered analytics tools that help small and
              medium-sized businesses make smarter decisions using their data.
              From sales forecasting to customer behavior insights, Aether Labs
              simplifies machine learning for non-technical teams.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-blue-700">
              Technology Stack
            </h3>
            <ul className="list-disc list-inside text-blue-800 space-y-1">
              <li>Python, TensorFlow, PyTorch</li>
              <li>React, Tailwind CSS</li>
              <li>AWS, Docker</li>
            </ul>
          </div>

          {/* RIGHT: INFO CARD */}
         <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Startup Info</h2>

            <div className="space-y-4 text-blue-800 text-sm">
                <div>
                <span className="text-blue-600">Founded:</span> 2023
                </div>
                <div>
                <span className="text-blue-600">Funding Stage:</span> Seed
                </div>
                <div>
                <span className="text-blue-600">Location:</span> Bengaluru, India
                </div>
                <div>
                <span className="text-blue-600">Hiring:</span> Yes 🚀
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
                <a
                href="https://atherlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    block text-center px-4 py-2 rounded-lg
                    bg-blue-600 text-white font-semibold
                    hover:bg-blue-700 transition
                "
                >
                Visit Website
                </a>

                <a
                href="https://www.atherlabs.co.uk/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    block text-center px-4 py-2 rounded-lg
                    border border-blue-600 text-blue-600 font-semibold
                    hover:bg-blue-100 transition
                "
                >
                Apply
                </a>
            </div>
         </div>


        
          
        </div>

        {/* FOUNDERS */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-xl font-semibold mb-6 text-blue-700">Founding Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold">Ananya Sharma</p>
              <p className="text-sm text-blue-800">
                Co-founder & CEO - AI Researcher, Ex-Startup CTO
              </p>
            </div>

            <div>
              <p className="font-semibold">Rohit Mehta</p>
              <p className="text-sm text-blue-800">
                Co-founder & CTO - ML Engineer, Cloud Architect
              </p>
            </div>
          </div>
        </div>

      </div>
     </section>
  )
}

