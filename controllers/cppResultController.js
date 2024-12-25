
import { cppDataModel } from "../models/mcqsData.js"
import { cppAnswerModel } from "../models/candidateAnswers.js";


const correctAnswer = cppDataModel;
const answer = cppAnswerModel;

const cppResultController = async (req, res)=>{

    const dbQuestions = await correctAnswer.find({})
    const candidateAnswer = await answer.find({})

    let dynamicArrayCorrectAns = [];

        dbQuestions.forEach((mcq)=>{
            dynamicArrayCorrectAns.push(mcq.correctAnswer)
        })

    let dynamicArrayCandidateAns = [];
        candidateAnswer.forEach((candidateAns)=>{
            dynamicArrayCandidateAns.push(candidateAns.answer)
        })

    //Access myEmail  and user name from session

    const userDatafromDatabase = req.session.userData;

    let userEmail = userDatafromDatabase.email;
    let userName = userDatafromDatabase.myName;

    // console.log(userDatafromDatabase.email)

    res.render('cppResults',{'title':'Results', dynamicArrayCorrectAns, dynamicArrayCandidateAns, userEmail, userName})
}

export {cppResultController}