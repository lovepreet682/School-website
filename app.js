const express= require('express');
const app = express();
const router = require('./src/router/nav');
const mongoose=require('mongoose');
const hbs = require('hbs');
const details = require('./src/models/userDetails');
const body =require('body-parser');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//use the public folder
app.use('/static', express.static("public"));

//to get the router values 
app.use('', router);



//template engine
app.set('view engine','hbs');
app.set('views','views');

//to use the main components in the website to use partials 
hbs.registerPartials('views/partials');


//mongodb servers 
mongoose.connect('mongodb://localhost:27017/freelancing',()=>{
    console.log('Connected to MongoDB');
    });

app.listen(process.env.PORT ||'3000', function(req, res) {
    console.log('Port is working');
});