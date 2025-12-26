import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div>
            <div className="text-2xl font-bold">StartPort</div>
            <div className="text-sm text-gray-600 mt-2">A hub for students, founders, and mentors to build the future.</div>
          </div>
          <div className="flex gap-8">
            <div>
              <div className="font-semibold">Platform</div>
              <div className="text-sm text-gray-600 mt-2">Startups • Jobs • Mentorship</div>
            </div>
            <div>
              <div className="font-semibold">Company</div>
              <div className="text-sm text-gray-600 mt-2">About • Contact • Terms</div>
            </div>
            <div>
              <div className="font-semibold">founders</div>
              <div className="text-sm text-gray-600 mt-2">1WN24CS266 - Shravani
                <br />
                1WN24CS267 - Shravya<br />
                1WN24CS268 - Shravya AS<br />
                 1WN24CS269 - Shreeram<br />
                
                
                 
              </div>  
                
            

            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500"> {new Date().getFullYear()} StartPort — Built By students, For students, From students.</div>
      </div>
    </footer>
  )
}
