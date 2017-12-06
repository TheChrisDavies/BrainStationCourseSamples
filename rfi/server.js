const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Encounter = require('./models/Encounter');
const cors = require('cors');
const PORT = 8080;

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const MONGO_CONNECTION_STRING = 'mongodb://localhost:27017/data/db';

mongoose.connect(MONGO_CONNECTION_STRING);

const db = mongoose.connection;

// When running app locally, you must do the following in order in git bash in the project folder
// 1)mongod --dbpath data/db [This runs and connects to our Mongo Server]
// 2) nodemon server.js [This loads up our express server]
// 3) npm start [This starts our react app on localhost:3000]

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on("open", () => {
    console.log("we are connected to mongo (>'-')> <('-'<) ^('-')^ v('-')v(>'-')> (^-^)");
})
// Get request to get all of our encounters
app.get('/encs', (req, res) => {
    Encounter.find({})
        .then(encs => {
            res.json(encs)
        })
        .catch(error => {
            res.status(500).send('Encounters not found');
        })
})
// To add encounters to the table, use postman and follow the following JSON format to get it work properly
// Currently no implementation in the app itself to add new encounters, hope to add it in the future
app.post('/newEncs', (req, res) => {
    Encounter.create({
        title: req.body.title,
        action: req.body.action,
        description: req.body.description
    }).then(newEnc => {
        console.log(newEnc);
        res.json(newEnc);
    }).catch(error => { res.send('Our error is ', error) })
})

app.listen(PORT, () => {
    console.log('Server Started on', PORT);
    console.log('Press CTRL + C to stop server');
});
