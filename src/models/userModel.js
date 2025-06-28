const {
  Schema,
  model
} = require("mongoose");
const userSchema = new Schema({
    email : {
        type : String,
        require : true,
        unique : true
    },
    fullName : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
        minlength : 6
    },
    profilePic : {
        type : String,
        default : "",
    },
    },
    {timestamps : true},
);

const User = model("User", userSchema);
module.exports = User;