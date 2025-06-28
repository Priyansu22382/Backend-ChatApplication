const express = require("express");
const { protectRoute } = require("../middlewares/authMiddleware");
const {getUsersForSidebar, getMessages, sendMessage} = require("../controllers/messageController");
const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages)

router.post("/send/:id", protectRoute, sendMessage)
module.exports = router;