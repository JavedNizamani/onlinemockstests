
import {cppDataModel} from "../models/mcqsData.js"
import { cppAnswerModel } from "../models/candidateAnswers.js";

const question = cppDataModel;


const postCPPMcqsData = async (req, res)=>{
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = 1;
        const skip = (page - 1) * limit;

        const questions = await question.find().skip(skip).limit(limit)
        const totalQuestions = await question.countDocuments();
        const totalPages = Math.ceil( totalQuestions/limit )

    //    console.log(questions)

       res.render('cppQuiz', {'title':'C++', questions, currentPage:page, totalPages})
        
    }catch(error){
        console.log(error)
    }
}

    const postCPPQuestion = ('/cppQuiz/:page',async(req, res)=>{

        const page = parseInt(req.params.page) || 1;
        const selectedAnswer = req.body.answer;
    
       // Handle saving or processing of the selected answer here (e.g., save to session or database)

        // const answer = new answerModel({
        //     page, 
        //     answer: selectedAnswer
        // })

        // await answer.save();


        await cppAnswerModel.updateOne(
            { page: page }, // Find the document based on the page number
            {
                $set: { answer: selectedAnswer } // Update the answer field
            },
            { upsert: true, new: true } // Return the updated document
           
        );

        // await answer.save();

       
        console.log(`Selected answer: ${selectedAnswer}`);
    
        // Redirect to the next question page
        res.redirect(`/cppQuiz?page=${page + 1}` );
    })

export { postCPPMcqsData, postCPPQuestion }
