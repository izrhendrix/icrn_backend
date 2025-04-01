const express = require('express')
import bodyParser, { urlencoded } from "body-parser";
import { Request, Response } from "express";
import mongoose, { Mongoose } from "mongoose";
import { userRoute } from "./Routes";
import { MONGO_URI } from "./config";


//initantiate the app
const app = express();

const port = 3000

async function main (){

    await mongoose.connect(MONGO_URI, {
        serverSelectionTimeoutMS: 5000,  // Reduced timeout
        socketTimeoutMS: 45000,
        connectTimeoutMS: 10000,
      }).then((response) =>{
    console.log('db connected')
   }).catch((err) => {
    console.error(err)
   })
} 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//listening to the app
app.use('/customer', userRoute )

app.listen(port, () => {
    console.log(`connected here ${port}`)
    main();
})