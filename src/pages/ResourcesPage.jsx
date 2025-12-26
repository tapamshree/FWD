import React from "react";
import { resources } from "../data/sampledata"; // variable "resources"

export default function ResourcesPage() {
  return (
    <section className="min-h-screen py-16 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-3xl font-bold mb-10 text-center">Resources</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{res.title}</h2>
              <p className="text-gray-700 mb-4">{res.description}</p>

              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Access Resource
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
