import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mentors } from '../data/sampleData';

export default function Mentors() {
  const navigate = useNavigate();
  const goToSignup = () => navigate('/signup');

  const featuredmentors = mentors.slice(0, 3);

  return (
    <section id="mentors" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Mentorship Zone</h2>
          <button
            onClick={goToSignup}
            className="text-sm text-primary underline"
          >
            Browse mentors
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredmentors.map(m => (
            <div key={m.id} className="p-6 rounded-lg border bg-white">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-lg">
                  {m.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-sm text-gray-500">{m.role}</div>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-600">{m.bio}</p>

              <div className="mt-4">
                <button
                  onClick={goToSignup}
                  className="px-3 py-2 rounded bg-primary text-white"
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


