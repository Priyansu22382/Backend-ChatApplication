const express = require("express");
const app = express();
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoute");
const messageRoutes = require("./routes/messageRoute");
const connectDB = require("./lib/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config(); // ✅ should be here early

app.use(express.json({ limit: '10mb' })); // or higher, like 20mb
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

const PORT = process.env.PORT || 5001;

// ✅ 1. Connect to DB
connectDB();

// ✅ 2. Use CORS FIRST!
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// ✅ 3. Body and cookie parsing
app.use(express.json());
app.use(cookieParser());

// ✅ 4. Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// ✅ 5. Start server
app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});
