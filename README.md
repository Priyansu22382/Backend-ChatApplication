# 💬 Backend Chat Application

This repository contains the **backend for a real-time chat application** built using **Node.js**, **Express**, **MongoDB**, and **JWT-based authentication**. It offers secure login, user management, real-time messaging support, and avatar uploads.

📁 **Repository**: [Backend-ChatApplication](https://github.com/Priyansu22382/Backend-ChatApplication)

---

## 🚀 Tech Stack

- ⚙️ **Node.js + Express** – Server and routing
- 🛢 **MongoDB + Mongoose** – NoSQL database with schema validation
- 🔐 **JWT + httpOnly Cookies** – Secure authentication
- ☁️ **Cloudinary** – For image/avatar uploads
- 🧪 **Middleware** – For protecting routes and token verification

---

## ✨ Features

- 👤 User registration, login, and logout
- 🧾 JWT-based authentication via secure cookies
- 🖼️ Profile update with avatar image (Cloudinary)
- 🔐 Protected routes using custom middleware
- 💬 Real-time messaging logic (text/image)
- 📦 Scalable file structure

---

## 🗂️ Folder Structure

backend/
│
├── src/
│   ├── controllers/         # Request handlers (auth, user, message)
│   ├── middlewares/         # JWT authentication middleware
│   ├── models/              # Mongoose schemas (User, Message)
│   ├── routes/              # API endpoints grouped by feature
│   ├── lib/
│   │   ├── db.js            # MongoDB connection setup
│   │   ├── cloudinary.js    # Cloudinary configuration
│   │   └── utils.js         # Token generation & utilities
│   └── index.js             # Main Express app entry point
│
├── .env                     # Environment variables (Mongo URI, JWT, Cloudinary keys)
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation


---

## 🔧 Installation & Setup

To run the server locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/Priyansu22382/Backend-ChatApplication.git
   cd Backend-ChatApplication

2. **Install Dependencies**
    npm install

3. **Create a .env file**
   
   PORT=5001
   MONGODB_URI=<your_mongo_uri>
   JWT_SECRET=<your_jwt_secret>
   CLOUDINARY_CLOUD_NAME=<your_cloud_name>
   CLOUDINARY_API_KEY=<your_api_key>
   CLOUDINARY_API_SECRET=<your_api_secret>

   
4. **Start The Server**

   npm run dev


