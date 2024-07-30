import mongoose from "mongoose";    

const bookSchema= new mongoose.Schema({
    title:{
        type:String,
        uppercase:true
    },
    ISBN:{
        type:String,
    },
    publisher:{
        type:String
    },
    publishedYear:{
        type:Number
    }



},{timestamps:true});

export const Book = new mongoose.model("Book",bookSchema);