import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import DBConnection from './database/db.js';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 8000;



app.get('/',function(req,res){
    res.sendHeader("Access-Control-Allow-Credentials","true")
});

DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
