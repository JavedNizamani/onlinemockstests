import { adminModel } from "../models/Admin.js";
import bcrypt from "bcrypt"
const adminController = async (req, res)=>{
    try{
        const {email, password} = req.body;

            const myEmail = await adminModel.findOne({email});
                if(!(myEmail)){
                    return res.render('admin', {'title':'Admin', email});
                }
                const passwordCheck = await bcrypt.compare(password, myEmail.password)
                    // bcrypt module Used Here for Password Hash
                if( passwordCheck){
                    // res.redirect('/adminMcqs')                       // redirect at adminMcqs page
                    res.redirect('/adminMcqs')
                }else{
                    return res.render('admin', {'title':'Admin', email});
                } 
}catch(error){
        res.status(404).json({Msg: `Error ${error}`});
    }
}
    
export {adminController}