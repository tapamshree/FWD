import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jobs } from '../data/sampleData';

export default function JobsBoard() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const filtered = jobs.filter(j =>
    (j.title + j.company + j.type + j.location)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  const featuredjobs = jobs.slice(0, 3);

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <section id="jobs" className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold">Jobs & Internships</h2>
          <div className="flex items-center gap-3">
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search jobs, companies or location"
              className="px-3 py-2 rounded border w-full md:w-72"
            />
            <button
              onClick={goToSignup}
              className="px-4 py-2 bg-primary text-white rounded"
            >
              Post a Job
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredjobs.map(job => (
            <div key={job.id} className="p-5 rounded-lg border bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{job.title}</div>
                  <div className="text-sm text-gray-500">
                    {job.company} • {job.type}
                  </div>
                </div>
                <div className="text-sm text-gray-400">{job.location}</div>
              </div>
              <p className="mt-3 text-gray-600 text-sm">{job.desc}</p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={goToSignup}
                  className="px-3 py-2 rounded bg-accent text-white text-sm"
                >
                  Apply
                </button>
                <button
                  onClick={goToSignup}
                  className="px-3 py-2 rounded border text-sm"
                >
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

