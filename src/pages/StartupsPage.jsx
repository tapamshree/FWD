import React from 'react';
import { startups } from '../data/sampleData';

export default function StartupsPage() {
  return (
    <section className="py-20 min-h-screen relative text-white">
      <div className="container mx-auto px-6">

        {/* Intro / Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 
                         bg-gradient-to-r from-cyan-400 to-blue-500 
                         bg-clip-text text-transparent">
            Discover & Connect with Future-Ready Startups
          </h1>

          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Explore cutting-edge startups in AI, EdTech, Sustainability and more.
            Collaborate, learn, and grow with innovators shaping tomorrow.
          </p>
        </div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {startups.map((s) => (
            <div
              key={s.id}
              className="
                bg-white/10
                backdrop-blur-xl
                p-6
                rounded-2xl
                shadow-[0_0_30px_rgba(56,189,248,0.15)]
                border border-white/10
                hover:shadow-[0_0_45px_rgba(56,189,248,0.35)]
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <div className="flex items-center gap-4 mb-4">
                <div className="
                  w-14 h-14 rounded-lg 
                  bg-gradient-to-br from-cyan-400 to-blue-600
                  text-black font-bold
                  flex items-center justify-center text-lg
                  shadow-lg
                ">
                  {s.logo}
                </div>

                <div>
                  <div className="font-semibold text-lg text-white">
                    {s.name}
                  </div>
                  <div className="text-sm text-blue-200">
                    {s.domain} • {s.funding}
                  </div>
                </div>
              </div>

              <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                {s.tagline}
              </p>

              <div className="text-xs text-blue-300 mb-5 uppercase tracking-wide">
                Funding Stage: {s.funding}
              </div>

              <a
                href="https://atherlabs.com/#section=home"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block w-full text-center
                  px-4 py-2 rounded-lg
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  text-black font-semibold text-sm
                  hover:from-cyan-300 hover:to-blue-400
                  transition
                "
              >
                Get in touch
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

