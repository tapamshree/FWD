import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAdminLogin = () => {
    // TEMP hardcoded admin (replace with backend later)
    if (email === 'admin@startport.com' && password === 'admin123') {
      login({
        name: 'Admin',
        role: 'admin'
      })
      navigate('/admin')
    } else {
      alert('Invalid admin credentials')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>

        <input
          className="w-full mb-4 p-2 border rounded"
          placeholder="Admin Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-6 p-2 border rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={handleAdminLogin}
          className="w-full bg-black text-white py-2 rounded"
        >
          Login as Admin
        </button>
      </div>
    </div>
  )
}
