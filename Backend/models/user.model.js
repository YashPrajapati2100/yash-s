import mongoose from "mongoose";
import validator from "validator";
const userScama= new mongoose.Schema ({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required: true,
        validate: {
        validator: validator.isEmail,
        message: "Please enter a valid email address",
        },

    },
    phoneNumber:{
        type:Number,
        required:true,
        validate: [validator.isMobilePhone, "Invalid phone number"],
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['Student', 'recruiter'],
        require:true
    },
    profile:{
        bio:{type:String},
        skile:[{type:String}],
        resume:{type:String},
        resumeOriginalName:{type:String},
        company:{type:mongoose.Schema.Types.ObjectId,ref:'company'},
        profilePhoto:{
            type:String,
            default:""
        }

    }
},{timestamps:true})

export default User=mongoose.model('User', userScama)