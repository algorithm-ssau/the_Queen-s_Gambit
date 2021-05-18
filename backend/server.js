const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config;

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://gvazyukova:12qwerty345@cluster0.pfi79.mongodb.net/theQueensGambit?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoBD database connection established successfuly!");
})

const episodesRouter = require('./routers/episodes');
const infoRouter = require('./routers/info');
/*const actorsRouter = require('./routers/actors');*/

/*app.use('/', mainRouter);
app.use('/actors', actorsRouter);
app.use('/characters', charactersRouter);*/
app.use('/info', infoRouter);
app.use('/episodes', episodesRouter);

app.listen(PORT, ()=>{
    console.log('Server is running on port: ', PORT)
})
