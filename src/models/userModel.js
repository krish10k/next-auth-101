import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    username: {
        type : String,
        required: [true, "please provide username"],
        unique: true
    },
    email :{
        type:String,
        required:[true,"Please provide email"],
        unique:true
    },
    password :{
        type: String,
        required: [true,"Password required"],
    },
    isVerified: {
        type : Boolean,
        default: false
    },
    // role:{
    //     // enum 
    // }
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgetPasswordToken:String,
    forgetPasswordTokenExpiry : Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})


const User = mongoose.models.users || mongoose.model("users",userSchema)
// mongoose.save(User)

export default User;