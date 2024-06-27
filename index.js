import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './routes/userRoute.js'; // Ensure this path and file extension are correct

dotenv.config(); 

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;



mongoose.connect(MONGO_URL, {  })
  .then(() => {
    console.log('Database connected successfully');

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch(error => console.log(error));

app.use('/api/users', route); 
