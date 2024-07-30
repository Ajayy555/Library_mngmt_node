import express from "express";
import multer from "multer"

const upload = multer();
const app = express()

app.use(express.json());
app.use(upload.array());




//user routes
import userRouter from "./routes/user.routes.js";
app.use("/user",userRouter)


//books routes
import booksRouter from "./routes/books.routes.js";
app.use("/books",booksRouter)


//Transactions routes
import TransactionRoutes from "./routes/transactions.routes.js";
app.use("/transaction",TransactionRoutes)


export {app}