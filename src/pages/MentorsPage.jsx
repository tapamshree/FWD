import React from 'react';
import { mentors } from '../data/sampledata'; // make sure your variable is "mentors"
import bg from '../assets/bg.jpg';

export default function MentorsPage() {
  return (
    <section className="py-20 min-h-screen relative text-white">

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

      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 
            bg-gradient-to-r from-cyan-400 to-blue-500 
            bg-clip-text text-transparent">
            Connect with Expert Mentors
          </h1>

          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Learn from industry leaders in AI, Web3, Business, and more.
            Gain insights, guidance, and mentorship from professionals shaping the future.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {mentors.map((m) => (
            <div
              key={m.id}
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
                  {m.initials || m.name.charAt(0)}
                </div>

                <div>
                  <div className="font-semibold text-lg text-white">
                    {m.name}
                  </div>
                  <div className="text-sm text-blue-200">
                    {m.expertise} • {m.company}
                  </div>
                  {/* ID Display */}
                  <div className="text-xs text-gray-300 mt-1">
                    ID: {m.id}
                  </div>
                </div>
              </div>

              {/* Role Display */}
              <div className="mb-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold 
                  bg-blue-500/20 text-blue-200 border border-blue-500/30">
                  {m.role || 'Mentor'}
                </span>
              </div>

              <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                {m.bio || 'Experienced mentor with expertise in guiding startups and professionals.'}
              </p>

              

              <a
                href={m.profileLink}
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
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

