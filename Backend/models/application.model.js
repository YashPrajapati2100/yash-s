import { application } from "express";
import mongoose from "mongoose";

const applicationScama= mongoose.Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'job',
        require:true
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    status:{
        type:String,
        enum:['pending','accepted', 'rejected'],
        default:true
    }
},{timeseries:true})

export const Application=mongoose.model("Application", applicationScama)