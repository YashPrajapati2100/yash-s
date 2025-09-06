import {User} from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const register=async(req,res)=>{
    try {
        const {fullname,email,phoneNumber,password,role}=req.body;
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message:"Something is missing",
                success:false
            });

        }
        const User=await User.findone({email})
        if (User){
            return res.status(400).json({
                message:"User alredy exist with this email",
                success:false
            })  
        }
        const hashPassword =await bcrypt.hash(password,10)

        await User.create({
            fullname,
            email,
            phoneNumber,
            password:hashPassword,
            role
        })
        
    } catch (error) {
        
    }
}

export const login =async(req,res)=>{
    try {
        const {email,password,role}=req.body;
        if ( !email || !password || !role) {
            return res.status(400).json({
                message:"Something is missing",
                success:false
            });

        }
        let USER=await User.findone({email})
        if (!USER){
            return res.status(400).json({
                message:"Incorect email or Password",
                success:false
            });
        }
        const isPasswordMatch=await bcrypt.compare(password,USER.password)
        if(!isPasswordMatch){
            return res.status(400).json({
                message:"Incorect email or Password",
                success:false
            });
        }
        if(role != USER.role){
            return res.status(400).json({
                message:"Account not exist with current role",
                success:false
            });
        }
        const tokenData={
            UserId:USER._id
        }
        const token=await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'})

        return res.status(200).cookie('token',token,{maxAge:1*60*60*1000, httpsonly:true, sameSite:'strict'}).json({
            message:`welcome back ${USER.fullname}`, 
                success:true
        })
    } catch (error) {
        
    }
}