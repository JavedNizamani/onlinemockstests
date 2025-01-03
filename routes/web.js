import express from 'express'
const router = express.Router()

import { homeController } from '../controllers/homeController.js'
import { registerController } from '../controllers/registerController.js'
import { contactsController } from '../controllers/contactsController.js'
import { adminController } from '../controllers/adminController.js'
import { adminMcqs } from '../controllers/adminMcqs.js'
import testController from '../controllers/takeTestController.js'
import { resultController } from '../controllers/resultController.js'
import { cppResultController } from '../controllers/cppResultController.js'
import { postMcqsData, postQuestion } from '../controllers/mcqsController.js'
import { postCPPMcqsData, postCPPQuestion } from '../controllers/cppMcqsController.js'
import { postRegistrations } from '../models/register.js'
import { fetchWrongAnswers } from '../controllers/cppWrongAnsRevController.js'
import { fetchWrongAnswersNetworking } from '../controllers/networkingWrongAnsRevController.js'

import underConstruction from '../middlewares/uc-middleware.js'



router.post('/loginTest', testController)

router.get('/', testController)
router.get('/home', homeController)
router.get('/registration', registerController)
router.get('/contacts', contactsController)
router.get('/admin', adminController)
router.get('/adminMcqs', adminMcqs)
router.get('/myResults', resultController)
router.get('/cppResults',cppResultController)
router.get('/quiz', postMcqsData)
router.get('/cppQuiz', postCPPMcqsData)
router.get('/cppWrongAnsRev', fetchWrongAnswers)
router.get('/networkingWrongAnsRev', fetchWrongAnswersNetworking)
router.get('/siteuc', underConstruction)



router.post('/quiz/:page', postQuestion)
router.post('/cppQuiz/:page', postCPPQuestion)
router.post('/login', adminController)
router.post('/register', postRegistrations)


export default router