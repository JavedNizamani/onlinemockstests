
import {cppDataModel} from "../models/mcqsData.js"
import { cppAnswerModel } from "../models/candidateAnswers.js";

const question = cppDataModel;


const fetchWrongAnswers = async (req, res)=>{
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = 1;
        const skip = (page - 1) * limit;

        const questions = await question.find().skip(skip).limit(limit)
        const totalQuestions = await question.countDocuments();
        const totalPages = Math.ceil( totalQuestions/limit )

    //    console.log(questions)

       res.render('cppWrongAnsRev', {'title':'Review', questions, currentPage:page, totalPages})
        
    }catch(error){
        console.log(error)
    }
}

export {fetchWrongAnswers }
