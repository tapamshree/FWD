import React from "react";
import { jobs } from "../data/sampledata";
import bg from "../assets/bg.jpg";

export default function JobsPage() {
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
            Find Your Dream Job
          </h1>

          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Discover exciting opportunities in tech, Web3, AI, and startups.
            Join innovative teams and shape the future of technology.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobs.map((job) => (
            <div
              key={job.id}
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
                flex flex-col
              "
            >

              {/* Job Title & Company */}
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="
                    w-12 h-12 rounded-lg 
                    bg-gradient-to-br from-cyan-400 to-blue-600
                    text-black font-bold
                    flex items-center justify-center text-lg
                    shadow-lg
                  ">
                    {job.company.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-white">
                      {job.title}
                    </div>
                    <div className="text-sm text-blue-200">
                      {job.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Details */}
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-sm text-blue-100">{job.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-sm text-blue-100">{job.type}</span>
                </div>

                {job.salary && (
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-sm text-blue-100">{job.salary}</span>
                  </div>
                )}

                {job.experience && (
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-sm text-blue-100">Exp: {job.experience}</span>
                  </div>
                )}
              </div>

              {/* Apply Button */}
              <a
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block w-full text-center
                  px-4 py-2 rounded-lg
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  text-black font-semibold text-sm
                  hover:from-cyan-300 hover:to-blue-400
                  transition
                  mt-auto
                "
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
