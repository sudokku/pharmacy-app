import 'dotenv/config';
import express from 'express';
import cors from 'cors';
const { connectDB } = require('./config/db')
const port = process.env.EXPRESS_PORT || 5000

connectDB()

const app = express();
app.use(cors());
app.use(express.json());


app.listen(port, () => console.log(`Express app listening on port ${port}`));

