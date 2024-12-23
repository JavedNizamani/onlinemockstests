import dotenv from 'dotenv'
import express from 'express'
dotenv.config();
import bodyParser from 'body-parser';
const port = process.env.PORT;
import web from './routes/web.js'
import underConstruction from './middlewares/uc-middleware.js'
import connectDb from './db/connectdb.js'
import postData from './models/Admin.js';
import postMcqsData from './models/mcqsData.js';
import session from 'express-session';

const app = express();
app.use(bodyParser.urlencoded({extended: true})); 
connectDb()



app.set('view engine', 'ejs')
app.use(express.static('public'))
// Application level Middleware
//  app.use(underConstruction)

// middleware to handle session

    app.use(session({
        secret: 'secret-key',           //Secret key to sign the session ID cookie
        resave: false,
        saveUninitialized: true,
        cookie: {secure: false}     //Use secure: true if using HTTPs
    }))
    
app.use('/', web) 
app.post('/admin', postData)
app.post('/adminMcqs', postMcqsData)


app.listen(port, ()=>{
    console.log(`Server Running at http://localhost: ${port}`)
})