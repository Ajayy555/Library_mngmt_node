import { Book } from "./../models/books.model.js";



export const addBook = (async (req, res) => {

    const { title, ISBN, publisher, publishedYear } = req.body;
    console.log(title, ISBN, publisher, publishedYear);

    if (!title && !ISBN && !publisher && !publishedYear) return res.status(401).json({ message: 'All fields are mandatory' })

    try {

        const response = await Book.create({
            title,
            ISBN,
            publisher,
            publishedYear
        })


        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error while adding books' })
    }


})



export const allBooks = (async (req, res) => {

    try {
        const response = await Book.find();

        res.status(200).json(response)

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error while showung books' })
    }


})
export const editBook = (async (req, res) => {
    const bookId = req.params.id;
    const bookData = req.body;

    try {
        try {
            const book = await Book.findById(bookId);
            if (book.length === 0) return res.status(500).json({ message: 'Book not found to modify' })

        } catch (error) {
            return res.status(500).json({ message: 'Book not found to modify' })
        }

    
    const response= await Book.findByIdAndUpdate(bookId,bookData,{new:true})
    res.status(200).json({message:'book details Updated successfully',response})

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error while modyfying books' })
    }

})


export const removeBook=(async(req,res)=>{


    try {

    const bookId=req.params.id;
    
        try {
            const book = await Book.findById(bookId);
            if (book.length === 0) return res.status(500).json({ message: 'Book not found to modify' })

        } catch (error) {
            return res.status(500).json({ message: 'Book not found to modify' })
        }
        
    const response = await Book.findByIdAndDelete(bookId);
    res.status(200).json({message:'book removed successfully',response})

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error while Removing book' })      
    }

})