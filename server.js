import 'dotenv/config';
import express from 'express';
import cors from 'cors';
const { connectDB } = require('./config/db')
const port = process.env.EXPRESS_PORT || 5000

const app = express();
app.use(cors());
app.use(express.json());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

app.get('/', (req, res) => {
    res.json({message: "Pharmacy App"})
})

app.use('/api/v1.0/users', require('./routes/userRoutes'))
app.use('/api/v1.0/managers', require('./routes/managerRoutes'));

connectDB()
app.listen(port, () => console.log(`Express app listening on port ${port}`));

