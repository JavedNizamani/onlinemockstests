// Import mongoose first

import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const mongoURI = process.env.MONGODB_URI;
// const connectDB = ()=>{
//     return mongoose.connect("mongodb://localhost:27017/schooldb")
//     .then(()=>{
//         console.log("DB connected successfully..")
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

const connectDB = async ()=>{
    try {
        await mongoose.connect(mongoURI).then(console.log("Check URL something wrong"));
        console.log("DB connected successfully..")
    } catch (err) {
        console.log(err)
    }
}

export default connectDB
