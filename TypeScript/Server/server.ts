import app from './app';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL || '';

mongoose.connect(MONGODB_URL);

mongoose.connection.once('open', ()=>{
    console.log('Mongoose connection is established');
});

const PORT = process.env.PORT|| 7000;

app.listen(PORT, ()=>{
    console.log(`App is listening on http://localhost:${PORT}`);
});