import { registrationModel } from "../models/register.js";

const testController = async (req, res)=>{
    try{
        const {email} = req.body;

            const userData = await registrationModel.findOne({email});
                if(!(userData)){
                    return res.render('takeTest', {'title':'Test', email});
                }else{
                    req.session.userData = userData       //Store myEmail in Session
                    res.redirect('/home')
                }   
}catch(error){
        res.status(404).json({Msg: `Error ${error}`});
    }
}

export default testController