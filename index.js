const express = require('express');
const app = express();

//getting cookie 
const cookieParser = require('cookie-parser');

const port = 8000;
//for ejs layout
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose')
//for ejs layout

//to get form data
app.use(express.urlencoded());

//to get cookie values
app.use(cookieParser());


//use static files
app.use(express.static('./assets'))


//to use form value
app.use(expressLayouts);



//use express router to get routes index
app.use('/',require('./routes/index'));





//view engine ejs
app.set('view engine','ejs');
app.set('views','./views')

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.listen(port,(err)=>{
    if(err){
    console.log(`err`,err);
    return; 
    }
    console.log(port)
})