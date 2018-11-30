const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongojs = require('mongojs')
const app = express();
const port = process.env.PORT ||3000;
const index = require('./routes/index');
const api = require('./routes/api');

//View Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

//Static Folder
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', api);

app.listen(port, function(){
    console.log(`Server started on port ${ port }`);
})

