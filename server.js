//Define modules
const express = require("express"); 
const mongoose = require("mongoose"); 
const bodyParser = require('body-parser');

//Connection to the database
mongoose.connect('mongodb://localhost/db', {useNewUrlParser: true}).then(() => {
    console.log('Connected to mongoDB')
}).catch(e => {
    console.log('Error while DB connecting');
    console.log(e);
});

//Define express module as app
const app = express();

//Body Parser
var urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());

//Set CORS headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//Routes
var router = express.Router();
app.use('/user', router);
require(__dirname + '/controllers/userController')(router);

//Port
var port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));