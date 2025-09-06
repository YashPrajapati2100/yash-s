import mongoose from "mongoose";

const companyScama= mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
    },
    website:{
        type:String
    },
    location:{
        type:String,
        require:true
    },
    logo:{
        type:String,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    }
     
},{timestamps:true})

export const company=mongoose.model('company',companyScama)