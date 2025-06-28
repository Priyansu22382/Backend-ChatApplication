**Backend Chat Application**
This repository contains the backend for a real-time chat application built with Node.js, Express, MongoDB, and JWT-based authentication.

Overview

. Server: Node.js + Express

. Database: MongoDB (via Mongoose)

. Auth: JWT tokens + httpOnly cookies

Features:

. User registration, login, logout

. Profile updating (avatar upload via Cloudinary)

. Protected routes with middleware

. Real-time chat logic (message storage, retrieval)

backend/
├─ src/
│  ├─ controllers/         # Request handlers for auth, user, message logic
│  ├─ middlewares/         # JWT authentication middleware
│  ├─ models/              # Mongoose schemas: User, Message
│  ├─ routes/              # API endpoints grouped by feature
│  ├─ lib/
│  │    ├─ db.js           # MongoDB connection
│  │    ├─ cloudinary.js   # Cloudinary setup
│  │    └─ utils.js        # Token generation
│  └─ index.js             # Express server setup
├─ .env                    # Environment variables (Mongo URL, JWT secret, Cloudinary credentials)
├─ package.json            # Project dependencies & scripts
└─ README.md               # This file


** Installation **

1. git clone https://github.com/Priyansu22382/Backend-ChatApplication.git
cd Backend-ChatApplication

2. npm install

3. .env File:
   PORT=5001
   MONGODB_URI=<your_mongo_uri>
   JWT_SECRET=<your_jwt_secret>
   CLOUDINARY_CLOUD_NAME=<cloud_name>
   CLOUDINARY_API_KEY=<api_key>
   CLOUDINARY_API_SECRET=<api_secret>

4. Start the server : npm run dev



** API Endpoints **

Auth Routes (/api/auth)
POST /signup – Register a new user

POST /login – Log in existing user

POST /logout – Clear auth cookie

PUT /update-profile (protected) – Upload avatar

GET /check (protected) – Verify authentication status

**Message Routes** (/api/message)
GET /users (protected) – List other users for chat sidebar

GET /:id (protected) – Get chat messages with a user

POST /send/:id (protected) – Send a message (text/image)

**How It Works**


Signup/Login

Validates input

Hashes password (bcrypt)

Generates a JWT token (expires in 7 days)

Saves token in httpOnly cookie

Protected Routes

protectRoute middleware checks cookie, verifies JWT

Attaches req.user and continues

Profile Upload

Receives Base64 image string

Uploads to Cloudinary

Stores secure URL in user document

Messaging

Save and fetch conversation history between user pairs

