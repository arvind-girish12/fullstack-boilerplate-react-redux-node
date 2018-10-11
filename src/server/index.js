const express = require('express');
const os = require('os');
const bodyParser = require('body-parser');


const app = express();

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});




var userRoutes = require('./routes/user.routes');

app.use('/' , userRoutes);

app.use(express.static('dist'));
app.get('/api/getUser', (req, res) => res.send({ username: os.userInfo().username }));


app.listen(8080, () => console.log('Listening on port 8080!'));
