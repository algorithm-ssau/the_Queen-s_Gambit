const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://gvazyukova:12qwerty345@cluster0.pfi79.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoBD database connection established successfuly!");
})

app.listen(PORT, ()=>{
    console.log('Server is running on port: ', PORT)
})
