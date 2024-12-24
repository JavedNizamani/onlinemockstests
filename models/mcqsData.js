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

// const mcqsDataModel = mongoose.model('mcq', mcqsDataSchema)                 // Test/Previous mcqs database
// export {mcqsDataModel}                                                  //exporting previous mcqs model
const networkingDataModel = mongoose.model('networking', mcqsDataSchema)        // New/ Networking subject database
export {networkingDataModel}

const postMcqsData = async (req, res)=>{
    try{
        const {myQuestion, optionA, optionB, optionC, optionD, optionE, correctAnswer} = req.body
     
                // const mcqs = new mcqsDataModel({                        // previous mcqs model
                const networkingMcqs = new networkingDataModel({
                    myQuestion,
                    optionA,
                    optionB,
                    optionC,
                    optionD,
                    optionE,
                    correctAnswer,
                })
                const result =  networkingMcqs.save()
        // console.log(result)
        res.render('adminMcqs',{'title':'AdminMcqs'})
    }catch(error){
        console.log(error)
    }
}

export default postMcqsData