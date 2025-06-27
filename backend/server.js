import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webhook.controller.js';

// Initialize express
const app = express();

//connect to DB function
await connectDB();

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//Routes
app.get('/',(req,res)=>{
    res.send("api working")
})

app.post('/clerk',clerkWebhooks)

//Port
const PORT = process.env.PORT || 5000

app.listen(PORT , (req,res)=>{
    console.log(`Server is running on port ${PORT}`)
})