const User = require("../models/userModel");
const Message = require("../models/messageModel");

const getUsersForSidebar = async (req,res) => {
    try{
        const loggedInUserId = req.user._id;
        const filteredUser = await User.find({_id : {$ne : loggedInUserId}}).select("-password");
        res.status(200).json(filteredUser);
    }   
    catch(error){
        console.log("Error is getUsersForSidebar controller ",error.message);
        res.status(500).json({ message: "Internal Server error. Try again later." }); 
    }
}   

const getMessages = async (req,res) => {
    try{
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;
        const messages = await Message.find({$or : [{senderId : senderId, receiverId : userToChatId}, {senderId : userToChatId, receiverId : senderId}]});

        res.status(200).json(messages);

    }
    catch(error){
        console.log("Error in getMessages controller : "+error.message);
        res.status(500).json({message : "Internal Server Error"});
    }
}

const sendMessage = async (req,res) => {
    try {
        const {text,image} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;

        let imageUrl;
        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image : imageUrl,
        });

        await newMessage.save();

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sending Message : "+error.message);
        res.status(500).json({message : "Internal Server Error"});
    }
}
module.exports = {getUsersForSidebar, getMessages, sendMessage};