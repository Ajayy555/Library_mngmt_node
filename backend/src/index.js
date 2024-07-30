import express from "express";
import "dotenv/config";
import { app } from "./app.js";
import { dbConnection } from "./db/dbConnection.js";

dbConnection().
then(()=>{
    app.get('/', (req, res) => res.send('Welcome to Library'))
    app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))
})
.catch((error)=>{
    console.log(error,'Error While MongoDb connection');
})

