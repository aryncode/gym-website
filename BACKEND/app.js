import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import {sendEmail} from './utils/sendEmail.js'

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const router = express.Router();

config({ path: path.join(__dirname, 'config.env') });

app.use(cors({
    origin: [process.env.FRONTEND_URL, "https://gym-website-one-gules.vercel.app", "http://localhost:5173"],
    methods: ["POST"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/send/mail", async(req, res, next) => {
    const {name, email, message} = req.body;
    if(!name || !email || !message){
        return res.status(400).json({
            success: false,
            message: "Please fill all the fields",
        }) 
    }
    try{
        await sendEmail({
            email: process.env.SMTP_MAIL,
            subject: "GYM WEBSITE CONTACT",
            message,
            userEmail: email,
            name,
        })
        res.status(200).json({
            success: true,
            message: "Email sent successfully",
        })
    }catch (error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
})

app.use(router);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});