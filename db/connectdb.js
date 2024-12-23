// Import mongoose first

import mongoose from 'mongoose'
import { MongoClient } from 'mongodb';

// const connectDB = ()=>{
//     return mongoose.connect("mongodb://localhost:27017/schooldb")
//     .then(()=>{
//         console.log("DB connected successfully..")
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

const mongoURI = process.env.MONGODB_URI;
const client= new MongoClient(mongoURI)

const connectDB = async ()=>{
    try {
        // await mongoose.connect("mongodb://localhost:27017/online_exams")
        client.connect()
        console.log("DB connected successfully..")
    } catch (err) {
        console.log(err)
    }
}

export default connectDB
