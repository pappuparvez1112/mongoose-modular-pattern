// import express, { Application } from 'express';
// import cors from 'cors'
// import mongoose, { Collection } from 'mongoose'
// require('dotenv').config()





// const app:Application=express();

// //using cors
// app.use(cors())

// //using json parse data

// app.use(express.json());
// app.use(express.urlencoded({extended:false}))

// const {URI}=process.env;
// const port =process.env.PORT || 5500;
// console.log(URI);

// const dbconnect=async():Promise<void>=>{
//     if(!URI){
//         throw new Error("uri is not defined")
//     }
//     await mongoose.connect(URI).then(()=>console.log("Database connected"));
//     const db=mongoose.connection;

//     //collection name
//     const collection=db.collection("persons");
//     app.get("/test",async(req,res)=>{
//         const result=await collection.find().limit(0).toArray();
//         res.send(result)
//     })
// };

// dbconnect();

// app.get("/",(req,res)=>{
//     res.send({
//         message:"server is running ",
//         status:200
//     });
// })

// app.listen(port,()=>console.log(`Server is running on post ${port}`));

import { app } from "./app";
import { log } from "./app/utils/logger";


const {PORT}=process.env;

const startServer=async():Promise<void>=>{
   try{
    app.listen(PORT,()=>{
        log.info(`Server is running port ${PORT}`); 
    });
   }catch (err:any){
    log.error(err.message)
   }
};

startServer();



// app.get("/",(req,res)=>{
//     res.send({
//         message:"server is running ",
//         status:200
//     });
// })

// app.listen(port,()=>console.log(`Server is running on post ${port}`));
