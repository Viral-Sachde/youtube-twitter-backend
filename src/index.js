// require('dotenv').config({ path: './env' })

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
    ptha: "./env"
})

connectDB()
    .then(() => app.listen(process.env.PORT || 8000), console.log(`sever is running on port ${process.env.PORT}`))
    .catch(
        (err) => { console.log("Mongodb connection failed!!!", err) }
    )



























// import express from "express";
// const app = express();
// //efis function ready karke turant run karo
// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME}`)
//         app._router.on("error", () => {
//             console.log("Err", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening o port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Error:", error)
//     }
// })()