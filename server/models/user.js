import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String,required:true},
    email: { type: String, required: true },
    userType: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },
    location:{type:String}
})

const User = mongoose.model("Users",userSchema);
export default User;