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

const cppDataModel = mongoose.model('cpp', mcqsDataSchema)
export {cppDataModel}


const postMcqsData = async (req, res)=>{
    try{
        const {mySubject, myQuestion, optionA, optionB, optionC, optionD, optionE, correctAnswer} = req.body

        console.log(mySubject)
            if(mySubject === 'NETWORKING'){
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
            }
            if(mySubject === 'C++'){
                const cppMcqs = new cppDataModel({
                    myQuestion,
                    optionA,
                    optionB,
                    optionC,
                    optionD,
                    optionE,
                    correctAnswer,
                })
                const result =  cppMcqs.save()
            }
        res.render('adminMcqs',{'title':'AdminMcqs'})
    }catch(error){
        console.log(error)
    }
}

export default postMcqsData