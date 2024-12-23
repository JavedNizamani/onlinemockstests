import mongoose from "mongoose";

const mcqsDataSchema = new mongoose.Schema({
    id: {type: Number},
    myQuestion: {type: String},
    optionA: {type: String},
    optionB: {type: String},
    optionC: {type: String},
    optionD: {type: String},
    optionE: {type: String},
    correctAnswer: {type: String},
})

const mcqsDataModel = mongoose.model('mcq', mcqsDataSchema)

export {mcqsDataModel}

const postMcqsData = async (req, res)=>{
    try{
        const {myQuestion, optionA, optionB, optionC, optionD, optionE, correctAnswer} = req.body
     
                const mcqs = new mcqsDataModel({
                    myQuestion,
                    optionA,
                    optionB,
                    optionC,
                    optionD,
                    optionE,
                    correctAnswer,
                })
                const result =  mcqs.save()
        // console.log(result)
            

        res.render('home',{'title':'Home'})
    }catch(error){
        console.log(error)
    }
}

export default postMcqsData