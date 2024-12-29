import { networkingDataModel } from "../models/mcqsData.js";
import { answerModel } from "../models/candidateAnswers.js";

const question = networkingDataModel;
const wrongAnswer = answerModel;

const fetchWrongAnswersNetworking = async (req, res) => {
    try {
        // Fetch all questions and answers
        const questions = await question.find();
        const answers = await wrongAnswer.find();

        res.render('networkingWrongAnsRev', {'title':'Review', questions})

    } catch (error) {
        console.log(error);
        res.status(500).send('An error occurred while fetching the data');
    }
}

export { fetchWrongAnswersNetworking };
