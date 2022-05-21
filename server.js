import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());


app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Express app listening on port ${process.env.EXPRESS_PORT}`)
});

