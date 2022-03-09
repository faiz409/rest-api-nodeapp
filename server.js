import express from "express";
import mongoose from "mongoose";
import { PORT, DB_URL } from "./config";
import errorHandler from "./middlewares/errorHandler";
const app = express();
import routes from './routes';
import path from "path";

//Database Connection
mongoose.connect(DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('DB connected...');
});

//Global keyword define
global.appRoot = path.resolve(__dirname);

//Using for pasrse form data
app.use(express.urlencoded({ extended: false }));

//Use Json data
app.use(express.json());

//Use url prefix
app.use('/api', routes);

// Use for server image of database on browser
app.use('/uploads', express.static('uploads'));

//Middelware check for error
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Listing on port ${PORT}`);
});

