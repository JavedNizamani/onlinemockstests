import mongoose from "mongoose";

const registerationSchema = new mongoose.Schema({
    myName: {type: String},
    email: {type: String},
    phone: {type: Number}
})

const registrationModel = mongoose.model('registration', registerationSchema)

export {registrationModel}

const postRegistrations = async(req, res)=>{
    try{
        const {myName, email, phone} = req.body;

            const registration = new registrationModel({
                myName,
                email,
                phone
            })
        const result = registration.save()
        console.log(result)

            res.redirect('/takeTest')

    }catch(error){
        console.log(error)
    }
}

export { postRegistrations}