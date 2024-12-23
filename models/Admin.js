import mongoose from "mongoose";
import bcrypt from "bcrypt"

// Defining schema
const adminSchema = new mongoose.Schema({
    email: {type: String},
    password: {type: String}
})

// Defining Model
const adminModel = mongoose.model('data', adminSchema )

export {adminModel}

const postData = async (req, res)=>{
    try{ 
        const {email, password} = req.body
        const admin = new adminModel({
        email,
        password: await bcrypt.hash(password, 8)
    })
        // await admin.save()

    res.render('admin', {'title':'Admin'})

    } catch(error){
        console.log(error)
    } 
}
export default postData