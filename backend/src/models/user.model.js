import mongoose from "mongoose";

const userSchema= new mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    membershipId:{
        type:String,
        
    }

},{timestamps:true});


export const User=new mongoose.model("User",userSchema);