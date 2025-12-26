import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) navigate('/login');
    else setUser(loggedInUser);
  }, [navigate]);

  if (!user) return <div>Loading...</div>;

  const tasksByRole = {
    mentor: ['Review intern applications', 'Provide guidance sessions'],
    intern: ['Complete assigned projects', 'Submit weekly reports'],
    founder: ['Track fundraising', 'Manage team', 'Plan roadmap'],
    investor: ['Check startups', 'Review portfolios', 'Schedule meetings']
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-2">Welcome, {user.name}!</h1>
        <h2 className="text-xl mb-4">Role: {user.role}</h2>

        <h3 className="font-semibold mb-2">Tasks:</h3>
        <ul className="list-disc list-inside">
          {tasksByRole[user.role].map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>

        <button
          onClick={() => {
            localStorage.removeItem('loggedInUser');
            navigate('/login');
          }}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
