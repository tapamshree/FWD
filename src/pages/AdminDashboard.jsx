export default function AdminDashboard() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded shadow">
          🏗 Manage Startups
        </div>

        <div className="p-6 bg-white rounded shadow">
          🧑‍🏫 Manage Mentors
        </div>

        <div className="p-6 bg-white rounded shadow">
          📚 Manage Resources
        </div>
      </div>
    </div>
  )
}
