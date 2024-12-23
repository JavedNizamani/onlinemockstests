import express from 'express'
const router = express.Router()

import { homeController } from '../controllers/homeController.js'
import { registerController } from '../controllers/registerController.js'
import { contactsController } from '../controllers/contactsController.js'
import { adminController } from '../controllers/adminController.js'
import { adminMcqs } from '../controllers/adminMcqs.js'
import testController from '../controllers/takeTestController.js'
import { resultController } from '../controllers/resultController.js'
import { postMcqsData, postQuestion } from '../controllers/mcqsController.js'
import { postRegistrations } from '../models/register.js'
import { adminSubjChoiceController } from '../controllers/adminSubjChoiceController.js'



router.post('/loginTest', testController)

router.get('/', homeController)
router.get('/registration', registerController)
router.get('/contacts', contactsController)
router.get('/admin', adminController)
router.get('/adminMcqs', adminMcqs)
router.get('/myResults', resultController)
router.get('/quiz', postMcqsData)
router.get('/takeTest', testController)
router.get('/adminSubjChoice', adminSubjChoiceController)


router.post('/quiz/:page', postQuestion)
router.post('/login', adminController)
router.post('/register', postRegistrations)


export default router