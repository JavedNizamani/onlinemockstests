import {networkingDataModel} from "../models/mcqsData.js"
import { answerModel } from "../models/candidateAnswers.js";

const question = networkingDataModel;

// const mcqsController =  (async (req, res)=>{

//     console.log("parameter Id", req.params.id)
//     const pageId = req.params.id
//     const questions = await question.find({id: pageId})
//     console.log(questions)
//     res.render('quiz', {'title':'Quiz', questions, pageId})
// })

const postMcqsData = async (req, res)=>{
    try{

        const page = parseInt(req.query.page) || 1;
        const limit = 1;
        const skip = (page - 1) * limit;

        const questions = await question.find().skip(skip).limit(limit)
        const totalQuestions = await question.countDocuments();
        const totalPages = Math.ceil( totalQuestions/limit )

    //    console.log(questions)

       res.render('quiz', {'title':'Quiz', questions, currentPage:page, totalPages})
        

    }catch(error){
        console.log(error)
    }
}

    const postQuestion = ('/quiz/:page',async(req, res)=>{

        const page = parseInt(req.params.page) || 1;
        const selectedAnswer = req.body.answer;
    
       // Handle saving or processing of the selected answer here (e.g., save to session or database)

        // const answer = new answerModel({
        //     page, 
        //     answer: selectedAnswer
        // })

        // await answer.save();


        await answerModel.updateOne(
            { page: page }, // Find the document based on the page number
            {
                $set: { answer: selectedAnswer } // Update the answer field
            },
            { upsert: true, new: true } // Return the updated document
           
        );

        // await answer.save();

       
        console.log(`Selected answer: ${selectedAnswer}`);
    
        // Redirect to the next question page
        res.redirect(`/quiz?page=${page + 1}` );
    })

export { postMcqsData, postQuestion }
