// Import mongoose first

import mongoose from 'mongoose'

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
const connectDB = async ()=>{
    try {
        await mongoose.connect(mongoURI)
        console.log("DB connected successfully..")
    } catch (err) {
        console.log(err)
    }
}

export default connectDB
