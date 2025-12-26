# StartPort

StartPort is a full-stack, role-based startup ecosystem platform that connects interns, founders, mentors, investors, and admins. It is designed as a scalable, real-world product with proper authentication, role-based dashboards, and persistent interactions.

---

##  Project Overview

- **Interns** → Apply to startups, track applications, chat with mentors  
- **Founders** → List startups, review applicants, manage teams  
- **Mentors** → Offer mentorship, accept bookings, chat with users  
- **Investors** → Explore startups, track interest, view pitch decks  
- **Admins** → Manage users, startups, mentors, and resources  

Each user logs in and is shown a **dashboard tailored to their role**.

---

## Architecture

- **Frontend**: React (Vite)  
- **Backend**: Node.js + Express  
- **Database**: MongoDB (preferred) or Firestore  
- **Authentication**: JWT, password hashing (bcrypt)  
- **Permissions**: Backend-driven; frontend never decides access  
- **State Management**: Global context for auth and protected routes

---

## Authentication & Authorization

Users sign up with:

- `name`, `email`, `password`, `phone number`, `role` (`intern | founder | mentor | investor`)  
- Admins are role-based users (`role: "admin"`)

Login flow:

1. Backend validates credentials  
2. Issues JWT containing `userId` and `role`  
3. Frontend stores token securely  
4. Protected routes verify token on backend

---

##  Role-Based Dashboards

- **Intern**: applied startups, saved jobs, chat history  
- **Founder**: owned startups, applicants, funding info  
- **Mentor**: booked sessions, chat messages  
- **Investor**: followed startups, pitch decks  
- **Admin**: user management, startup moderation, resource control  

All dashboards fetch **role-specific data** from backend APIs and conditionally render components on the frontend.

🧭 Core Behavior

All user interactions (applications, messages, bookings) are persisted in the database

User dashboards always reflect past activity

Admins modify platform data via protected admin routes

Chat and notifications are real-time or near-real-time (future scaling)

🧪 Development Phases

Backend auth & JWT

Role-based dashboard APIs

Persistent user actions

Chat & notifications


## 🗄 Database Design (Conceptual)

### Users
```json
{
  "_id": "...",
  "name": "...",
  "email": "...",
  "passwordHash": "...",
  "role": "...",
  "phone": "...",
  "createdAt": "...",
  "lastLogin": "..."
}
Startups
{
  "_id": "...",
  "founderId": "...",
  "name": "...",
  "domain": "...",
  "funding": "...",
  "description": "..."
}

Applications
{
  "_id": "...",
  "internId": "...",
  "startupId": "...",
  "status": "...",
  "createdAt": "..."
}

Messages / Actions
{
  "fromUserId": "...",
  "toUserId": "...",
  "content": "...",
  "timestamp": "..."
}


Admin controls

Scaling & security hardening


