if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/masterstack';

const authRoutes = require('./routes/auth');

mongoose
    .connect(dbUrl)
    .then(() => {
        console.log('MONGOOSE CONNECTION OPEN');
    })
    .catch(err => {
        console.log('IN MONGOOSE SOMETHING WENT WRONG', err);
    });

app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:3000', // client origin
    })
);

// app.get('/test', (req, res) => {
//     res.send("okkk with 3k");
// })

app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});