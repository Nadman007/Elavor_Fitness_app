# Elevar — Fitness Tracker

A full-stack fitness tracking app with user auth, workout logging, and a clean dark UI.

## Stack
- **Frontend**: Vanilla HTML/CSS/JS (single page)
- **Backend**: Node.js + Express
- **Database**: MongoDB (local)
- **Auth**: JWT

## Project Structure
```
elevar/
├── backend/
│   ├── app.js              ← Main server
│   ├── .env                ← Environment variables
│   ├── package.json
│   ├── middleware/
│   │   └── auth.js         ← JWT middleware
│   ├── models/
│   │   ├── User.js
│   │   └── Workout.js
│   └── routes/
│       ├── auth.js         ← /auth/register, /auth/login, /auth/me
│       └── workout.js      ← /workouts/log, /workouts, /workouts/:id
└── frontend/
    └── index.html          ← Single page app
```

## How to Run

**1. Make sure MongoDB is running:**
```bash
brew services start mongodb-community
```

**2. Install dependencies & start server:**
```bash
cd backend
npm install
npm start
```

**3. Open the app:**
```
http://localhost:5001
```

That's it! The frontend is served directly by Express.

## API Endpoints
- `POST /auth/register` — Create account
- `POST /auth/login` — Login, returns JWT
- `GET  /auth/me` — Get current user (auth required)
- `POST /workouts/log` — Log a workout (auth required)
- `GET  /workouts` — Get all workouts (auth required)
- `DELETE /workouts/:id` — Delete a workout (auth required)
