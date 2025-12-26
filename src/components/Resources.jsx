import React from 'react'
import { resources } from '../data/sampleData'

export default function Resources() {
  return (
    <section id="resources" className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Resources</h2>
          <a className="text-sm text-primary" href="#resources">All resources</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map(r => (
            <div key={r.id} className="p-6 rounded-lg border bg-white">
              <div className="font-semibold">{r.title}</div>
              <div className="text-sm text-gray-500">{r.type}</div>
              <p className="mt-3 text-gray-600 text-sm">{r.excerpt}</p>

              <div className="mt-4">
                <a
                  href="https://www.startupindia.gov.in/content/dam/invest-india/up/notifications/Basics%20Of%20Entrepreneurship%20Handbook.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 rounded border hover:bg-gray-100 transition"
                >
                  Open
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
