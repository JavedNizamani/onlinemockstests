import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    id: {type: Number},
    page: Number,
    answer: String
})

const answerModel = mongoose.model('CandidateAnswer', answerSchema);

export{ answerModel }

