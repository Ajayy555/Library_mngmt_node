import {User} from "./../models/user.model.js";
import {Book} from "./../models/books.model.js";
import {BookTransaction} from "./../models/transactions.model.js";



export const issueBook=(async(req,res)=>{
        const {ISBN,membershipId}=req.body;

        try {
            
            const returnDate=new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
            const book=await Book.find({ISBN:ISBN})
            if(!book) return res.status(400).json({message:'Invalid ISBN '})

            const user=await User.find({membershipId:membershipId})
            if(!user) return res.status(400).json({message:'Invalid member Id'})
            
            const response=await BookTransaction.create({
                bookId:book[0]._id,
                userId:user[0]._id,
                returnDate:returnDate

            })

        res.status(200).json({message:'Transaction Saved',response})

        } catch (error) {
            console.log(error);
            res.status(500).json({message:'Server Error while issuing Book'})
        }

})
