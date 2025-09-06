import { application } from "express";
import mongoose from "mongoose";

const jobScama= new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    describtion:{
        type:String,
        require:true
    },
    requirements:{
        type:String
    },
    salary:{
        type:Number,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    jobType:{
        type:String,
        require:true
    },
    position:{
        type:Number,
        require:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        require:true
    },
    creacted_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    application:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Aplication'
        }
    ]
},{timestamps:true})

export const  Job=mongoose.model("Job",jobScama)