
import {cppDataModel} from "../models/mcqsData.js"
import { cppAnswerModel } from "../models/candidateAnswers.js";

const question = cppDataModel;
const wrongAnswer = cppAnswerModel;

const fetchWrongAnswers = async (req, res)=>{
    try{
        const questions = await question.find()
        const answers = await   wrongAnswer.find()
                
                res.render('cppWrongAnsRev', {'title':'Review', questions})
    }catch(error){
        console.log(error)
    }
}
export {fetchWrongAnswers }
