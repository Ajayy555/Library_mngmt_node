import mongoose from "mongoose";    
import { Book } from "./books.model.js";
import { User } from "./user.model.js";

const bkTransactionSchema=new mongoose.Schema({
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Book
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
    },
    returnDate:{
        type:Date,

    }

},{timestamps:true});


export const BookTransaction= new mongoose.model("BookTransaction",bkTransactionSchema);