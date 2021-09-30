const express = require('express');
const bodyParser = require("body-parser");
const router = require('./src/routes/routing');
var path = require('path');
const myErrorLogger = require('./src/utilities/errorlogger')
const myRequestLogger = require('./src/utilities/requestlogger')



const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/dist/ArtinRefactor')))


app.use(myRequestLogger);
app.use('/', router);
app.use(myErrorLogger);

app.listen(process.env.PORT || 8080);
// app.listen(3000);
console.log("Server listening in port 3000");


module.exports = app

